import React from 'react';
import { EmployyeType } from './Employye.type';
type Props = {
    onClose:()=>void,
    data:EmployyeType
} 
const EmployyeModal=({onClose,data}:Props)=>{
    return(
        <>
           <div className="modal">
             <div className="modal-body">
                <h3>Employye Data</h3>
               <div>
                 <div>
                 <label>
                    FirstName:{data.firstName}
                   </label>
                 </div>
                  <div>  
                    <label>
                    LastName:{data.lastName}
                   </label></div>
                   <div>
                   <label>
                    Email:{data.email}
                   </label>
                   </div>
               </div>
                <h1 className='close' onClick={onClose}>x</h1>
             </div>
           </div>
        </>
    )
}
export default EmployyeModal