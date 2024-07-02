import axios from '../api/lvhApi'
import React, { useEffect, useState } from 'react'

export default function LvhFormAddOrEdit({onLvhClose, onLvhSubmitForm, renderUsers}) {

    console.log(renderUsers);
    const [lvhId, setLvhId] = useState(0);
    const [lvhUserName, setLvhUserName] = useState("");
    const [lvhPassword, setLvhPassword] = useState("");
    const [lvhEmail, setLvhEmail] = useState("");
    const [lvhPhone, setLvhPhone] = useState("");

    useEffect(()=>{
        setLvhId(renderUsers.id)
        setLvhUserName(renderUsers.UserName)
        setLvhPassword(renderUsers.Password)
        setLvhEmail(renderUsers.Email)
        setLvhPhone(renderUsers.Phone)
    },[renderUsers])


    const lvhHandleClose = ()=>{
        onLvhClose(false);
    }

    const lvhHandleSubmit= async (event)=>{
        event.preventDefault();
        console.log(lvhId,lvhUserName,lvhPassword,lvhEmail,lvhPhone);
        // post -> api
        let lvhObjUser = {
            UserName: lvhUserName,
            Password: lvhPassword,
            Email: lvhEmail,
            Phone: lvhPhone,
            id: lvhId
        }
        const lvhRes = await axios.post("lvhUsers",lvhObjUser);

        onLvhSubmitForm(false)

    }
  return (
    <div className=''>
      <form>
        <div className="input-group mb-3">
            <span className="input-group-text" id="id">Id</span>
            <input type="text" class="form-control" 
                name='id' value={lvhId} onChange={(ev)=>setLvhId(ev.target.value)}
                placeholder="id" aria-label="id" aria-describedby="id"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="UserName">UserName</span>
            <input type="text" class="form-control" 
                name='UserName' value={lvhUserName} onChange={(ev)=>setLvhUserName(ev.target.value)}
                placeholder="UserName" aria-label="UserName" aria-describedby="UserName"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="Password">Password</span>
            <input type="password" class="form-control" 
                name='Password' value={lvhPassword} onChange={(ev)=>setLvhPassword(ev.target.value)}
                placeholder="Password" aria-label="Password" aria-describedby="Password"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="Email">Email</span>
            <input type="email" class="form-control" 
                name='Email' value={lvhEmail} onChange={(ev)=>setLvhEmail(ev.target.value)}
                placeholder="Email" aria-label="Email" aria-describedby="Email"/>
        </div>
        
        <div className="input-group mb-3">
            <span className="input-group-text" id="Phone">Phone</span>
            <input type="number" class="form-control" 
                name='Phone' value={lvhPhone} onChange={(ev)=>setLvhPhone(ev.target.value)}
                placeholder="Phone" aria-label="Phone" aria-describedby="Phone"/>
        </div>
        <button className='btn btn-primary' name='btnLvhSave' onClick={(ev)=>lvhHandleSubmit(ev)}>Ghi lại</button>
        <button className='btn btn-danger' onClick={lvhHandleClose}>Đóng</button>
      </form>
    </div>
  )
}
