import { useState } from "react"

function useToggler(defaultValue) {
    const [isToggledOn, setIsToggledOn] = useState(defaultValue);

    const toggle = () => {
        setIsToggledOn((prevState) => !prevState)
    }

    return [isToggledOn, toggle];
}

export default useToggler