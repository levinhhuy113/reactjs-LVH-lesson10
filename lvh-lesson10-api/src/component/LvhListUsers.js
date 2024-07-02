import React from 'react'
import axios from '../api/lvhApi'

export default function LvhListUsers({renderLvhListUsers, onLvhDelete}) {
    console.log("LvhListUsers:",renderLvhListUsers)
    //hiển thị dữ liệu
    let lvhElementUsers = renderLvhListUsers.map((lvhUser,index)=>{
    return(
        <>
            <tr>
                <td>{lvhUser.id}</td>
                <td>{lvhUser.UserName}</td>
                <td>{lvhUser.Password}</td>
                <td>{lvhUser.Email}</td>
                <td>{lvhUser.Phone}</td>
                <td>
                        <button className='btn btn-danger' onClick={()=>lvhHandleDelete(lvhUser)}> Delete </button>
                    </td>
            </tr>
        </>
    )
})

const lvhHandleDelete =  async (param)=>{
    if(window.confirm('Bạn có muốn xóa thật không?')){
        const lvhRes = await axios.delete("lvhUsers/"+param.id);
    }
    onLvhDelete();
}
  return (
    <div>
      <table className="table table-bordered">
        <thead>
            <tr>
                <th>Id</th>
                <th>UserName</th>
                <th>Password</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Chức năng</th>              
            </tr>
        </thead>
        <tbody>
            {lvhElementUsers}

        </tbody>
      </table>
    </div>
  )
}