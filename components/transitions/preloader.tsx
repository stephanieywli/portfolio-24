import { motion } from "framer-motion";
import { slideUp, item } from "./anim";

export default function Preloader() {
  return (
    <motion.div
      className="flex items-center justify-center min-w-full min-h-[100vh] fixed top-0 bg-green text-off-white z-[99]"
      variants={slideUp}
      initial="initial"
      exit="exit"
    >
      <div className="flex flex-col items-center">
        <div className="overflow-hidden">
          <motion.div
            className="-mr-3 font-garamond italic font-extralight 
            text-[8rem] sm:max-lg:text-[9rem] lg:max-4k:text-[10rem] 4k:text-[15rem]
            tracking-wider leading-[8rem] 4k:leading-[13.5rem]"
            variants={item}
            initial="hidden"
            exit="visible"
          >
            SYL
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.div
            className="text-[1.8rem] sm:max-4k:text-[2rem] 4k:text-[3.2rem]
             font-semibold tracking-wider uppercase leading-[3rem] text-grey"
            variants={item}
            initial="hidden"
            exit="visible"
          >
            © Folio 24&apos;
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
