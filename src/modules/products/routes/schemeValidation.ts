import { celebrate, Segments, Joi } from 'celebrate';

export const show = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  },
});

export const create = celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    price: Joi.number().precision(2).required(),
    quantity: Joi.number().required(),
  },
});

export const update = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  },
  [Segments.BODY]: {
    name: Joi.string(),
    price: Joi.number().precision(2),
    quantity: Joi.number(),
  },
});

export const del = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  },
});
