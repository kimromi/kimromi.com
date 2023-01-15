import styles from './Center.module.css';

type Props = {
  children: React.ReactNode;
};

export const Center: React.FC<Props> = (props) => (
  <div className={styles.center} {...props} />
);
