/**
 * Created by adebayooluwadamilola on 7/5/18.
 */
import express from 'express';
import UserService from '../services/user_service';

const router = express.Router();
router.get('/', (req, res) => {
	UserService.getAllUsers(req, res);
});

router.get('/:user_name', (req, res) => {
	UserService.getAUser(req, res);
});

module.exports = router;
