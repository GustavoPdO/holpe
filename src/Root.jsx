import React from "react";

const Root = (props) => {
  return (
    <main style={{ position: "fixed", width: "100vw", top: "84px" }}>
      {props.children}
    </main>
  );
};

export default Root;
