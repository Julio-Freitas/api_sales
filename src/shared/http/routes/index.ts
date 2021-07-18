import { Router } from 'express';
import productsRouter from '@modules/products/routes/productsRoutes';

const routes = Router();

routes.use('/products', productsRouter);

routes.get('/', (req, res) => res.json({ message: 'Ola viado"!' }));

export default routes;
