import { Background, Border } from "../../styled"
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
    
  }
  function handlePreviousClick() {
    if (hasPrevious) {
      setNum(num - 1);
    } else {
      setNum(data.length-1);
    }
  }

  return (
    <Background img={data[num].img}>
      <Button btnText="Previous" background="#d15858" handleClick={handlePreviousClick}/>
      <Button btnText="Next" background="#0dbd0d" handleClick={handleNextClick} />
      {
        data.map((line, index) => (
          <Border 
            key={line.txt}
            className={index === num ? 'active' : ''}
            >
            {line.txt}
          </Border>
        ))
      }
    </Background>
  )
}

export default Scene