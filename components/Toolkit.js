function Toolkit({ setCurrentInfo, setShowFront }) {
  function currentInfoHandler(index) {
    setCurrentInfo(index);
  }
  return (
    <section className="z-10">
      <h3 className="text-4xl text-center ">Details</h3>
      <div className="p-2 mt-2 from-[#ECBD00] to-[#6A4B00] rounded-3xl bg-gradient-to-br">
        <ul className="p-4 text-2xl bg-white rounded-3xl">
          <li>
            <button
              onClick={() => {
                setShowFront((v) => !v);
                const index = 1;
                currentInfoHandler(index);
              }}
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setShowFront((v) => !v);
                const index = 2;
                currentInfoHandler(index);
              }}
            >
              TechStack
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setShowFront((v) => !v);
                const index = 3;
                currentInfoHandler(index);
              }}
            >
              Tools
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setShowFront((v) => !v);
                const index = 4;
                currentInfoHandler(index);
              }}
            >
              Projects
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Toolkit;
