import { EntityRepository, Repository } from 'typeorm';
import Product from '../entities/Product';
type ProductType = Product | undefined;

@EntityRepository(Product)
class ProductRepository extends Repository<Product> {
  public async findByName(name: string): Promise<ProductType> {
    const product = this.findOne({
      where: {
        name,
      },
    });

    return product;
  }
}
export default ProductRepository;
