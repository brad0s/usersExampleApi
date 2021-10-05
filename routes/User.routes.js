import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// Get All Route
router.get('/', async (req, res) => {
  // Rest of the code will go here
});

// Get One Route
router.get('/:id', async (req, res) => {
  // Rest of the code will go here
});

// Create One Route
router.post('/', async (req, res) => {
  // Rest of the code will go here
});

// Edit One Route PUT version
router.put('/:id', async (req, res) => {
  // Rest of the code will go here
});

// Edit One Route PATCH version
router.patch('/:id', async (req, res) => {
  // Rest of the code will go here
});

// Delete One Route
router.delete('/:id', async (req, res) => {
  // Rest of the code will go here
});

export default router;
