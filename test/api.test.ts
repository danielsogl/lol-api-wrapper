import request from 'supertest';
import app from '../src/app';

describe('GET /', () => {
  it('should get base route', () => {
    return request(app)
      .get('/')
      .expect(200);
  });
});
