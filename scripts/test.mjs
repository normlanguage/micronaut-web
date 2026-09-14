import assert from 'node:assert/strict';
import { resolve } from 'node:path';
import { spawn, spawnSync } from 'node:child_process';
import { setTimeout } from 'node:timers/promises';

const repository = resolve(import.meta.dirname, '..');
const cli = resolve(process.argv[2]);
const script = process.platform === 'win32' && /\.(bat|cmd)$/i.test(cli);
const executable = script ? process.env.ComSpec : cli;
const prefix = script ? ['/d', '/c', 'call', cli] : [];
const configuration = spawnSync(executable,
  [...prefix, 'run', resolve(repository, 'examples/tests/Main.norm')],
  { cwd: repository, encoding: 'utf8', timeout: 180000, windowsHide: true });
if (configuration.error) throw configuration.error;
assert.equal(configuration.status, 0, configuration.stderr || configuration.stdout);
assert.equal(configuration.stdout.trim(), 'Database configuration passed');

const server = spawn(executable,
  [...prefix, 'run', resolve(repository, 'examples/acceptance/default.norm')],
  { cwd: repository, windowsHide: true, stdio: ['ignore', 'pipe', 'pipe'] });
let logs = '';
server.stdout.on('data', data => { logs += data; });
server.stderr.on('data', data => { logs += data; });
server.on('error', error => { logs += error.message; });
try {
  const deadline = Date.now() + 180000;
  while (!logs.includes('Micronaut: http://')) {
    assert.equal(server.exitCode, null, logs);
    assert.ok(Date.now() < deadline, logs || 'Server startup timed out');
    await setTimeout(250);
  }
  const base = logs.match(/Micronaut: (http:\/\/[^\s]+)/)[1];
  const home = await fetch(base);
  assert.equal(home.status, 200);
  assert.match(home.headers.get('content-type'), /^text\/html/);
  const html = await home.text();
  assert.match(html, /Hello, Norm\./);
  assert.equal((html.match(/<li>/g) ?? []).length, 3);
  const escaped = await fetch(`${base}/?name=${encodeURIComponent('<script>世界</script>&')}`);
  const escapedHtml = await escaped.text();
  assert.ok(!escapedHtml.includes('<script>'));
  assert.match(escapedHtml, /&lt;script&gt;世界&lt;\/script&gt;&amp;/);
  const hidden = await fetch(`${base}/?details=false`);
  assert.ok(!(await hidden.text()).includes('<li>'));
  const greeting = await fetch(`${base}/greeting?name=${encodeURIComponent('世界 & Norm')}`);
  assert.equal(greeting.status, 200);
  assert.equal(await greeting.text(), '<p>Hello, 世界 &amp; Norm!</p>');
  console.log('Passed: configuration, HTML responses, file and inline templates, Unicode, escaping, loops and conditions.');
} finally {
  if (server.exitCode === null) {
    if (process.platform === 'win32') {
      spawnSync('taskkill', ['/pid', String(server.pid), '/t', '/f'], { windowsHide: true, stdio: 'ignore' });
    } else server.kill('SIGTERM');
  }
}
