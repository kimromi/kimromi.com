import Image from 'next/image';
import { Link } from '../Link';

export const Header: React.FC = () => (
  <header className="flex flex-col justify-center mt-24 mb-20">
    <div className="text-center">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={72} height={72} />
      </Link>
    </div>
    <div className="mt-4 text-3xl text-center">
      <Link href="/">kimromi</Link>
    </div>

    <div className="mt-4 text-sm text-center text-gray-600">
      Software engineer in Fukuoka, Japan
    </div>
  </header>
);
