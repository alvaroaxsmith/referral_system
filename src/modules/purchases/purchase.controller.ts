import { Request, Response } from 'express';
import purchaseService from './purchase.service';
import Purchase from './purchase.interface';

/**
 * @swagger
 * tags:
 *   name: Purchases
 *   description: Endpoints related to purchases
 */

/**
 * @swagger
 * /purchases:
 *   post:
 *     summary: Registers a new purchase
 *     tags: [Purchases]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               product_name:
 *                 type: string
 *               person_name:
 *                 type: string
 *               indication_code:
 *                 type: string
 *     responses:
 *       201:
 *         description: New purchase successfully registered
 *         content:
 *           application/json:
 *             example:
 *               indication_code: "XYZ123"
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /generate-indication-code:
 *   get:
 *     summary: Generates a new referral code
 *     tags: [Purchases]
 *     responses:
 *       200:
 *         description: Referral code generated successfully
 *         content:
 *           application/json:
 *             example:
 *               indication_code: "ABC456"
 *       500:
 *         description: Internal server error
 */

const registerPurchase = async (req: Request, res: Response) => {
  try {
    const { product_name, person_name, indication_code }: Purchase = req.body;
    const result: Purchase = await purchaseService.registerPurchase(product_name, person_name, indication_code);
    res.status(201).json({ indication_code: result.indication_code });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default { registerPurchase };
