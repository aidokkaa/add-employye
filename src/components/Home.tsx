import React from 'react';
import "./Home.css";
import AddEmployye from './AddEmployye';
import EmployyeList from './EmployyeList';
import { EmployyeType,PageEnum } from './Employye.type';
import EditEmployye from './EditEmployye';

const Home=()=>{
    const [showPage,setShowPage]=React.useState(PageEnum.list)
    const [employyeList,setEmployyeList] = React.useState([] as EmployyeType[]);
    const [editToData,setEditToData]=React.useState( {} as EmployyeType);
    

    React.useEffect(()=>{
       const listInStr = window.localStorage.getItem("EmployyeList");
       if(listInStr){
        setEmployyeList(JSON.parse(listInStr))
       }
    },[])
    
    function onAddEmployyeHnd(){
        setShowPage(PageEnum.add)
    }
    function onBackBtnClick(){
        setShowPage(PageEnum.list)
    }

    const _setEmployyeList=(list2:EmployyeType[])=>{
        setEmployyeList(list2);
        console.log(list2)
        window.localStorage.setItem('EmployyeList',JSON.stringify(list2))
    }
    const addEmployyes=(data:EmployyeType)=>{
        _setEmployyeList([...employyeList,data])
    }
    const deleteEmployye=(data:EmployyeType)=>{
   const indexToDelete = employyeList.indexOf(data);
   const tempList = [...employyeList];
   tempList.splice(indexToDelete,1);
   _setEmployyeList(tempList)
    }
    const editEmployyeData=(data:EmployyeType)=>{
        setShowPage(PageEnum.edit);
        setEditToData(data)
    }
    const updateDate = (data:EmployyeType)=>{
      const filterData = employyeList.filter(x=>x.id===data.id)[0]
      const indexofRecord= employyeList.indexOf(filterData );
      const tempData = [...employyeList];
      tempData[indexofRecord]=data;
    _setEmployyeList(tempData)    }
    return(
        <>
           <article className='article-header'>
           <header>
            <h1>Employyes in the company</h1>
           </header>
           </article>
           <section className='section-content'>
              {showPage===PageEnum.list &&
                   <>
                   <input type="button" style={{marginTop:"20px"}}className='button' value="Add Employye" onClick={onAddEmployyeHnd}/>
                   <EmployyeList onEdit={editEmployyeData} onclickDeleteHnd={ deleteEmployye} list = {employyeList}></EmployyeList>
                   </>}
                   {
                    showPage===PageEnum.add && (
                      <AddEmployye onClickHnd = {addEmployyes} onBackBtnClick={onBackBtnClick}></AddEmployye>
                    )
                   }
                   {
                    showPage===PageEnum.edit &&
                       <EditEmployye data={editToData} onUpdateClickHnd={updateDate}  onBackBtnClick={onBackBtnClick}></EditEmployye>
                   }
           </section>
         
        </>
    )
}
export default Home