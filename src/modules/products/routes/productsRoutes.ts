import { Router } from 'express';
import * as schemeValidation from './schemeValidation';
import ProductsController from '../controller/productsController';

const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.get('/', productsController.index);

productsRouter.get('/:id', schemeValidation.show, productsController.show);
productsRouter.post('/', schemeValidation.create, productsController.create);
productsRouter.put('/:id', schemeValidation.update, productsController.update);
productsRouter.delete('/:id', schemeValidation.del, productsController.delete);

export default productsRouter;
