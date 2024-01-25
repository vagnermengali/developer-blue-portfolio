import { motion } from "framer-motion";

import { variants } from "@/components/Animations/Transition";

import { ChildrenInterface } from "@/interfaces/ChildrenInterface";

const Transition = ({ children }: ChildrenInterface) => {

  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear", delay: 0.2, duration: 0.4 }}
      >
        {children}
      </motion.main>
    </>
  );
};

export default Transition;
