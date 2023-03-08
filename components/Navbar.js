import { SiGmail } from "react-icons/si";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Image from "next/image";

function Navbar({ setCurrentInfo, setShowFront }) {
  function currentInfoHandler(index) {
    setCurrentInfo(index);
  }
  return (
    <nav className="absolute flex justify-between w-screen p-10 mx-auto">
      <Image
        onClick={() => {
          const index = 0;
          currentInfoHandler(index);
          setShowFront((v) => !v);
        }}
        className="z-20 cursor-pointer"
        src={"/MyLogo.png"}
        width={100}
        height={100}
        alt={"logo"}
      />

      <ul className="flex gap-20">
        <li>
          <button className="w-4 hover:w-8">
            <SiGmail />
          </button>
        </li>
        <li>
          <BsGithub className="w-4 " />
        </li>
        <li>
          <BsLinkedin className="w-4 " />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
