import React from 'react'

export default function LvhListUsers({renderLvhListUsers}) {
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
                <td>...</td>
            </tr>
        </>
    )
})
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
