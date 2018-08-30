/**
 * Created by adebayooluwadamilola on 7/5/18.
 */
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../model/user';

const authService = {
	register(req, res) {
		User.create({
			username: req.body.username,
			password: bcrypt.hashSync(req.body.password, 8),
		}).then((data) => {
			res.send(data);
			const token = jwt.sign({ id: data._id }, 'testing', {
				expiresIn: 86400,
			});
			res.status(200).send({ auth: true, token });
		}).catch((err) => {
			res.status(500).send(err);
		});
	},
};

export default authService;
