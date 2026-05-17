import test from 'node:test';
import assert from 'node:assert/strict';
import request from 'supertest';
import { createApp } from '../src/app.js';

test('health route responds with ok', async () => {
  const app = createApp();

  const res = await request(app).get('/health');

  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.body, { message: 'OK' });
});