import styles from './index.module.css';
import closeIcon from '../../assets/close.svg';
import { Product, ProductModalProps } from '../../../types';
import useSWR from 'swr';
import { fetchData } from '../../api';

export default function ProductModal({
  selectedProductId,
  setSelectedProductId,
}: ProductModalProps) {
  const { data: productDetails } = useSWR<Product>(
    `https://dummyjson.com/products/${selectedProductId}`,
    fetchData
  );

  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <div className={styles['close-btn-container']}>
          <img
            src={closeIcon}
            alt="close"
            onClick={() => setSelectedProductId(null)}
            className={styles.close}
          />
        </div>
        <span>{productDetails?.category}</span>
        <h2>{productDetails?.title}</h2>
        <p>{productDetails?.description}</p>
        <p className={styles.price}>₱{productDetails?.price}</p>
        <div className={styles['more-images']}>
          <p>More Images</p>
          <div className={styles['imgs-container']}>
            {productDetails?.images.slice(0, 4).map((image) => (
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
