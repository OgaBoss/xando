import express from 'express';
import AuthService from '../services/authService';

const router = express.Router();
router.post('/register', (req, res) => {
  AuthService.register(req, res);
});

module.exports = router;
