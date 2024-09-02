const express = require('express');
const auth = require('../middlewares/auth');
const User = require('../models/user');
const Movie = require('../models/movie');

const router = new express.Router();

// Admin-only route to get all users
router.get('/admin/users', auth.enhance, async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Admin-only route to delete a user
router.delete('/admin/users/:id', auth.enhance, async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findByIdAndDelete(_id);
    if (!user) return res.sendStatus(404);
    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Admin-only route to manage movies (similar routes can be created for movies)
router.get('/admin/movies', auth.enhance, async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.send(movies);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
