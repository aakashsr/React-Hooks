import { useState } from "react";

function useForm2(initialValue) {
  const [value, setValue] = useState(initialValue);

  const resetValue = () => {
    setValue(initialValue);
  };

  const bind = {
    value: value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };

  return [value,bind,resetValue]
}

export default useForm2;
