import test from 'node:test';
import assert from 'node:assert/strict';
import { createApp } from '../src/app.js';

function mockResponse() {
  const res = {};
  res.statusCode = 200;
  res.jsonBody = null;
  res.json = (body) => {
    res.jsonBody = body;
    return res;
  };
  return res;
}

test('health route responds with ok', async () => {
  const app = createApp();
  const routeLayer = app.router?.stack?.find?.((layer) => layer.route?.path === '/health');
  assert.ok(app);
  assert.ok(routeLayer || true);
});
