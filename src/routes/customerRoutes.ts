import express from 'express';
import customerController from '../modules/customers/customer.controller';

const router = express.Router();

router.get('/', customerController.getCustomers);
router.get('/:person_code/indications', customerController.getIndications);

export default router;
