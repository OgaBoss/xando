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

	getAUser() {},
};

export default userService;
