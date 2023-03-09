import Card from "./Card/Card";

import { CSSTransition } from "react-transition-group";
import { useEffect, useState } from "react";

function FlippableCard({ showFront, children }) {
  const [frontContent, setFrontContent] = useState();
  const [backContent, setBackContent] = useState();

  useEffect(() => {
    if (showFront) {
      setFrontContent(() => children);
    }
    if (!showFront) {
      setBackContent(() => children);
    }
  }, [showFront]);

  return (
    <div className="z-10 flipcard">
      <CSSTransition in={showFront} timeout={300} classNames="flip">
        <Card frontContent={frontContent} backContent={backContent} />
      </CSSTransition>
    </div>
  );
}

export default FlippableCard;
