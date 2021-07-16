import AppErrors from '@shared/erros/AppErrors';
import { getCustomRepository } from 'typeorm';
import ProductRepository from '../typeorm/repositories/ProductRepositories';

interface productType {
  id: string;
}

export default class DeletProductsServices {
  public async execute({ id }: productType): Promise<void> {
    const productsRepository = getCustomRepository(ProductRepository);
    const products = await productsRepository.findOne(id);
    if (!products) throw new AppErrors('Product not found');
    await productsRepository.remove(products);
  }
}
