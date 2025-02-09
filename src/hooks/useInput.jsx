import { useState } from "react";

function useInput(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  const onValueChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const onValueResetHandler = () => {
    setValue("");
  };

  return [value, onValueChangeHandler, onValueResetHandler];
}

export default useInput;
