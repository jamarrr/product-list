import { useState } from 'react';
import closeIcon from '../../assets/close.svg';
import styles from './index.module.css';

type TextBoxProps = {
  value: string;
  setValue: (val: string) => void;
};

export default function TextBox({ value, setValue }: TextBoxProps) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={`${styles.container} ${isActive ? styles.active : ''}`}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search product"
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
      />
      <img
        src={closeIcon}
        alt="close"
        className={styles.close}
        onClick={() => setValue('')}
      />
    </div>
  );
}
