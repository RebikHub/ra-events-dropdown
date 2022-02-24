import React from 'react'

export default function DropdownButton({toggleOpen}) {
  return (
    <button className="btn" onClick={() => toggleOpen()}>
      <span>Account Settings</span>
      <i className="material-icons">public</i>
    </button>
  )
}
