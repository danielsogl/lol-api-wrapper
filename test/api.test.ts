import request from 'supertest';
import session from 'supertest-session';
import app from '../src/app';

describe('GET /', () => {
  let testSession = undefined;

  beforeEach(function() {
    testSession = session(app);
  });

  it('should get base route', () => {
    return request(app)
      .get('/')
      .expect(200);
  });
});
