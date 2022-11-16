import Link from 'next/link';
import Image from 'next/image';

type Props = {
  children?: React.ReactNode;
};

type DeviderProps = {
  className?: string;
};

export const StickyHeader: React.FC<Props> = ({ children }) => (
  <header className="container z-50 mx-auto mb-4 flex items-center bg-background p-4 text-sm pc:sticky pc:top-0">
    <Link href="/" className="flex items-center">
      <Image src="/logo.png" alt="logo" width={20} height={20} />
      <span className="ml-2">kimromi</span>
    </Link>
    <Devider />
    {children}
  </header>
);

export const Devider: React.FC<DeviderProps> = ({ className }) => (
  <span className={`px-2 text-sm text-tertiary ${className}`}>/</span>
);
