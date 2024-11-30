'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface NavLinkProps {
  title?: string;
  targetId: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const NavLink = ({ title, targetId, children, className, onClick }: NavLinkProps) => {
  const handleScroll = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (onClick) onClick();
  };

  return (
    <div onClick={handleScroll} className={clsx('base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5', className)}>
      {children || <span>{title}</span>}
    </div>
  );
};

export const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={clsx('fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4', hasScrolled && 'py-2 bg-black-100 backdrop-blur-[8px]')}>
      <div className="container flex h-14 items-center max-lg:px-5">
        <Link href="/" className="lg:hidden flex-1 cursor-pointer z-2">
          <Image src="/images/xora.svg" alt="xora" width={115} height={55} quality={90} priority />
        </Link>

        <div className={clsx('w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0', isOpen && 'max-lg:opacity-100')}>
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="Features" targetId="features" onClick={() => setIsOpen(false)} />
                  <div className="dot" />
                  <NavLink title="Pricing" targetId="pricing" onClick={() => setIsOpen(false)} />
                </li>
                <li className="nav-logo">
                  <NavLink targetId="hero" className="max-lg:hidden transition-transform duration-500 cursor-pointer">
                    <Image src="/images/xora.svg" alt="Logo" width={160} height={55} quality={90} priority />
                  </NavLink>
                </li>
                <li className="nav-li">
                  <NavLink title="FAQ" targetId="faq" onClick={() => setIsOpen(false)} />
                  <div className="dot" />
                  <NavLink title="Download" targetId="download" onClick={() => setIsOpen(false)} />
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <button className="lg:hidden z-2 border-2 border-s4/25 rounded-full flex justify-center items-center" onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? (
            <Image src="/images/close.svg" alt="close" width={50} height={50} quality={90} className="size-1/2 object-contain" />
          ) : (
            <Image src="/images/magic.svg" alt="menu" width={50} height={50} quality={90} className="size-1/2 object-contain" />
          )}
        </button>
      </div>
    </header>
  );
};
