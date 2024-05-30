import React from 'react';
import { EmployyeType } from './Employye.type';
type Props = {
    data:EmployyeType,
    onBackBtnClick:()=>void,
    onUpdateClickHnd:(data:EmployyeType)=> void
}
const EditEmployye = (props:Props)=>{
    const {data,onBackBtnClick,onUpdateClickHnd}=props
    const [ firstName,setFirstName] = React.useState(data.firstName);
    const [ lastName,setLastName] = React.useState(data.lastName)
    const [ email,setEmail] = React.useState(data.email);
    const onFirstNameChangehnd=(e:any)=>{
        setFirstName(e.target.value)
     };
     const onLastNameChangehnd=(e: any)=>{
         setLastName(e.target.value)
      }
      const onEmailChange=(e:any)=>{
         setEmail(e.target.value)
      }
      const onBtnClickHnd=()=>{
        const update:EmployyeType={
          id:data.id,
          firstName,
          lastName,
          email
        }
        console.log(update.firstName)
        onUpdateClickHnd(update)
        onBackBtnClick()
     }
    return(
        <>
        <h3>Edit employye Form</h3>
             <form>
            <div>
                <label> First Name:</label>
                <input value={firstName} type="text" onChange={onFirstNameChangehnd}/>
            </div>
            <div>
                <label> Last Name:</label>
                <input type="text" value={lastName} onChange={onLastNameChangehnd}/>
            </div>
            <div>
                <label> Email Add:</label>
                <input type="text" value={email} onChange={onEmailChange}/>
            </div>
            <div className='btns'>
                <input className='button' type="button" value='Back' onClick={onBackBtnClick}/>
                <input  className='button'type="button" value='Update' onClick={onBtnClickHnd}/>
            </div>
         </form>
        </>
    )
     



}

export default EditEmployye