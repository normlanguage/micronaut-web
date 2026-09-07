import assert from 'node:assert/strict';
import { cpSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const repository = resolve(import.meta.dirname, '..');
const cli = resolve(process.argv[2]);
const directory = mkdtempSync(resolve(tmpdir(), 'micronaut-web-test-'));
try {
  const module = resolve(directory, 'dependencies/micronaut/web');
  cpSync(resolve(repository, 'micronaut/web'), module, { recursive: true });
  cpSync(resolve(repository, 'examples/tests'), resolve(directory, 'tests'), { recursive: true });
  const args = ['run', resolve(directory, 'tests/Main.norm')];
  const script = process.platform === 'win32' && /\.(bat|cmd)$/i.test(cli);
  const result = spawnSync(script ? process.env.ComSpec : cli,
    script ? ['/d', '/c', 'call', cli, ...args] : args,
    { cwd: directory, encoding: 'utf8', timeout: 180000 });
  if (result.error) throw result.error;
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.equal(result.stdout.trim(), 'Database configuration passed');
  console.log(result.stdout.trim());
} finally {
  rmSync(directory, { recursive: true, force: true });
}
