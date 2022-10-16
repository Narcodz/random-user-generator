import React from 'react'
import { useLocation } from 'react-router-dom';

function UserDetails() {

  const data = useLocation();
  const { state } = data;
  const userData = state.data

  return (

    <div className='user-details'>
      <img src={userData.picture.large} alt="" />
      <p className='name'>{userData.name.first} {userData.name.last}</p>
      <p className='other-details'>
        <span>< i class="fa fa-envelope-open"></i> {userData.email}</span>
        <span><i class="fa fa-map-marker"></i>{userData.location.country}</span>
        <span><i class="fa fa-phone"></i>{userData.phone}</span>
      </p>
    </div>

  )
}

export default UserDetails