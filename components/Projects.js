import Image from "next/image";
import { AiOutlineProject } from "react-icons/ai";

function Projects() {
  return (
    <main>
      <section className=" w-[500px] z-10 flex flex-col items-center  ">
        <div className="flex items-center gap-2 text-[75px]">
          <h2>Projects</h2>
          <i className="p-2 bg-gradient-to-br from-[#ECBD00] to-[#6A4B00] rounded-3xl">
            <AiOutlineProject className="bg-[#F9F9F9] rounded-3xl" />
          </i>
        </div>
        <section className="flex flex-col items-center w-full mt-2">
          <figure className="text-center ">
            <Image
              src={"/projects/farmkonek.png"}
              width={400}
              height={225}
              alt={"FarmKonek screenshot"}
            />
            <figcaption className="py-2 font-semibold">FarmKonek</figcaption>
          </figure>
          <div className="w-[400px]">
            <article>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus
              rhoncus pulvinar aliquam.{" "}
            </article>
            <p className="py-2 text-center">
              TechStack used: NextJS and Tailwindcss
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Projects;
