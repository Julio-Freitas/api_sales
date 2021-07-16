import AppErrors from '@shared/erros/AppErrors';
import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product';
import ProductRepository from '../typeorm/repositories/ProductRepositories';

interface productType {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export default class ListProductServices {
  public async execute({
    id,
    name,
    price,
    quantity,
  }: productType): Promise<Product> {
    const productsRepository = getCustomRepository(ProductRepository);
    const products = await productsRepository.findOne(id);

    if (!products) throw new AppErrors('Product not found');

    const hasProcut = await productsRepository.findByName(name);

    if (hasProcut)
      throw new AppErrors("There's already one product with this name!");

    products.name = name;
    products.quantity = quantity;
    products.price = price;

    await productsRepository.save(products);

    return products;
  }
}
