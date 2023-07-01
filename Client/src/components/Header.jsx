import React,{useState} from 'react'
import * as Material from '@mui/material'
import CreateProfile from './CreateProfile';

export default function Header(props) {
const [open, setOpen] = useState(false)
  return (
    <div className="header-container">
      <div className="header-body">
        <Material.Typography className="logo">Rore Profile</Material.Typography>
        <div className="menus">
        <Material.Switch  checked={props.check} onChange={(e)=>{
          if(e.target.checked)
            localStorage.setItem("theme","dark")
          else
          localStorage.setItem("theme","light")
          props.change();
        }}/>
          <Material.Typography className="create" onClick={()=>setOpen(true)}>Create</Material.Typography>
        </div>
      </div>
    <CreateProfile open={open} setOpen={setOpen}/>
    </div>
  );
}
