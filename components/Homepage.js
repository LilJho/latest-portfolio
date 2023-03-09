import React from "react";
import NameHeader from "./NameHeader";

function Homepage() {
  return (
    <main>
      <section className=" w-[500px] z-10  ">
        <div className="flex items-center gap-2">
          <NameHeader />
        </div>

        <p className="mt-4">
          I work as a web developer and web designer, I have a passion in
          developing software and web applications that satisfies the customer
          needs. Frontend development is my specialty in which I create websites
          with attractive interfaces, and UX that is applied with simplicity.
        </p>
        <p>
          {" "}
          An enthusiastic young man that is a fast learner, good communicator,
          and an excellent team player.
        </p>
      </section>
    </main>
  );
}

export default Homepage;
