
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsArrowUp } from "react-icons/bs";

const button = {
  initial: { y: 0 },
  animate: {
    y: -20,
    transition: {
      scale: {
        duration: 1,
      },
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  },
};

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <motion.div
      className="fixed bottom-4 right-4 z-50"
      variants={button}
      initial="initial"
      animate="animate"
    >
      <button
        onClick={scrollToTop}
        className={`inline-flex bg-[#593CFB] items-center p-2 md:p-3 rounded-full shadow-lg text-base-100 hover:opacity-80 transition-opacity overflow-y-auto ${
          isVisible ? "flex" : "hidden"
        }`}
      >
        <BsArrowUp
          className="size-5 text-white"
          aria-hidden="true"
        />
      </button>
    </motion.div>
  );
};

export default BackToTop;
