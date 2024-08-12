import React from 'react'
import { Outlet } from 'react-router-dom'

const GuestLayout = () => {
  return (
    <div>
        Hi
        <Outlet />
    </div>
  )
}

export default GuestLayout