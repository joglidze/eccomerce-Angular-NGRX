export interface ProductResponse {
  id: number;
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
  category: Category;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export interface Category {
  id: number;
  name: string;
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
