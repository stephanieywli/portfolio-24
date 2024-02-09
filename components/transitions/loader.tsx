import { motion } from "framer-motion";
import { fadeIn } from "./anim";

export default function Loader() {
  return (
    <motion.div
      className="bg-green w-screen h-full min-w-[100%] absolute -z-50"
      variants={fadeIn}
      initial="hidden"
      animate="show"
    ></motion.div>
  );
}
