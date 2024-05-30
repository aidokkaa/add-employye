import React  from 'react';
import './EmployyeList.css'
import { EmployyeType } from './Employye.type';
import EmployyeModal from './EmployyeModal'
type Props = {
  list:EmployyeType[],
  onclickDeleteHnd:(data:EmployyeType)=>void,
  onEdit:(data:EmployyeType)=>void
}
const EmployyeList=(props:Props)=>{
  const {list,onclickDeleteHnd,onEdit} = props;
  const [openModal,setOpenModal]=React.useState(false);
  const [showData,setShowData]= React.useState(null as EmployyeType | null)
  const viewEmployye=(data:EmployyeType)=>{
    setOpenModal(true);
    setShowData(data)
  };
  const onCloseModal=()=>{
    setOpenModal(false)
  }
    return(
        <>
           <table>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Actions</th>
  </tr>
  {list.map(employye=>{
    return <tr key={employye.id}>
    <td>{`${employye.firstName} ${employye.lastName}`}</td>
    <td>{employye.email} </td>
    <td>
      <div>
        <input className='button' type="button" value="edit" onClick={()=>onEdit(employye)}/>
        <input className='button' type="button" value="delete" onClick={()=>onclickDeleteHnd(employye)}/>
        <input className='button' type="button" value="view"  onClick={()=>viewEmployye(employye)}/>
      </div>
    </td>
  </tr>
  })
 }

</table>
{
  openModal && showData !==null &&
  <EmployyeModal data={showData} onClose = {onCloseModal}/>
}

        </>
    )
}
export default EmployyeList