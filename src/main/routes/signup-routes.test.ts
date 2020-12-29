import { MongoHelper } from '../../infra/db/mongodb/account-repository/helpers/mongo-helper'
import app from '../config/app'

import request from 'supertest'

describe('SignUp Routes', () => {
  test('Should return an account on success', async () => {
    beforeAll(async () => {
      await MongoHelper.connect(process.env.MONGO_URL)
    })

    afterAll(async () => {
      await MongoHelper.disconnect()
    })

    beforeEach(async () => {
      const accountCollection = MongoHelper.getCollection('accounts')
      await accountCollection.deleteMany({})
    })
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Andre Alves',
        email: 'andre@andre.com',
        password: '123456',
        passwordConfirmation: '123456'
      })
      .expect(200)
  })
})
