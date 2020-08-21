const request = require('supertest');

const server = require('./server.js');
const db = require('../database/dbConfig.js');

describe('server', () => {
    beforeEach(async () => {
        await db('users').truncate();
    });

    describe('GET /', () => {
        it('should return 200 OK', () => {
            return request(server)
                .get('/')
                .then(res => {
                    expect(res.status).toBe(200)
                })
        })

        it("should return 200 OK using async/await", async () => {
            const res = await request(server).get("/");

            expect(res.status).toBe(200);
        });
    })

})