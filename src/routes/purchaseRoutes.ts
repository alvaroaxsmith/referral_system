import express from 'express';
import purchaseController from '../modules/purchases/purchase.controller';

const router = express.Router();

router.post('/', purchaseController.registerPurchase);

export default router;
