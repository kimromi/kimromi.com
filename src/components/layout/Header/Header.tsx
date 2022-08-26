import Image from 'next/image';
import { ExternalServices } from '../../ui/ExternalServices';
import { Link } from '../../ui/Link';

export const Header: React.FC = () => (
  <header className="mt-24 mb-20 flex flex-col justify-center">
    <div className="text-center">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={72} height={72} />
      </Link>
    </div>
    <div className="mt-4 text-center text-3xl">
      <Link href="/">kimromi</Link>
    </div>

    <div className="mt-4 text-center text-sm text-tertiary">
      Software engineer in Fukuoka, Japan
    </div>

    <div className="mt-4">
      <ExternalServices />
    </div>
  </header>
);
