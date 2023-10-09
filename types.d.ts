export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type TableProps = {
  headers: string[];
  data: Product[];
  setSelectedProduct: (product: number) => void;
};

export type ConditionalProductContentProps = {
  keywordSearch: string;
  isSearching: boolean;
  products: Product[];
  headers: string[];
  setSelectedProduct: (id: number | null) => void;
};

export type ProductModalProps = {
  selectedProductId: number;
  setSelectedProductId: (id: number | null) => void;
};
