import './App.css';
import TextBox from './components/textBox';
import ProductModal from './components/productModal';
import { useState, useEffect } from 'react';
import ProductTable from './components/productTable';
import { Product } from '../types';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [products, setProducts] = useState<Product[]>([]);

  const headers = ['Thumbnail', 'Name', 'Price'];

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((data) => data.json())
      .then((products) => setProducts(products.products));
  }, []);

  return (
    <div className="container">
      <div className="banner">Products Demo</div>
      <TextBox setValue={setSearchKeyword} value={searchKeyword} />
      <div className="products">
        <ProductTable
          data={products}
          headers={headers}
          setSelectedProduct={setSelectedProduct}
        />
      </div>
      {selectedProduct && (
        <ProductModal
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      )}
    </div>
  );
}

export default App;
