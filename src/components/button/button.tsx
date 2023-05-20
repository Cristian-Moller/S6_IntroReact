import { ReactEventHandler } from "react";
import { StyledButton } from "../../styled";

type buttonProp = {
  btnText?: string;
  handleClick?: ReactEventHandler;
}

export const Button: React.FC<buttonProp> = ({btnText, handleClick}: buttonProp) => {
  
  return (
    <StyledButton onClick={handleClick} >
        {btnText}
    </StyledButton>
  )
}

