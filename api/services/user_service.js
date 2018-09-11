import User from '../model/user';

const userService = {
	getAllUsers(req, res) {
		User.find({}, (err, users) => {
			const userData = [];

			users.forEach((user) => {
				userData.push({
					id: user._id,
					user_name: user.username,
				});
			});
			res.send(userData);
		});
	},

	getAUser(req, res) {
		User.find({ user_name: req.user_name }, (err, users) => {
			res.send(users[0]);
		});
	},
};

export default userService;
