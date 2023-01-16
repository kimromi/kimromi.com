import styles from './Cluster.module.css';

type Props = {
  as?: React.ElementType;
  center?: boolean;
  gap?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
};

export const Cluster: React.FC<Props> = ({
  as: Component = 'div',
  center = false,
  gap = 'medium',
  ...rest
}) => {
  return (
    <Component
      className={`${styles.cluster} ${styles[`gap-${gap}`]} ${
        center ? styles.center : ''
      }`.trim()}
      {...rest}
    />
  );
};
