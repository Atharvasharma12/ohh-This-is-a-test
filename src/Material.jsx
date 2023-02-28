
import Item from "./Item";
import "./Item.css"
const data=[
    {
      name:"Scientific Calculator",
     rate:20,
     url:"calculator.jpg"
    },
    {
      name:"Roller Scale",
     rate:20,
     url:"roller.jpg"
    },
    {
      name:"Engineering Pencils",
     rate:20,
     url:"pencil.jpg"
    },
    {
      name:"Scissors",
     rate:20,
     url:"scissor.jpg"
    },
    {
      name:"Tape",
     rate:20,
     url:"tape.jpg"
    },
    {
      name:"Stapler",
     rate:20,
     url:"stapler.jpg"
    },
    {
      name:"Fevicol",
     rate:20,
     url:"fevicol.jpg"
    },
    {
      name:"Fevistik",
     rate:20,
     url:"fevistik.jpg"
    },
    {
      name:"book5",
     rate:50,
     url:"book1.jpg"
    },
    {
      name:"book4",
     rate:44,
     url:"book1.jpg"
    },
    
    {
      name:"book55",
     rate:555,
     url:"book1.jpg"
    },
    {
      name:"book50",
     rate:500,
     url:"book1.jpg"
    },
    {
      name:"book6",
     rate:60,
     url:"book1.jpg"
    },
    {
      name:"book7",
     rate:77,
     url:"book1.jpg"
    },
    {
      name:"book8",
     rate:80,
     url:"book1.jpg"
    },
   
  ];
  
const Material=()=>{
    return(
        <>
        
        <div className="ArrayDAta">
        {data.map((val)=>{
          return <Item data={val}/>
        })}
        </div>
        </>
    )
}
export default Material;