import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './Service.css'
const Service = () => {
  return (
    <div>
      <div>Service</div>

      <button className='btn btn-success me-2'><NavLink to='/service/service1'>Service1</NavLink></button>
      <button className='btn btn-danger me-2'><NavLink to='/service/service2'>Service2</NavLink></button>
      <button className='btn btn-warning me-2'><NavLink to='/service/service3'>Service3</NavLink></button>
      <Outlet></Outlet>
    </div>

  )
}

export default Service