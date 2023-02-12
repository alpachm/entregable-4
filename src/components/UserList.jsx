import React from 'react'
import './styles/userList.css'

const UserList = ({ user, deleteUser, setUserUpdate, setIsOpen }) => {

    const handleUpdate = () => {
        setUserUpdate(user)
        setIsOpen(true)
    }

    return (
        <div className='user_box'>
            <div className="content_box">
                <h3>{user.first_name} {user.last_name}</h3>
                <p>{user.email}</p>
                <span><i className='bx bx-gift'></i> {user.birthday}</span>
            </div>

            <div className="icons">
                <i onClick={handleUpdate} className='bx bx-edit-alt' ></i>
                <i onClick={() => deleteUser(user.id)} className='bx bxs-trash' ></i>
            </div>
        </div>
    )
}

export default UserList