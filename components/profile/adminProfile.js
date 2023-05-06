import React from 'react'

const AdminProfile = ({ userInfo }) => {
  return (
    <div className="modal">
      <div className="modal-box">
        <div className="block mx-auto rounded-full h-40 w-40 bg-cover bg-center" style={{ backgroundImage: `url('${userInfo?.photoURL || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}` }}></div>
        <h3 className="font-bold text-lg">{userInfo?.name}</h3>
        <p className="py-4">Role: {userInfo?.role}</p>
        <div className="modal-action">
          <label htmlFor="my-modal" className="btn">Close</label>
        </div>
      </div>
    </div>
  )
}

export default AdminProfile