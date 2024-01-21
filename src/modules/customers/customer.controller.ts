import { Request, Response } from 'express';
import customerService from './customer.service';
import Customer from './customer.interface';

/**
 * @swagger
 * tags:
 *   name: Customers
 *   description: Endpoints related to customers
 */

/**
 * @swagger
 * /customers:
 *   get:
 *     summary: Returns the list of customers with points
 *     tags: [Customers]
 *     responses:
 *       200:
 *         description: List of customers with points
 *         content:
 *           application/json:
 *             example:
 *               - person_code: "123"
 *                 person_name: "John Doe"
 *                 points: 5
 *               - person_code: "456"
 *                 person_name: "Jane Doe"
 *                 points: 3
 *       500:
 *         description: Internal server error
 */

export default {
  async getCustomers(req: Request, res: Response): Promise<void> {
    try {
      const customers: Customer[] = await customerService.getCustomersWithPoints();
      res.status(200).json(customers);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  /**
 * @swagger
 * /customers/{person_code}/indications:
 *   get:
 *     summary: Returns the referrals for a specific customer
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: person_code
 *         required: true
 *         description: Customer code
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Referrals for the specific customer
 *         content:
 *           application/json:
 *             example:
 *               person_name: "A"
 *               indications:
 *                 - person_code: "789"
 *                   product_name: "Product A"
 *                   purchase_date: "2024-01-18"
 *                   indication_code: "XYZ123"
 *                 - person_code: "789"
 *                   product_name: "Product B"
 *                   purchase_date: "2024-01-19"
 *                   indication_code: "ABC456"
 *       500:
 *         description: Internal server error
 */

  async getIndications(req: Request<{ properties: Customer }>, res: Response): Promise<void> {
    try {
      const personCode = req.params.properties.person_code;
      console.log('From Customer/Person code:', personCode);
      const indications = await customerService.getIndicationsForPerson(personCode);
      console.log('From Customer/Indications:', indications);
      res.status(200).json({ person_name: 'A', indications });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};
