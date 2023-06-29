import React,{useState} from 'react'
import * as Material from '@mui/material'
import CreateProfile from './CreateProfile';

export default function Header() {
const [open, setOpen] = useState(false)
  return (
    <div className="header-container">
      <div className="header-body">
        <Material.Typography className="logo">Rore Profile</Material.Typography>
        <div className="menus">
          {/* <Material.Typography className="view rotate-scale-up-hor">
            View
          </Material.Typography> */}
          <Material.Typography className="create" onClick={()=>setOpen(true)}>Create</Material.Typography>
        </div>
      </div>
    <CreateProfile open={open} setOpen={setOpen}/>
    </div>
  );
}
