import React from 'react'
import assets from '../assets/assets'

const RightSidebar = ({selectedUser}) => {
  return selectedUser && (
    <div>
      <div>
        <img src={selectedUser?.profilrPic || assets.avatar_icon} alt="" className='w-20 aspect-[1/1] rounded-full'/>
      </div>
    </div>
  )
}

export default RightSidebar
