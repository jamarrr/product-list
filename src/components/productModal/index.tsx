import styles from './index.module.css';
import closeIcon from '../../assets/close.svg';
import { Product } from '../../../types';

export default function ProductModal({
  selectedProduct,
  setSelectedProduct,
}: {
  selectedProduct: Product | null;
  setSelectedProduct: (prod: Product | null) => void;
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
        <span>{selectedProduct?.category}</span>
        <h2>{selectedProduct?.title}</h2>
        <p>{selectedProduct?.description}</p>
        <p className={styles.price}>₱{selectedProduct?.price}</p>
        <div className={styles['more-images']}>
          <p>More Images</p>
          <div className={styles['imgs-container']}>
            {selectedProduct?.images.slice(0, 4).map((image) => (
              <img
                key={image}
                src={image}
                alt={image}
                className={styles.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
