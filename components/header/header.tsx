'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Link as LinkScroll } from 'react-scroll';

interface NavLinkProps {
  title: string;
}

const NavLink = ({ title }: NavLinkProps) => {
  return <LinkScroll to="/">{title}</LinkScroll>;
};

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full py-10">
      <div className="container flex h-14 items-center max-lg:[px-5]">
        <Link href="/" className="lg:hidden flex-1 cursor-pointer z-2">
          <Image src="/images/xora.svg" alt="xora" width={115} height={55} quality={90}></Image>
        </Link>
        <div className="w-full border-2 border-amber-400">
          <nav>
            <ul className="flex max-lg:block max-lg:px-12">
              <li className="nav-li">
                <NavLink title="Features" />
                <div className="dot" />
                <NavLink title="Pricing" />
              </li>
              <li className="nav-logo">
                <LinkScroll to="#">
                  <Image src="/images/xora.svg" alt="Logo" width={160} height={55} quality={90} />
                </LinkScroll>
              </li>
              <li className="nav-li">
                <NavLink title="FAQ" />
                <div className="dot" />
                <NavLink title="Download" />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
