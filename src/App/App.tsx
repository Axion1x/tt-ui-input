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
        alignment="left"
        border={true}
        labelPosition={"top"}
        inputSize={"md"}
        placeholder={"Input email..."}
        state={"default"}
        annotationText={"Some text"}
        labelText= {'New Label'}
        onBlur={(event) => console.log("Blur event:", event)}
        onChange={(event) => console.log("Change event:", event.target.value)}
        onSubmit={(event) => {
        event.preventDefault();
        console.log("Form submitted");
        }}
      />
    </div>
  );
}

export default App;
