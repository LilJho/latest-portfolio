import { SiGmail } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { motion } from "framer-motion";

import Image from "next/image";

function Navbar({ setCurrentInfo }) {
  function currentInfoHandler(index) {
    setCurrentInfo(index);
  }
  return (
    <nav className="absolute z-20 flex justify-between w-screen p-10 mx-auto">
      <Image
        onClick={() => {
          const index = 0;
          currentInfoHandler(index);
        }}
        className="z-20 cursor-pointer"
        src={"/MyLogo.png"}
        width={100}
        height={100}
        alt={"logo"}
      />

      <div className="flex items-start gap-20">
        <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
          <SiGmail />
        </motion.div>
        <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
          <BsGithub />
        </motion.div>
        <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
          <GrLinkedinOption />
        </motion.div>
      </div>
    </nav>
  );
}

export default Navbar;
