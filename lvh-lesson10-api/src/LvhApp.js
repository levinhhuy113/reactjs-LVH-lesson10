
import './App.css';
import LvhListUsers from './component/LvhListUsers';
import axios from './api/lvhApi'
import { useEffect,useState } from 'react';

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

  return (
    <div className="container border my-3">
      <h1>Làm việc với MockApi</h1>  
      <hr/>
      <LvhListUsers renderLvhListUsers={lvhListUsers}/>
    </div>
  );
}

export default LvhApp;
