export interface Product {
    
    id:          string;
    name:        string;
    description: string;
    image:       string;
    price:       number;
    createdAt:   Date;
    updatedAt:   Date;
    deletedAt:   null;
    category:    Category;
}

export interface Category {
    id:        number;
    name:      string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: null;
}
