type WelcomeProps = {
  children: React.ReactNode;
};

export const Welcome = ({children}: WelcomeProps) => {
  
  return (
    <>
      <h1> Welcome to React </h1>
      {children}
    </>
  )
}