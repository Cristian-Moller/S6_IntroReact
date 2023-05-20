import { FC } from "react";

type WelcomeProps = {
  children: React.ReactNode; //👈 children prop typr
};

export const Welcome: FC<WelcomeProps> = ({children}) => {
  
  return (
    <>
      <h1> Welcome to React </h1>
      {children}
    </>
  )
}