import { ReactEventHandler } from "react";
import { StyledButton } from "../../styled";

type buttonProp = {
  btnText?: string;
  background?: string;
  handleClick?: ReactEventHandler;
}

export const Button = ({btnText, background, handleClick}: buttonProp) => {
  
  return (
    <StyledButton 
      onClick={handleClick}
      style={{background: background}}
    >
        {btnText}
    </StyledButton>
  )
}