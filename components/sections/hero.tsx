import Image from 'next/image';
import { NavLink } from './header';
import { Button } from '../ui/button';

export const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32 ">
      <div id="hero" className="container">
        <div className="relative z-2 max-w-512 max-lg:max-w-388">
          <div className="caption small-2 uppercase text-p3">Video editing</div>
          <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">Amazingly simple</h1>
          <p className="max-440 mb-14 body-1 max-md:mb-10"> We designed Xora AI Video Editor to be an easy to use, quick to learn, and surprisingly powerful</p>
          <NavLink targetId="features">
            <Button icon="/images/zap.svg" markerFill="">
              Try it new
            </Button>
          </NavLink>
        </div>
        <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
          <Image src="/images/hero.png" alt="hero" width={1230} height={1230} quality={90} priority className="size-1230 max-lg:h-auto" />
        </div>
      </div>
    </section>
  );
};
