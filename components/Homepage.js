import React from "react";

function Homepage() {
  return (
    <main>
      <section className=" w-[500px] z-10  ">
        <div className="flex items-center gap-2">
          <h2 className="text-[75px] relative font-extrabold  uppercase flex">
            Hi_There!
          </h2>
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
