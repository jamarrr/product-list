import './App.css';
import TextBox from './components/textBox';
import ProductModal from './components/productModal';
import { useState, useEffect } from 'react';
import ProductTable from './components/productTable';
import { ConditionalProductContentProps, Product } from '../types';
import useSWR from 'swr';
import { useDebounce } from '@uidotdev/usehooks';
import { fetchProducts } from './api';

function RenderConditionalContent({
  keywordSearch,
  isSearching,
  products,
  headers,
  setSelectedProduct,
}: ConditionalProductContentProps) {
  if (keywordSearch !== '' && isSearching) {
    return 'Searching ...';
  } else if (keywordSearch !== '' && products?.length === 0) {
    return 'No product matched your searched keyword.';
  }

  return (
    <ProductTable
      data={products}
      headers={headers}
      setSelectedProduct={setSelectedProduct}
    />
  );
}

function App() {
  const HEADERS = ['Thumbnail', 'Name', 'Price'];
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);

  const keywordSearch = useDebounce(searchKeyword, 1000);
  const { data } = useSWR('https://dummyjson.com/products', fetchProducts, {
    revalidateOnFocus: false,
  });

  /**
   * Populate product list depending on the search keyword
   */
  useEffect(() => {
    if (keywordSearch !== '') {
      fetch(`https://dummyjson.com/products/search?q=${keywordSearch}`)
        .then((data) => {
          setIsSearching(true);
          return data.json();
        })
        .then((products) => {
          setProducts(products.products);
          setIsSearching(false);
        });
    }
  }, [keywordSearch]);

  return (
    <div className="container">
      <div className="banner">Products Demo</div>
      <TextBox setValue={setSearchKeyword} value={searchKeyword} />
      <div className="products">
        <RenderConditionalContent
          headers={HEADERS}
          setSelectedProduct={setSelectedProduct}
          keywordSearch={keywordSearch}
          isSearching={isSearching}
          products={keywordSearch !== '' ? products : data?.products}
        />
      </div>
      {selectedProduct !== null && (
        <ProductModal
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      )}
    </div>
  );
}

export default App;
