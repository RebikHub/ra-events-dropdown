import React from 'react'

export default function DropdownItem({status, text}) {
  return (
    <li className={status ? 'active' : null}>
      {text}
    </li>
  )
}
