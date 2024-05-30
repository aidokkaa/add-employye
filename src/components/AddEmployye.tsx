import React from 'react';
import { EmployyeType} from './Employye.type';
type Props={
    onBackBtnClick:()=>void;
    onClickHnd:(data:EmployyeType)=>void
}
const AddEmployye=(props:Props)=>{
    const [ firstName,setFirstName] = React.useState<string>('');
    const [ lastName,setLastName] = React.useState<string>('')
    const [ email,setEmail] = React.useState<string>('')
    const {onBackBtnClick,onClickHnd}=props;
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
    const data:EmployyeType={
      id:new Date().toJSON().toString(),
      firstName,
      lastName,
      email
    }
    onClickHnd(data)
    onBackBtnClick()
 }
  
    return(
        <>
         <form>
            <div>
                <label> First Name:</label>
                <input type="text" value={firstName} onChange={onFirstNameChangehnd}/>
            </div>
            <div>
                <label> Last Name:</label>
                <input type="text" value={lastName} onChange={onLastNameChangehnd}/>
            </div>
            <div>
                <label> Email Add:</label>
                <input type="text" value={email} onChange={onEmailChange}/>
            </div>
            <div>
                <input type="button" value='back' onClick={onBackBtnClick}/>
                <input type="button" value='add' onClick={onBtnClickHnd}/>
            </div>
         </form>
        </>
    )
}

export default AddEmployye