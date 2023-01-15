import styles from './Stack.module.css';

type Props = {
  space?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
};

export const Stack: React.FC<Props> = ({ space = 'medium', ...rest }) => (
  <div className={styles[`stack-${space}`]} {...rest} />
);
