
import Item from "./Item";
import "./Item.css"
const data=[
    {
      name:"book1",
     rate:20,
     url:"book1.jpg"
    },
    {
      name:"book2",
     rate:20,
     url:"book1.jpg"
    },
    {
      name:"book3",
     rate:20,
     url:"book1.jpg"
    },
    {
      name:"book4",
     rate:20,
     url:"book1.jpg"
    },
    {
      name:"book5",
     rate:20,
     url:"book1.jpg"
    },
    {
      name:"book4",
     rate:20,
     url:"book1.jpg"
    },
    {
      name:"book5",
     rate:20,
     url:"book1.jpg"
    },
    {
      name:"book4",
     rate:20,
     url:"book1.jpg"
    },
    {
      name:"book5",
     rate:20,
     url:"book1.jpg"
    },
    {
      name:"book4",
     rate:20,
     url:"book1.jpg"
    },
    
    {
      name:"book5",
     rate:20,
     url:"book1.jpg"
    },
    {
      name:"book5",
     rate:20,
     url:"book1.jpg"
    },
    {
      name:"book5",
     rate:20,
     url:"book1.jpg"
    },
    {
      name:"book5",
     rate:20,
     url:"book1.jpg"
    },
    {
      name:"book5",
     rate:20,
     url:"book1.jpg"
    },
    {
      name:"book5",
     rate:20,
     url:"book1.jpg"
    },
  ];
  
const Page1=()=>{
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
export default Page1;