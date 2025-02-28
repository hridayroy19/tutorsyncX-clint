"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRef } from "react";

const Herosection = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <div className="w-full flex py-10 container mx-auto px-5 justify-center">
      <Carousel
        plugins={[plugin.current]}
        className="w-full "
        onMouseEnter={() => plugin.current.stop()}
        onMouseLeave={() => plugin.current.reset()}
      >
        <CarouselContent>
          <CarouselItem>
            <div>
              <Image
                src="https://i.ibb.co.com/G462sYwX/pngtree-children-at-home-with-tutor-or-parent-getting-education-banner-image-1301370.jpg"
                width={500}
                height={400}
                alt="Banner 1"
                className="w-full h-auto object-cover"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div>
              <Image
                src="https://i.ibb.co.com/3ycWnC5Z/pngtree-qualification-increase-course-banner-professional-image-1297744.jpg"
                width={500}
                height={400}
                alt="Banner 2"
                className="w-full h-auto object-cover"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div>
              <Image
                src="https://i.ibb.co.com/YTJTZDL0/white-and-royal-blue-education-banner-template-9m8jbj82c00174.webp"
                width={500}
                height={400}
                alt="Banner 3"
                className="w-full h-auto object-cover"
              />
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Herosection;
