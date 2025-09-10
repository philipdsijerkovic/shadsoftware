import type { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma/index.js';

const prisma = new PrismaClient();

export const createQuote = async (req: Request, res: Response) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      projectName,
      projectType,
      projectDescription,
      budget,
      timeline,
      features,
      inspiration,
      additionalInfo,
      requestCall,
    } = req.body;

    console.log('Received quote data:', req.body);

    // Generate a unique quote ID
    const quoteId = `quote-${Date.now()}`;

    // Create quote in database
    const quote = await prisma.quote.create({
      data: {
        quoteId,
        firstName,
        lastName,
        email,
        phone,
        company,
        projectName,
        projectType,
        projectDescription,
        budget,
        timeline,
        features,
        inspiration,
        additionalInfo,
        requestCall: requestCall || false,
      },
    });

    console.log('Quote created successfully:', quote);

    res.status(201).json({
      message: 'Quote request submitted successfully!',
      quoteId: quote.quoteId,
      timestamp: quote.createdAt,
    });
  } catch (error) {
    console.error('Error creating quote:', error);
    res.status(500).json({
      message: 'Failed to submit quote request',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

export const getAllQuotes = async (req: Request, res: Response) => {
  try {
    const quotes = await prisma.quote.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    res.status(200).json({
      message: 'Quotes retrieved successfully',
      data: quotes,
      count: quotes.length,
    });
  } catch (error) {
    console.error('Error fetching quotes:', error);
    res.status(500).json({
      message: 'Failed to retrieve quotes',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

export const getQuoteById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const quote = await prisma.quote.findUnique({
      where: {
        quoteId: id,
      },
    });

    if (!quote) {
      return res.status(404).json({
        message: 'Quote not found',
      });
    }

    res.status(200).json({
      message: 'Quote retrieved successfully',
      data: quote,
    });
  } catch (error) {
    console.error('Error fetching quote:', error);
    res.status(500).json({
      message: 'Failed to retrieve quote',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};