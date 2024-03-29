import Link from 'next/link';
import Image from 'next/image';
import { Center } from '../../layout/Center';
import { Cluster } from '../../layout/Cluster';

type Props = {
  children?: React.ReactNode;
};

type DeviderProps = {
  className?: string;
};

export const StickyHeader: React.FC<Props> = ({ children }) => (
  <Center>
    <header className="my-4 text-sm">
      <Cluster gap="small">
        <Link href="/" className="flex">
          <Image src="/logo.png" alt="logo" width={20} height={20} />
          <span className="ml-2">kimromi</span>
        </Link>

        <Devider />

        {children}
      </Cluster>
    </header>
  </Center>
);

export const Devider: React.FC<DeviderProps> = ({ className = '' }) => (
  <span className={`text-sm text-tertiary ${className}`}>/</span>
);
