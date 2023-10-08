import styles from './index.module.css';
import closeIcon from '../../assets/close.svg';

export default function ProductModal({
  selectedProduct,
  setSelectedProduct,
}: {
  selectedProduct: number | null;
  setSelectedProduct: (prod: number | null) => void;
}) {
  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <div className={styles['close-btn-container']}>
          <img
            src={closeIcon}
            alt="close"
            onClick={() => setSelectedProduct(null)}
            className={styles.close}
          />
        </div>
        <span>Smartphones {selectedProduct}</span>
        <h2>iPhone 9</h2>
        <p>An apple mobile which is nothing like apple</p>
        <p className={styles.price}>P549.00</p>
        <div className={styles['more-images']}>
          <p>More Images</p>
          <div className={styles['imgs-container']}>{}</div>
        </div>
      </div>
    </div>
  );
}
