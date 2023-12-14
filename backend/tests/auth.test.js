const chai = require('chai');
const supertest = require('supertest');
const app = require('../server'); // Replace with the actual path to your Express app
const path = require('path');
const userModel = require(path.resolve(__dirname, '../models/userModels.js'));

// Replace with the actual path to your user model
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { expect } = chai;
const request = supertest(app);

describe('Registration and Login API Tests', () => {
  let testUser;

  before(async () => {
    // Create a test user for login tests
    const password = '1234';
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    testUser = new userModel({
      name: 'allu arjun',
      email: 'aa@example.com',
      password: hashedPassword,
    });
    await testUser.save();
  });

  describe('Registration API', () => {
    it('should register a new user', async () => {
      const res = await request.post('/api/v1/user/register').send({
        name: 'priivirag1',
        email: 'spr1.dunki@example.com',
        password: 'password123',
      });

      expect(res.status).to.equal(201);
      expect(res.body.success).to.equal(true);
      expect(res.body.message).to.equal('Register Sucessfully');
    });

    it('should return an error if the user already exists', async () => {
      const res = await request.post('/api/v1/user/register').send({
        name: 'user',
        email: 'user@gmail.com',
        password: 'testpassword',
      });

      expect(res.status).to.equal(200);
      expect(res.body.success).to.equal(false);
      expect(res.body.message).to.equal('User Already Exist');
    });
  });

  describe('Login API', () => {
    it('should log in with valid credentials', async () => {
      const res = await request.post('/api/v1/user/login').send({
        email: '1@gmail.com',
        password: '1',
      });

      expect(res.status).to.equal(200);
      expect(res.body.success).to.equal(true);
      expect(res.body.message).to.equal('Login Success');
      expect(res.body.token).to.exist;
    });

  

    it('should return an error for non-existent user', async () => {
      const res = await request.post('/api/v1/user/login').send({
        email: 'nonexistentuser@example.com',
        password: 'password123',
      });

      expect(res.status).to.equal(200);
      expect(res.body.success).to.equal(false);
      expect(res.body.message).to.equal('user not found');
    });
  });
});
