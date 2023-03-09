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
      <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
        <Image
          src={"/logo.svg"}
          width={50}
          height={50}
          alt={"Logo"}
          className="cursor-pointer"
          onClick={() => {
            const index = 0;
            currentInfoHandler(index);
          }}
        />
      </motion.div>

      <div className="flex items-start gap-20">
        <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
          <SiGmail className="cursor-pointer" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
          <BsGithub className="cursor-pointer" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
          <GrLinkedinOption className="cursor-pointer" />
        </motion.div>
      </div>
    </nav>
  );
}

export default Navbar;
