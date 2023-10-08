import './App.css';
import TextBox from './components/textBox';
import ProductModal from './components/productModal';
import { useState } from 'react';
import ProductTable from './components/productTable';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [searchKeyword, setSearchKeyword] = useState<string>('');

  const headers = ['Thumbnail', 'Name', 'Price'];

  return (
    <>
      <div className="container">
        <div className="banner">Products Demo</div>
        <div className="products">
          <TextBox setValue={setSearchKeyword} value={searchKeyword} />
          <ProductTable
            headers={headers}
            setSelectedProduct={setSelectedProduct}
          />
        </div>
      </div>
      {selectedProduct && (
        <ProductModal
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      )}
    </>
  );
}

export default App;
