
import './App.css';
import LvhListUsers from './component/LvhListUsers';
import axios from './api/lvhApi'
import { useEffect,useState } from 'react';
import LvhFormAddOrEdit from './component/LvhFormAddOrEdit';

function LvhApp() {
  const [lvhListUsers,setLvhListUsers] = useState([]);
  //đọc dữ liệu từ api
const lvhGetAllUsers = async ()=> {
  const lvhResponse = await axios.get("lvhUsers");
  console.log("Api Data:",lvhResponse.data);
  setLvhListUsers(lvhResponse.data)
  
}

useEffect(()=> {
  lvhGetAllUsers();
  console.log("State Data:",lvhListUsers);
  
},[])

  
const [lvhAddOrEdit, setLvhAddOrEdit] = useState(false);
const lvhInitUser = {
    UserName: "Lê Vinh Huy",
    Password: "20/01/2004",
    Email: "levinhhuy113@gmail.com",
    Phone: "0393927062",
    id: "2210900106"
}
const [lvhUser, setLvhUser] = useState(lvhInitUser);

// Hàm xử lý nút thêm mới
const lvhHandleAddNew = ()=>{
  setLvhAddOrEdit(true);
}
const lvhHandleClose=(param)=>{
  setLvhAddOrEdit(param);
}
const lvhHandleSubmit =(param)=>{
  lvhGetAllUsers();
  setLvhAddOrEdit(param);
}
const lvhHandleDelete=()=>{
  lvhGetAllUsers();
}
let lvhElementForm = lvhAddOrEdit===true?
    <LvhFormAddOrEdit renderUsers={lvhUser} 
                      onLvhClose={lvhHandleClose}
                      onLvhSubmitForm={lvhHandleSubmit}/>:"";
return (
  <div className="container border my-3">
      <h1>Làm việc với MockApi</h1>
      <hr/>
      <LvhListUsers  renderLvhListUsers={lvhListUsers} onLvhDelete={lvhHandleDelete}/>
      <button className='btn btn-primary' name='btnLvhThemMoi' onClick={lvhHandleAddNew}>Thêm mới</button>
      <hr/>
      {lvhElementForm}
  </div>
);
}

export default LvhApp;