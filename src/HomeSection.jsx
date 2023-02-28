import React from 'react';
import Standimage from './stand.png'
import "./HomeSection.css";
import civilimage from './civil.jpg'
import data_structureimage from './data_structure.jpg'
import electricalimage from './electrical.jpg'
import Video from './Video';
function HomeSection(props) {
  return (

    
    <section className='home'>
       <Video/>
      
    <div className='standParent'>


      <div>
      <img src={civilimage} className="civil" alt=""></img>
      <img src={Standimage} className="stand" alt=""></img>
      <img src={data_structureimage} className="ds" alt=""></img>
      <img src={electricalimage} className="ec" alt=""></img>
      </div>
  
    </div>

    </section>
  )
}

export default HomeSection;