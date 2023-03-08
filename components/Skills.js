import { ImStarFull, ImStarHalf, ImStarEmpty } from "react-icons/im";

function Skills() {
  return (
    <main>
      <section className=" w-[500px] z-10 flex flex-col items-center  ">
        <div className="flex items-center gap-2">
          <h2 className="text-[75px]">Skills</h2>
        </div>
        <section className="flex flex-col gap-2 mt-4">
          <article className="flex items-center justify-between">
            <h4>Oral Presentation</h4>
            <div className="flex gap-2 text-[#ECBD00]">
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarHalf />
            </div>
          </article>
          <article className="flex items-center justify-between">
            <h4>Written Outputs and Reports</h4>
            <div className="flex gap-2 text-[#ECBD00]">
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarHalf />
            </div>
          </article>
          <article className="flex items-center justify-between">
            <h4>Creativity in Designs</h4>
            <div className="flex gap-2 text-[#ECBD00]">
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarEmpty />
              <ImStarEmpty />
            </div>
          </article>
          <article className="flex items-center justify-between gap-4">
            <h4>Communication (Team/Clients)</h4>
            <div className="flex gap-2 text-[#ECBD00]">
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarHalf />
            </div>
          </article>
          <article className="flex items-center justify-between">
            <h4>Teamwork</h4>
            <div className="flex gap-2 text-[#ECBD00]">
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarHalf />
            </div>
          </article>
          <article className="flex items-center justify-between">
            <h4>Problem Solving</h4>
            <div className="flex gap-2 text-[#ECBD00]">
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarEmpty />
            </div>
          </article>
          <article className="flex items-center justify-between">
            <h4>Leadership</h4>
            <div className="flex gap-2 text-[#ECBD00]">
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarEmpty />
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}

export default Skills;
