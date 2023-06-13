import { ReactElement, useState } from "react";

export function useMultistepForm(steps: ReactElement[]) {
    //step state
    const [currentStepIndex, setCurrentStepindex] = useState(0)
    //next step checkout
    function next() {
        setCurrentStepindex(i => {
            if( i >= steps.length - 1) return i
        return i +1 
    })
}
// back step checkout
      function back() {
          setCurrentStepindex(i => {
              if (i <= 0) return i
              return i +1
    })
      }
    //go to index
      function goTo(index: number) {
    setCurrentStepindex(index)
}
    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        steps,
        isFirstStep: currentStepIndex === 0,
        isLastStep: currentStepIndex === steps.length - 1,
        goTo,
        next,
        back
    }
}