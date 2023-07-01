import React, { useContext, useEffect ,useState} from 'react'
import * as Material from '@mui/material'
import CreateProfile from './CreateProfile';
import { UsersContext } from '../context/UsersContext';
import UpdateProfile from './UpdateProfile';

export default function ProfileList() {

  const {
    loadUsers,
    users,
    deleteProfile,
    fetchProfile,
    singleProfile,
    setSingleProfile,
    searchProfile,
  } = useContext(UsersContext);

    const [searchData,setSearchData]=useState("");
  const [confirm,setConfirm]=useState({
    open: false,
    id: "",
    file_name: "",
  });
  const [open,setOpen]=useState(false);

  
  const changeSearchData=(e)=>{
    if(e.target.value=="")
     loadUsers();

    else
    searchProfile(e.target.value);
  }

  useEffect(()=>{
   setTimeout(() => {
     loadUsers();
   }, 5000);
  },[])
  return (
    <Material.Container sx={{ mt: 6 }}>
      <Material.Typography variant="h6" className="tracking-in-expand">
        All Profile
      </Material.Typography>
      <Material.Typography variant="p" className="text-in tracking-in-expand">
        View The Profile List From The Current Users, Edit And Manage 👌
      </Material.Typography>

      <Material.Box sx={{ mt: 5, mb: 4 }}>
        <input
          placeholder="search profile..."
          onChange={changeSearchData}
          className="search"
          name="search"
          style={{
            width: "100%",
            marginBottom: 20,
            padding: "16px",
            fontSize: 20,
            borderRadius: 6,
          }}
        />
        <Material.Grid container spacing={2}>
          {users ? (
            users.length > 0 ? (
              users.map((user) => {
                return (
                  <Material.Grid item md={12} width={"100%"} lg={4}>
                    <Material.Paper
                    elevation={3}
                      className="slide-fwd-top tilt-in-fwd-tl"
                      sx={{
                        textAlign: "center",
                        p: 1,
                        maxHeight: "600px",
                        height: "500px",
                      }}
                    >
                      <img
                        src={`http://localhost:8000/profile/${user.image}`}
                        width={"200px"}
                        height={"200px"}
                        className="user-image"
                      />
                      <div className="user-title">
                        <Material.Typography className="name">
                          {user.FullName}
                        </Material.Typography>
                        <Material.Typography className="position">
                          {user.position}
                        </Material.Typography>
                      </div>
                      <div className="followers-social">
                        <div className="fl-list">
                          <div className="social">
                            <Material.Typography className="follows">
                              Followers
                            </Material.Typography>
                            <Material.Typography className="n-follows">
                              {user.Followers}
                            </Material.Typography>
                          </div>
                          <div className="social">
                            <Material.Typography className="follows">
                              Following
                            </Material.Typography>
                            <Material.Typography>
                              {user.Following}
                            </Material.Typography>
                          </div>
                        </div>
                      </div>

                      <span className="username">{user.Username}</span>

                      <Material.Box sx={{ mt: 3 }}>
                        <Material.Button
                          color="error"
                          variant="outlined"
                          onClick={() =>
                            setConfirm({
                              open: true,
                              id: user.ID,
                              file_name: user.image,
                            })
                          }
                        >
                          Delete
                        </Material.Button>
                        <Material.Button
                          onClick={() => {
                            fetchProfile(user.ID);
                            setOpen(true);
                          }}
                          sx={{ ml: 2 }}
                          color="success"
                          variant="contained"
                        >
                          Edit Profile
                        </Material.Button>
                      </Material.Box>
                    </Material.Paper>
                  </Material.Grid>
                );
              })
            ) : (
              <Material.Container>
                {" "}
                <Material.Alert
                  severity="info"
                  sx={{ mt: 4 }}
                  variant="outlined"
                  color="info"
                >
                  <strong style={{ color: "#f4f4f4" }}>
                    No Data Avialble Based on this context😢😢
                  </strong>
                </Material.Alert>
              </Material.Container>
            )
          ) : (
            <Material.Backdrop
              sx={{ color: "#fff"}}
              open={true}
              onClick={null}
            >
              <Material.CircularProgress color="inherit" />
            </Material.Backdrop>
          )}
        </Material.Grid>
      </Material.Box>

      <UpdateProfile
        data={singleProfile}
        setData={setSingleProfile}
        open={open}
        setOpen={setOpen}
      />
      <Material.Dialog open={confirm.open}>
        <Material.DialogTitle>Confirm</Material.DialogTitle>
        <Material.DialogContent>
          <Material.Typography>
            You Gonna Delete This Profile Record, Confirm,{" "}
            <strong>Do You Want To Continue?</strong>
          </Material.Typography>
        </Material.DialogContent>
        <Material.DialogActions>
          <Material.Button
            color="success"
            variant="outlined"
            onClick={() => setConfirm({ open: false, id: "", file_name: "" })}
          >
            Cancel
          </Material.Button>
          <Material.Button
            color="error"
            onClick={() => {
              deleteProfile(confirm);
              setConfirm({
                open: false,
                id: "",
                file_name: "",
              });
            }}
            variant="contained"
          >
            Continue
          </Material.Button>
        </Material.DialogActions>
      </Material.Dialog>
    </Material.Container>
  );
}
