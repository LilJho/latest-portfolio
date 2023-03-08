function TechStack() {
  return (
    <main>
      <section className=" w-[500px] z-10 flex flex-col items-center">
        <div className="flex items-center gap-2">
          <h2 className="text-[75px]">TechStack</h2>
        </div>
        <section className="flex justify-between w-[60%]">
          <article>
            <h4 className="text-xl font-semibold">Accustomed</h4>
            <ul className="mt-2">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>ReactJS</li>
              <li>NextJS</li>
              <li>Tailwind</li>
              <li>Typescript</li>
              <li>Python</li>
              <li>PocketBase</li>
              <li>GIT</li>
            </ul>
          </article>
          <article>
            <h4 className="text-xl font-semibold">Familiar</h4>
            <ul className="mt-2">
              <li>JAVA</li>
              <li>C#</li>
              <li>PHP</li>
              <li>MONGODB</li>
              <li>SQL</li>
              <li>NOSQL</li>
              <li>MySQL</li>
              <li>GitLab</li>
              <li>Firebase</li>
            </ul>
          </article>
        </section>
      </section>
    </main>
  );
}

export default TechStack;
