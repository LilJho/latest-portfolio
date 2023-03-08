import React from "react";

function Tools() {
  return (
    <main>
      <section className=" w-[500px] z-10 flex flex-col items-center">
        <div className="flex items-center gap-2">
          <h2 className="text-[75px]">Tools</h2>
        </div>
        <section className="flex justify-between w-[60%]">
          <article>
            <h4 className="text-xl font-semibold">Accustomed</h4>
            <ul className="mt-2">
              <li>VSCode</li>
              <li>Github Desktop</li>
              <li>Figma</li>
              <li>Adobe Photoshop</li>
              <li>Visual Studio</li>
            </ul>
          </article>
          <article>
            <h4 className="text-xl font-semibold">Familiar</h4>
            <ul className="mt-2">
              <li>Postman</li>
              <li>Netbeans</li>
              <li>Sublime Text</li>
              <li>Android Studio</li>
              <li>Pycharm</li>
            </ul>
          </article>
        </section>
      </section>
    </main>
  );
}

export default Tools;
