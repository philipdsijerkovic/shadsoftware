import express from 'express';
import { createQuote, getAllQuotes, getQuoteById } from '../controllers/quoteController.js';

const router = express.Router();

// POST /api/quotes - Create new quote
router.post('/', createQuote);

// GET /api/quotes - Get all quotes
router.get('/', getAllQuotes);

// GET /api/quotes/:id - Get specific quote by ID
router.get('/:id', getQuoteById);

export default router;