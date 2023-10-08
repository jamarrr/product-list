import { Product, TableProps } from '../../../types';
import styles from './index.module.css';

export default function ProductTable({
  headers,
  data,
  setSelectedProduct,
}: TableProps) {
  return (
    <table className={styles['products-table']}>
      <thead>
        <tr>
          {headers.map((header: string) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((product: Product) => (
          <tr key={product.id} onClick={() => setSelectedProduct(product)}>
            <td className="img-container">
              <img
                className={styles['row-image']}
                src={product.thumbnail}
                alt={product.title}
              />
            </td>
            <td>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </td>
            <td>₱{product.price}.00</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
