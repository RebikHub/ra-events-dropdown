import React from 'react'
import DropdownItem from './DropdownItem'

export default function DropdownList(props) {
  const changeElement = ['Profile Information', 'Change Password', 'Become PRO', 'Help', 'Log Out'];
  return (
    <ul className="dropdown">
      {changeElement.map(el => <DropdownItem status={el} text={el} key={el}/>)}
    </ul>
  )
}
