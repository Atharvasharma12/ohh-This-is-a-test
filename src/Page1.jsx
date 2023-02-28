
import Item from "./Item";
import "./Item.css"
const data=[
    {
      name:"book1",
     rate:10,
     url:"book1.jpg"
    },
    {
      name:"book2",
     rate:20,
     url:"book1.jpg"
    },
    {
      name:"book3",
     rate:30,
     url:"book1.jpg"
    },
    {
      name:"book4",
     rate:40,
     url:"book1.jpg"
    },
    {
      name:"book5",
     rate:50,
     url:"book1.jpg"
    },
    {
      name:"book6",
     rate:60,
     url:"book1.jpg"
    },
    {
      name:"book7",
     rate:70,
     url:"book1.jpg"
    },
    {
      name:"book8",
     rate:80,
     url:"book1.jpg"
    },
    {
      name:"book9",
     rate:90,
     url:"book1.jpg"
    },
    {
      name:"book10",
     rate:100,
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