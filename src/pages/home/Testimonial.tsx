import "swiper/css";
import "swiper/css/pagination";
import type { Swiper as SwiperRef2 } from "swiper";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRef, useState } from "react";
import Container from "../../components/layout/Container";
import pic from "../../assets/img/notFound.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

type SlideBegOrNot = {
  isFirst: boolean;
  isLast: boolean;
};

const info = [
  {
    id: 1,
    name: "Amelia Joseph",
    position: "Chief Manager",
    review:
      "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.",
    img: pic,
  },
  {
    id: 2,
    name: "Jacob Joshua",
    position: "Chief Manager",
    review:
      "I found the digital expertise I needed. Their creative-professional balance exceeded expectations. Friendly interactions, exceptional outcomes. For digital enchantment, it's got to be Embrace!",
    img: pic,
  },
  {
    id: 3,
    name: "Jacob Joshua",
    position: "Chief Manager",
    review:
      "Embrace really nails it! Creative brilliance, approachable style. They're the partners you want—artistry meets strategy. Thrilled with what they achieved!",
    img: pic,
  },
  {
    id: 4,
    name: "Amelia Joseph",
    position: "Chief Manager",
    review:
      "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.",
    img: pic,
  },
  {
    id: 5,
    name: "Jacob Joshua",
    position: "Chief Manager",
    review:
      "I found the digital expertise I needed. Their creative-professional balance exceeded expectations. Friendly interactions, exceptional outcomes. For digital enchantment, it's got to be Embrace!",
    img: pic,
  },
  {
    id: 6,
    name: "Jacob Joshua",
    position: "Chief Manager",
    review:
      "Embrace really nails it! Creative brilliance, approachable style. They're the partners you want—artistry meets strategy. Thrilled with what they achieved!",
    img: pic,
  },
];
const Testimonial = () => {
  const [slideBegOrNot, handleSlideByState] = useState<SlideBegOrNot>({
    isFirst: true,
    isLast: false,
  });
  const SlideRef = useRef<SwiperRef>(null);

  const handleNext = () => {
    SlideRef.current?.swiper.slideNext();
  };

  const handlePrev = () => {
    SlideRef.current?.swiper.slidePrev();
  };

  const onSlideChange = (swiper: SwiperRef2) => {
    handleSlideByState({
      isFirst: swiper.isBeginning,
      isLast: swiper.isEnd,
    });
  };

  const { isLast, isFirst } = slideBegOrNot;
  return (
    <section className="pt-16 pb-10">
      <Container>
        <div>
          <h2 className="font-extrabold text-2xl md:text-4xl my-5 text-center">Meet the hosts</h2>
          <div className="flex justify-between items-center top-0">
            <h2 className="font-extrabold text-xl md:text-2xl my-5">
              Top hosts on Car Flex
            </h2>
            <div className="flex justify-between items-center gap-3">
              <button
                className={`size-10 rounded-full hover:bg-[#593CFB] hover:text-white flex items-center justify-center text-gray-500 ${
                  isFirst ? "disabled" : ""
                }`}
                onClick={handlePrev}
              >
                <FaArrowLeft className="size-5" />
              </button>
              <button
                className={`size-10 rounded-full hover:bg-[#593CFB] hover:text-white flex items-center justify-center text-gray-500 ${
                  isLast ? "disabled" : ""
                }`}
                onClick={handleNext}
              >
                <FaArrowRight className="size-5" />
              </button>
            </div>
          </div>

          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            ref={SlideRef}
            onSlideChange={onSlideChange}
            pagination={{
              el: ".swiper-paginations",
              type: "fraction",
            }}
            navigation={false}
            modules={[Pagination, Navigation]}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              390: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 1.5,
              },
              802: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 2.5,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            className="mb-20"
          >
            {info.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="p-6 rounded-2xl shadow-md dark:bg-gray-900 dark:hover:bg-[#593CFB] my-2 hover:bg-[#593CFB] hover:text-white">
                  <div className="flex items-center mt-4 space-x-4">
                    <img
                      src={item.img}
                      alt="Picture"
                      className="size-20 bg-center bg-cover rounded-full"
                    />
                    <div>
                      <p className="text-lg font-semibold hover:text-white">
                        {item.name}
                      </p>
                      <p className="text-sm dark:text-gray-400">
                        {item.position}
                      </p>
                    </div>
                  </div>
                  <p className="text-base mt-5">{item.review}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Testimonial;
