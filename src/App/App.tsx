import React from "react";
import InputGroup from "../components/InputGroup/InputGroup";

function App() {
  return (
    <div className="App">
      <InputGroup
        tooltip={"Its a tooltip!"}
        isRequired={true}
        isMarked={false}
        labelSize={"md"}
        darkmode={true}
        isIconBefore={true}
        isIconAfter={true}
        isShortKey={true}
        labelPosition={'top'}
        inputSize={"xl"}
        placeholder="Input email..."
        state="default"
        annotationText={"Some text"}
      />
    </div>
  );
}

export default App;
