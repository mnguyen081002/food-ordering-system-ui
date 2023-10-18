import 'swiper/css';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdOutlineArrowBack, MdOutlineArrowForward } from 'react-icons/md';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Hamburger = () => (
  <>
    <div className="absolute left-[1252px] top-[75px] z-[10] origin-center animate-animation-part-10">
      <img
        src="https://themeholy.com/wordpress/pizzan/wp-content/uploads/layerslider/projects/pizzan-1/burger_part_10.png"
        alt=""
      />
    </div>
    <div className="absolute left-[1193px] top-[204px] z-[9] origin-center animate-animation-part-9">
      <img
        src="https://themeholy.com/wordpress/pizzan/wp-content/uploads/layerslider/projects/pizzan-1/burger_part_9.png"
        alt=""
      />
    </div>
    <div className="absolute left-[1135px] top-[263.922px] z-[8] origin-center animate-animation-part-8">
      <img
        src="https://themeholy.com/wordpress/pizzan/wp-content/uploads/layerslider/projects/pizzan-1/burger_part_8.png"
        alt=""
      />
    </div>
    <div className="absolute left-[1268.02px] top-[340.32px] z-[8] origin-center animate-animation-part-8">
      <img
        src="https://themeholy.com/wordpress/pizzan/wp-content/uploads/layerslider/projects/pizzan-1/burger_part_6.png"
        alt=""
      />
    </div>
    <div className="absolute left-[1410px] top-[300px] z-[8] origin-center animate-animation-part-8">
      <img
        src="https://themeholy.com/wordpress/pizzan/wp-content/uploads/layerslider/projects/pizzan-1/burger_part_7.png"
        alt=""
      />
    </div>
    <div className="absolute left-[1200.55px] top-[354.211px] z-[7] origin-center animate-animation-part-5">
      <img
        src="https://themeholy.com/wordpress/pizzan/wp-content/uploads/layerslider/projects/pizzan-1/burger_part_5.png"
        alt=""
      />
    </div>
    <div className="absolute left-[1186.66px] top-[464.344px] z-[6] origin-center animate-animation-part-4">
      <img
        src="https://themeholy.com/wordpress/pizzan/wp-content/uploads/layerslider/projects/pizzan-1/burger_part_4.png"
        alt=""
      />
    </div>
    <div className="absolute left-[1095.38px] top-[506.016px] z-[5] origin-center animate-animation-part-3">
      <img
        src="https://themeholy.com/wordpress/pizzan/wp-content/uploads/layerslider/projects/pizzan-1/burger_part_3.png"
        alt=""
      />
    </div>
    <div className="absolute left-[1169.79px] top-[491.133px] z-[4] origin-center animate-animation-part-2">
      <img
        src="https://themeholy.com/wordpress/pizzan/wp-content/uploads/layerslider/projects/pizzan-1/burger_part_2.png"
        alt=""
      />
    </div>
    <div className="absolute left-[1215.43px] top-[591.344px] z-[3] origin-center animate-animation-part-1">
      <img
        src="https://themeholy.com/wordpress/pizzan/wp-content/uploads/layerslider/projects/pizzan-1/burger_part_1.png"
        alt=""
      />
    </div>
  </>
);
const Home = () => {
  const [isHover, setIsHover] = useState(false);

  let timer: NodeJS.Timeout;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const [swiper, setSwiper] = useState<any>();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const s = document.querySelector('.swiper') as any;
    setSwiper(s?.swiper);
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex h-[100px] w-full items-center bg-[#010f1c]">
        <div className="flex h-full w-[340px] items-center justify-center">
          <img
            src="https://themeholy.com/wordpress/pizzan/wp-content/uploads/2023/06/logo-white.svg"
            alt=""
          />
        </div>
        <div className="mx-28 flex w-full items-center justify-between">
          <div className="flex gap-5">
            <Link className="text-xl text-white" href="/">
              HOME
            </Link>
            <Link className="text-xl text-white" href="/orders">
              ORDERS
            </Link>
          </div>
          <button className="relative">
            {/** Cart badge */}
            <span className="absolute -right-2 -top-2 rounded-full bg-red-500 px-[6px] text-xs text-white">
              0
            </span>
            <AiOutlineShoppingCart
              className="cursor-pointer text-white transition-all duration-300 hover:text-red-500"
              size={28}
            />
          </button>
        </div>
      </div>
      <div className="relative flex h-[804px] w-full items-center bg-[url('https://themeholy.com/wordpress/pizzan/wp-content/uploads/layerslider/projects/pizzan-1/hero_bg_5_1.jpg')]">
        <div className="mx-[300px] flex flex-col leading-tight">
          <p className="font-lobsterTwo text-3xl  text-[#ff0600]">
            Welcome to Pizzan
          </p>
          <p className="animate-animation-title-1 font-rubik text-[80px] font-bold text-white">
            ENJOY YOUR
          </p>
          <p className="animate-animation-title-2 font-rubik text-[80px] font-bold text-white">
            FAVORITE FOOD
          </p>
          <p className="animate-animation-title-3 font-rubik text-[80px] font-bold text-white">
            WITH FAMILY
          </p>
        </div>
        <Hamburger />
      </div>
      <div className="mb-10 mt-20 flex flex-col items-center">
        <h4 className="text-lg font-medium text-[#eb0029]">Best Food Menu</h4>
        <h2 className="mb-10 text-4xl font-extrabold">
          Our Popular Food Items
        </h2>
        <div className="relative w-full">
          <Swiper
            spaceBetween={20}
            slidesPerView={4}
            className="swiper w-[60%]"
            speed={1000}
            loop
            autoplay={{
              delay: 4000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            <div>
              {Array(10)
                .fill(null)
                .map((_, idx) => (
                  <SwiperSlide key={idx}>
                    <div
                      className="group relative flex flex-col items-center overflow-hidden rounded-md bg-[#faf7f2] p-[15px]"
                      onMouseEnter={() => {
                        setIsHover(true);
                        clearTimeout(timer);
                      }}
                      onMouseLeave={() => {
                        timer = setTimeout(() => {
                          setIsHover(false);
                        }, 1000);
                      }}
                    >
                      <img
                        src="https://themeholy.com/wordpress/pizzan/wp-content/uploads/2023/06/Image-8.png"
                        alt=""
                        className="h-[180px] w-[180px] p-6"
                      />
                      <span className="text-2xl font-bold">
                        vegetables burger
                      </span>
                      <span>American-inspired sushi roll</span>
                      <span className="mb-8 mt-2 text-lg font-bold text-[#eb0029]">
                        $27.00
                      </span>
                      <div className="animate-unShow-inner group-hover:animate-show-inner absolute top-8 flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                        <AiOutlineShoppingCart className="text-lg" />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </div>
          </Swiper>
          {isHover && (
            // eslint-disable-next-line react/button-has-type
            <button
              className="absolute left-[12%] top-1/2 z-20 -translate-y-1/2 rounded-full border border-[#eb0029] p-4 text-[#eb0029] transition-all hover:border-transparent hover:bg-[#eb0029] hover:text-white"
              onClick={() => swiper.slidePrev()}
              onMouseEnter={() => {
                setIsHover(true);
                clearTimeout(timer);
              }}
              onMouseLeave={() => {
                timer = setTimeout(() => {
                  setIsHover(false);
                }, 1000);
              }}
            >
              <MdOutlineArrowBack />
            </button>
          )}
          {isHover && (
            // eslint-disable-next-line react/button-has-type
            <button
              onMouseEnter={() => {
                setIsHover(true);
                clearTimeout(timer);
              }}
              onMouseLeave={() => {
                timer = setTimeout(() => {
                  setIsHover(false);
                }, 1000);
              }}
              className="absolute right-[12%] top-1/2 z-20 -translate-y-1/2 rounded-full border border-[#eb0029] p-4 text-[#eb0029] transition-all hover:border-transparent hover:bg-[#eb0029] hover:text-white"
              onClick={() => swiper.slideNext()}
            >
              <MdOutlineArrowForward />
            </button>
          )}
        </div>
      </div>
      <div />
    </div>
  );
};

export default Home;
