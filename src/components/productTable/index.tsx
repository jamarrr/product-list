import reactLogo from '../../assets/react.svg';
import styles from './index.module.css';

type TableProps = {
  headers: string[];
  data?: null;
  setSelectedProduct: (product: number) => void;
};

export default function ProductTable({
  headers,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
        <tr onClick={() => setSelectedProduct(1)}>
          <td className="img-container">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </td>
          <td>
            <h3>iPhone 9</h3>
            <p>
              Apple iPhone Apple iPhone Apple iPhone Apple iPhone Apple iPhone
              Apple iPhone
            </p>
          </td>
          <td>P 549.00</td>
        </tr>
      </tbody>
    </table>
  );
}
