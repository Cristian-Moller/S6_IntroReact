import { Border } from "../../styled"

type lineProp = {
  text: string;
}
const Scene: React.FC<lineProp> = ({text}: lineProp) => {
  
  return (
    <>
      <Border>
        {text}
      </Border>
    </>
  )
}

export default Scene