type lineProp = {
  text: string;
}
const Scene: React.FC<lineProp> = ({text}: lineProp) => {
  
  return (
    <>
      <p>{text}</p>
    </>
  )
}

export default Scene