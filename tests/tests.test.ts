import app from '../src/app.js';
import supertest from 'supertest';
import Factory from './factory/index.js';

describe("TESTS /tests ", () => {
    it("User can post test, expected status 200", async () => {
        const test = Factory.Tests.create();
        const user = await Factory.User.signin();
        const auth = await supertest(app).post("/signin").send(user);
        const result = await supertest(app).post("/test").send(test).set('Authorization', 'Bearer ' + auth.body.token);
        expect(result.status).toEqual(200);
    });
  });