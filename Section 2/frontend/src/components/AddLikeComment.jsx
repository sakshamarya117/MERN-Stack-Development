import React, { useState } from 'react'
import { FaGlobeAmericas } from 'react-icons/fa';
import { PiShareFatLight } from 'react-icons/pi';
import { BiLike } from 'react-icons/bi';
import { BiComment } from 'react-icons/bi';

const AddLikeComment = () => {

    const AddLikeComment = useState();

    console.log(AddLikeComment);

    const[likecount, setCount1] = useState(0);
        
    const IncNum1 = () =>{
        setCount1(likecount + 1 ); 
        // console.log('clicked ' + count++);

          
       
    }
    const[commentcount, setCount2 ] = useState(0);
    const IncNum2 = () => {
      setCount2(commentcount + 1 ); 
      // console.log('clicked ' + count++);
    }
    
    const[sharecount, setCount3 ] = useState(0);
    const IncNum3 = () => {
      setCount3(sharecount + 1 ); 
      // console.log('clicked ' + count++);
    }
    
    
    return (
        
      <div className='add-like-div'>
        <div className='container shadow mb-5 bg-white rounded'> 
           
           <div className='row1'>
            <img  className='logo' src="/sucidesheep.jpg" alt="" />
            <div className='col ms-2'>
            <h6 className='m-0'>MrSucideSheep</h6>
            
            <p > 1d . <FaGlobeAmericas size={"12px"} color='grey'/></p>
            </div>
            <div className='col '> <h3 className='text-end'>...</h3></div>
           </div>
        
           <div className='row2'> 
           <p className='mb-0'>FAVOURITES ON SPOTIFY</p>
           <p className='mb-0 text-primary'>#vanic #kflay #cops</p>
           <img  className='post-image' src="/postimg.png" alt="" />
            
           </div>
           <div className='row3'>
            <div className='col'>
            <h6 className='text-secondary'>{likecount} like</h6> 
            </div>
            <div className='col-md-auto'>
            <h6 className='text-secondary text-end' >{commentcount} comment</h6>
            </div>
            <div className='col col-lg-2'>
            <h6 className='text-secondary text-end  '>{sharecount} share</h6>
            </div>
           </div>
            <div className='row'>

            <div className='col'> 
              <button className='btnlike btn btn-light' onClick={IncNum1}>  
            
              <BiLike/> Like </button>

            </div>    

            <div className='col'>
              <a href=""></a>
                
              
                 
            </div>  
              

            <div className='col-lg'>
            
              {/* <h1>0</h1> */}
              
              <button className='btncomment btn btn-light' onClick={IncNum2} ><BiComment/> Comment </button>
              
            </div>

            <div className='col'>
                
                
                  
              </div> 

              
            <div className='col'>
            
            {/* <h1>0</h1> */}
           
            <button className='btncomment btn btn-light' onClick={IncNum3} > <PiShareFatLight/> Share</button>
            
          </div>

           

 
              
           </div>
               </div>

        
        
        </div>

  
    

  )
}

export default AddLikeComment
