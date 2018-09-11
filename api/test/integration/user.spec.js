import User from '../../model/user';
import Faker from 'faker';
import bcrypt from 'bcryptjs';
import UserService from '../../services/user_service';


const app = require('../../../server');
const request = require('supertest');
const assert = require('chai').assert;

describe('User REST API', () => {
	const user = {
		username: Faker.internet.userName(),
		password: bcrypt.hashSync('secret', 8),
	};

	before(() => {
		User.create(user, (err, res) => {});
	});

	it('get all the users in the db', (done) => {
		request.agent(app.listen())
			.get('/users/')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200)
			.end((err, res) => {
				assert.isArray(res.body);
				assert.equal(user.username, res.body[0].user_name);
				if (err) {
					return done(err);
				}
				done();
			});
	});

	it('get one user from the db', (done) => {
		request.agent(app.listen())
			.get(`/users/${user.username}`)
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200)
			.end((err, res) => {
				assert.isObject(res.body);
				assert.equal(user.username, res.body.username);
				if (err) {
					return done(err);
				}
				done();
			});
	});

	after(() => {
		User.deleteMany({ id: { $ne: ' ' } }, (err, res) => {
			console.log(err);
		});
	});
});
