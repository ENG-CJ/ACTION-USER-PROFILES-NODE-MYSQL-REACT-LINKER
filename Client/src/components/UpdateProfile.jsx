import React, { useState, useEffect, useContext } from "react";
import * as Material from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { toast, Toaster } from "react-hot-toast";
import { UsersContext } from "../context/UsersContext";

export default function UpdateProfile(props) {
  const [file, setFile] = useState("");
  const { UpdateProfileData } = useContext(UsersContext);
  const [hasFile, setHasFile] = useState(false);

  const changeFile = (e) => {
    setFile(e.target.files[0]);
    setHasFile(true);
      props.setData({
        ...props.data,
        hasFile: true,
      });
  };
  const trackUserDetails = (e) => {
    if (hasFile)
      props.setData({
        ...props.data,
        [e.target.name]: e.target.value,
        hasFile: true,
      });
    else
      props.setData({
        ...props.data,
        [e.target.name]: e.target.value,
        hasFile: false,
      });
  };

  const handleSubmit = (e) => {
    // const formData = new FormData();
    // formData.append("name", userData.name);
    // formData.append("username", userData.username);
    // formData.append("Followers", userData.Followers);
    // formData.append("Following", userData.Following);
    // formData.append("position", userData.position);
    // formData.append("image", file);

   
    if(props.data.hasFile)
    console.log(props.data);
    else
    // console.log(props.data);
    UpdateProfileData(props.data);
  };

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
          <Material.Typography>Update Profile</Material.Typography>
          <Material.Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Material.Avatar
              src={`http://localhost:8000/profile/${props.data?.image}`}
            ></Material.Avatar>
            <HighlightOffIcon
              onClick={() => props.setOpen(false)}
              sx={{ ml: 2, cursor: "pointer" }}
            />
          </Material.Box>
        </Material.DialogTitle>
        <Material.Divider sx={{ mb: 2 }} />

        {props.data && (
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
                    value={props.data.FullName}
                    onChange={trackUserDetails}
                    name="FullName"
                    placeholder="users's FullName"
                    width={"100%"}
                    type="text"
                  />
                </Material.Box>
                <Material.Box sx={{ display: "flex", flexDirection: "column" }}>
                  <label>Username</label>
                  <input
                    value={props.data.Username}
                    onChange={trackUserDetails}
                    name="Username"
                    width={"100%"}
                    placeholder="@yourname"
                    type="text"
                  />
                </Material.Box>
                <Material.Box sx={{ display: "flex", flexDirection: "column" }}>
                  <label>Followers Number</label>
                  <input
                    value={props.data.Followers}
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
                    value={props.data.Following}
                    onChange={trackUserDetails}
                    name="Following"
                    width={"100%"}
                    placeholder="19k"
                    type="text"
                  />
                </Material.Box>
                <label>Position</label>
                <input
                  value={props.data.position}
                  onChange={trackUserDetails}
                  name="position"
                  width={"100%"}
                  placeholder="software dev"
                  type="text"
                />
                <label>Profile</label>
                <input
                  onChange={changeFile}
                  name="image"
                  width={"100%"}
                  placeholder="9M"
                  type="file"
                />
              </div>
            </Material.Box>
          </Material.DialogContent>
        )}

        <Material.DialogActions>
          <Material.Button
            onClick={handleSubmit}
            variant="contained"
            color="success"
          >
            Edit
          </Material.Button>
        </Material.DialogActions>
        <Toaster />
      </Material.Dialog>
    </div>
  );
}
