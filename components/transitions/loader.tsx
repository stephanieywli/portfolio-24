import { motion } from "framer-motion";
import { fadeIn } from "./anim";

export default function Loader() {
  return (
    <motion.div
      className="w-screen h-full bg-green bg-cover absolute -z-50"
      variants={fadeIn}
      initial="hidden"
      animate="show"
    ></motion.div>
  );
}
