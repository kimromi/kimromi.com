import Link from 'next/link';
import Image from 'next/image';

type Props = {
  isSticky?: boolean;
  children?: React.ReactNode;
};

export const Header = ({ isSticky = false, children }: Props): JSX.Element =>
  isSticky ? (
    <header className="container flex z-50 items-center p-4 mx-auto mb-4 text-sm bg-background pc:sticky pc:top-0">
      <Link href="/">
        <a className="flex items-center">
          <Image src="/logo.png" alt="logo" width={20} height={20} />
          <span className="ml-2">kimromi</span>
        </a>
      </Link>
      {children}
    </header>
  ) : (
    <header className="flex flex-col justify-center mt-24 mb-20">
      <div className="text-center">
        <Link href="/">
          <a>
            <Image src="/logo.png" alt="logo" width={72} height={72} />
          </a>
        </Link>
      </div>
      <div className="mt-4 text-3xl text-center">
        <Link href="/">
          <a>kimromi</a>
        </Link>
      </div>

      <div className="mt-4 text-sm text-center text-gray-600">
        Software engineer in Fukuoka, Japan
      </div>
    </header>
  );
