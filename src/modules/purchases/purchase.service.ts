// purchaseService.ts
import purchaseRepository from './purchase.repository';
import customerService from '../customers/customer.service';

const generateIndicationCode = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

const registerPurchase = async (product_name: string, person_name: string, referrer_code?: string): Promise<any> => {
  const newIndicationCode = referrer_code || generateIndicationCode();
  await purchaseRepository.insertPurchase(product_name, person_name, newIndicationCode);

  if (referrer_code) {
    await customerService.incrementIndicationPoints(referrer_code);

    const referrerPoints = await customerService.getIndicationPoints(referrer_code);
    if (referrerPoints >= 10) {
      console.log(`Parabéns! Você atingiu 10 pontos de indicação e ganhou o prêmio X.`);
    }
  }

  return { indication_code: newIndicationCode };
};

export default { registerPurchase };
