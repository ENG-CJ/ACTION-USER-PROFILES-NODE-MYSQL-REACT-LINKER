
import React,{useState,useEffect,useContext} from 'react'
import * as Material from '@mui/material';
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { toast,Toaster } from 'react-hot-toast';
import { UsersContext } from '../context/UsersContext';


export default function CreateProfile(props) {

  const { createProfile,responses } = useContext(UsersContext);
  const [userData, setUserData] = useState({});
  const [file,setFile]=useState();

  const changeFile=(e)=>{
    setFile(e.target.files[0]);
  }
  const trackUserDetails=(e)=>{
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }


  const handleSubmit=(e)=>{
    const formData=new FormData();
    formData.append("name",userData.name);
    formData.append("username",userData.username);
    formData.append("Followers",userData.Followers);
    formData.append("Following",userData.Following);
    formData.append("position",userData.position);
    formData.append("image",file);
    createProfile(formData);
   
   
  }



  

  return (
    <div>
      <Material.Dialog open={props.open}>
        <Material.DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Material.Typography>Create Profile</Material.Typography>
          <HighlightOffIcon
            onClick={() => props.setOpen(false)}
            sx={{ ml: 7, cursor: "pointer" }}
          />
        </Material.DialogTitle>
        <Material.Divider sx={{ mb: 2 }} />

        <Material.DialogContent>
          <Material.Box className="box-container">
            <div className="inner-content">
              <Material.Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: "wrap",
                }}
              >
                <label>FullName</label>
                <input
                  onChange={trackUserDetails}
                  name="name"
                  placeholder="users's FullName"
                  width={"100%"}
                  type="text"
                />
              </Material.Box>
              <Material.Box sx={{ display: "flex", flexDirection: "column" }}>
                <label>Username</label>
                <input
                  onChange={trackUserDetails}
                  name="username"
                  width={"100%"}
                  placeholder="@yourname"
                  type="text"
                />
              </Material.Box>
              <Material.Box sx={{ display: "flex", flexDirection: "column" }}>
                <label>Followers Number</label>
                <input
                  onChange={trackUserDetails}
                  name="Followers"
                  width={"100%"}
                  placeholder="2M"
                  type="text"
                />
              </Material.Box>
              <Material.Box sx={{ display: "flex", flexDirection: "column" }}>
                <label>Following Number</label>
                <input
                  onChange={trackUserDetails}
                  name="Following"
                  width={"100%"}
                  placeholder="19k"
                  type="text"
                />
              </Material.Box>
              <label>Position</label>
              <input
                onChange={trackUserDetails}
                name="position"
                width={"100%"}
                placeholder="software dev"
                type="text"
              />
              <label>Profile</label>
              <input onChange={changeFile} name="image" width={"100%"} placeholder="9M" type="file" />
            </div>
          </Material.Box>
        </Material.DialogContent>

        <Material.DialogActions>
          <Material.Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
          >
            Create
          </Material.Button>
        </Material.DialogActions>
        <Toaster />
      </Material.Dialog>
    </div>
  );
}
