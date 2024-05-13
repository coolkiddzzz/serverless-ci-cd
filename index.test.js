// const { firsthandler } = require('./index')

// describe('firsthandler', () => {
//   it('should return status code 200 and the correct message', async () => {
//     const event = {};
//     const expectedResponse = {
//       statusCode: 200,
//       body: JSON.stringify({
//         message: "This is get function!",
//       }, null, 2),
//     };
//     const result = await firsthandler(event);
//     expect(result).toEqual(expectedResponse);
//   });
// });

const request = require('supertest');
const app = require('./index');

describe('GET /', () => {
  it('responds with "Hello, world!"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, world!');
  });
});