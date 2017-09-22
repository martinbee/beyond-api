import express from 'express';

const router = express.Router()

// /users
// define the home page route
router.get('/', function (req, res) {
  res.send('Users home page')
})

// define the about route
router.get('/about', function (req, res) {
  res.send('About Users')
})

export default router;
