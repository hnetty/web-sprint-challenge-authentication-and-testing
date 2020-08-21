const db = require('../database/dbConfig.js');
const Users = require('./auth-model.js');

describe('authModel', () => {
    beforeEach(async () => {
        await db('users').truncate();
    })

    describe('add',() => {
        it('should add users', async () => {
            await Users.add({
                username: 'Harper',
                password: '123abc'
            })

            const users = await db('users');

            expect(users).toHaveLength(1);
        })
    })
    
})