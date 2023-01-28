import { Center } from '../../layout/Center';
import { Stack } from '../../layout/Stack';
import { ExternalServices } from '../ExternalServices';
import styles from './Footer.module.css';

type Props = {
  showExternalServices?: boolean;
};

export const Footer: React.FC<Props> = ({ showExternalServices = false }) => (
  <Center>
    <footer className={styles.footer}>
      <Stack space="small">
        {showExternalServices && <ExternalServices />}
        <div>&copy; {new Date().getFullYear()} kimromi</div>
      </Stack>
    </footer>
  </Center>
);
