const app = require('../src/server/index.js');
const request = require('supertest')
describe('Test Endpoints', () => {
  it('should test the endpoint', async () => {
    const res = await request(app)
      .get('/testServer')
    expect(res.body.msg).toBe('Endpoint test is successful')
  })
})