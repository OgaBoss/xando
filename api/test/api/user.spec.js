const app = require('../../../server');
const request = require('supertest');
const assert = require('chai').assert;

describe('User REST API', () => {
	it('get all the users in the db', (done) => {
		request.agent(app.listen())
			.get('/users')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200, [])
			.end((err, res) => {
				assert.isArray(res.body);
				if (err) {
					return done(err);
				}
				done();
			});

		// request(app) .get('/users') .end((err, res) => {
		// 	expect(res.statusCode).to.equal(200);
		// 	expect(res.body).to.be.an('array');
		// 	expect(res.body).to.be.empty;
		// 	done();
		// });

		// request(app)
		// 	.get('/user')
		// 	.set('Accept', 'application/json')
		// 	.expect('Content-Type', /json/)
		// 	.expect(200, done)
		// 	.expect(function(res) {
		// 		res.body.id = 'some fixed id';
		// 		res.body.name = res.body.name.toUpperCase();
		// 	});
	});
});
