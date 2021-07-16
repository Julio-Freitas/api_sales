import AppErrors from '@shared/erros/AppErrors';
import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product';

import ProductRepository from '../typeorm/repositories/ProductRepositories';

export default class ShowProductServices {
  public async execute({ id }: string): Promise<Product> {
    const productsRepository = getCustomRepository(ProductRepository);
    const products = await productsRepository.findOne(id);
    if (!products) throw new AppErrors('Product not found');
    return products;
  }
}
