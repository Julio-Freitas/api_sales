import { Request, Response } from 'express';
import ListProductServices from '../services/ListProductServices';
import ShowProductsServices from '../services/ShowProductsServices';
import DeleteProductsServices from '../services/DeletProductsServices';
import CreateProductsServices from '../services/CreateProductService';
import UpdateProductsServices from '../services/UpdateProductsServices';

export default class ProductsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listProducts = new ListProductServices();
    const products = await listProducts.execute();
    return response.json(products);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showProduct = new ShowProductsServices();

    const product = await showProduct.execute({ id });
    return response.json(product);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, price, quantity } = request.body;
    const createProduct = new CreateProductsServices();

    const product = await createProduct.execute({ name, price, quantity });
    return response.json(product);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const deleteProduct = new DeleteProductsServices();
    await deleteProduct.execute(id);

    return response.json([]);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, quantity, price } = request.body;

    const updateProduct = new UpdateProductsServices();

    const product = await updateProduct.execute({ id, name, quantity, price });
    return response.json(product);
  }
}
