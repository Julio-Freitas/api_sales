import { EntityRepository, Repository } from 'typeorm';
import Product from '../entities/Product';
type ProductType = Product | undefined;

@EntityRepository(Product)
export default class ProductRepository extends Repository<Product> {
  static async findByName(name: string): Promise<ProductType> {
    const product = this.findOne({
      where: {
        name,
      },
    });
    return product;
  }
}
