import AppErrors from '@shared/erros/AppErrors';
import { getCustomRepository } from 'typeorm';
import ProductRepository from '../typeorm/repositories/ProductRepositories';

interface productType {
  name: string;
  price: number;
  quantity: number;
}

class CreateProductService {
  public async execute({
    name,
    price,
    quantity,
  }: productType): Promise<productType> {
    const productsRepository = getCustomRepository(ProductRepository);
    const hasProcut = await ProductRepository.findByName(name);

    if (hasProcut)
      throw new AppErrors("There's already one product with this name!");

    const product = productsRepository.create({
      name,
      price,
      quantity,
    });

    await productsRepository.save(product);

    return product;
  }
}

export default CreateProductService;
