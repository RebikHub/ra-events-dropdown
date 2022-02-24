import React, {useState} from 'react'
import DropdownList from './DropdownList'
import DropdownButton from './DropdownButton'

export default function Dropdown() {
  const [open, setOpen] = useState('');
  const toggleOpen = () => {
    // setOpen('')
    console.log('hello');
  }
  return (
    <div className={'dropdown-wrapper ' + open}>
      <DropdownButton onToggle={toggleOpen}/>
      <DropdownList/>
    </div>
  )
}
