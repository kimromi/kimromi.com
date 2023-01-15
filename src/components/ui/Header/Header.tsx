import Image from 'next/image';
import Link from 'next/link';
import { Stack } from '../../layout/Stack';
import { ExternalServices } from '../ExternalServices';
import styles from './Header.module.css';

export const Header: React.FC = () => (
  <header className={styles.header}>
    <Stack>
      <div className="text-center">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={72}
            height={72}
            className="inline"
          />
        </Link>
      </div>

      <div className="text-center text-3xl">
        <Link href="/">kimromi</Link>
      </div>

      <div className="text-center text-sm text-tertiary">
        Software engineer in Fukuoka, Japan
      </div>

      <ExternalServices />
    </Stack>
  </header>
);
