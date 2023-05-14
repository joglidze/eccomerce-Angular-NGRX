export interface ProductResponse {
  id: string;
  total: number;
  quantity: number;
  item: Item;
  user: User;
}

export interface Item {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: CategoryProduct;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export interface CategoryProduct {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: null;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}
