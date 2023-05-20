import { Border } from "../../styled"
import { Button } from "../button/button";
import data from "../data"
import { useState } from "react";


const Scene = () => {
  const [num, setNum] = useState(0);
  const hasNext: boolean = num < data.length-1;
  const hasPrevious: boolean = num > 0;
  
  function handleNextClick() {
    if (hasNext) {
      setNum(num + 1);
    } else {
      setNum(0);
    }
    console.log('next',num)
  }
  function handlePreviousClick() {
    if (hasPrevious) {
      setNum(num - 1);
    } else {
      setNum(data.length-1);
    }
    console.log('previous',num)
  }

  return (
    <>
      <Button btnText="Previous" background="#d15858" handleClick={handlePreviousClick}/>
      <Button btnText="Next" background="#0dbd0d" handleClick={handleNextClick} />
      {
        data.map((line, index) => (
          <Border 
            key={line}
            className={index === num ? 'active' : ''}
          >
            {line}
          </Border>
        ))
      }
    </>
  )
}

export default Scene