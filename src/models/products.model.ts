import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Products extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  price: number;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
    id: true,
    required: true,
    generated: true,
  })
  id: string;

  constructor(data?: Partial<Products>) {
    super(data);
  }
}

export interface ProductsRelations {
  // describe navigational properties here
}

export type ProductsWithRelations = Products & ProductsRelations;
