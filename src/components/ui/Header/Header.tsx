import Image from 'next/image';
import Link from 'next/link';
import { Center } from '../../layout/Center';
import { Stack } from '../../layout/Stack';
import { ExternalServices } from '../ExternalServices';
import styles from './Header.module.css';

export const Header: React.FC = () => (
  <Center>
    <header className={styles.header}>
      <Stack space="small">
        <Link href="/">
          <Image
            className={styles.logo}
            src="/logo.png"
            alt="logo"
            width={72}
            height={72}
          />
        </Link>

        <div className={styles.name}>
          <Link href="/">kimromi</Link>
        </div>

        <div className={styles.who}>Software engineer in Fukuoka, Japan</div>

        <ExternalServices />
      </Stack>
    </header>
  </Center>
);
