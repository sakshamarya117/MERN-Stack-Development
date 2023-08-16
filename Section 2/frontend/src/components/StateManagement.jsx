import React, { useState } from 'react'

const StateManagement = () => {
  
    const [Likes, setLikes] = useState(0);

    let count = 3 ;
    
    const [Img, setImg] = useState('');

    return (
       
   <div>
    
    <div className='container'>

     <h1> 
        
        StateManagement

     </h1>

      <br/>

     <h1>Count : {count}</h1>
     <button className='btn btn-primary mt-5' onClick={( ) => { count++; console.log(count); }} >
        Add Count
     </button>
{/* ----------------------------------------------------------------------------------------------------------------------- */}

     <h1 > Likes : {Likes}</h1>

     <button className='btn btn-success mt-5' 
     
     onClick={() => {
        
        setLikes(Likes + 1);
           
        }}> Add Like</button>

     
<button className='btn btn-success mt-5' 
     
     onClick={() => {
     setLikes(0);
     
     }}> Reset</button>

<input type="text" className='form-control' onChange={(e) => { setImg(e.target.value); }} />

 <h1>{Img}</h1>
 <img src={Img} alt="" />

    </div> 

    </div>
  
    )
}

export default StateManagement