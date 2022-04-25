import Link from 'next/link';
import Image from 'next/image';

export const Header = (): JSX.Element => (
  <header className="mb-8 pt-24 pb-12 flex flex-col justify-center">
    <div className="text-center">
      <Link href="/">
        <a>
          <Image
            className="rounded-full"
            src="/logo.jpg"
            alt="logo"
            width={72}
            height={72}
          />
        </a>
      </Link>
    </div>
    <div className="mt-4 text-center text-3xl">
      <Link href="/">
        <a>kimromi</a>
      </Link>
    </div>

    <div className="mt-4 text-center text-sm text-gray-600">
      A Software Developer
    </div>
  </header>
  // <header className="sticky top-0 container mx-auto mb-4 px-4 py-4 bg-background border-b border-gray-700">
  //   <Link href="/">
  //     <a className="flex items-center">
  //       <Image src="/kimromi.jpg" width={20} height={20} />
  //       <span className="ml-2">kimromi</span>
  //     </a>
  //   </Link>
  // </header>
);
