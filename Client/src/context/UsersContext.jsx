import * as react from "react";

import axios from "axios";
import { Toaster,toast } from "react-hot-toast";
export const UsersContext = react.createContext();

export const UsersContextProvider = (props) => {
  const [users, setUsers] = react.useState();
  const [loading, isLoading] = react.useState(true);
  const [responses,setResponses]=react.useState();
  const [singleProfile,setSingleProfile]=react.useState();


  const loadUsers = () => {
    axios
      .get("http://localhost:8000/profile")
      .then((result) => {
        setUsers(result.data.data);
       
      })
      .catch((err) => console.log(err));
  };
  const fetchProfile = (id) => {
    axios
      .get("http://localhost:8000/profile/"+id)
      .then((result) => {
        setSingleProfile(result.data.data[0]);
       
      })
      .catch((err) => console.log(err));
  };

  const createProfile = (data) => {
    axios
      .post("http://localhost:8000/profile/create",data)
      .then((result) => {
        loadUsers();
        setResponses(result.data);
         toast.success(result.data.message);
        console.log(result.data)
      })
      .catch((err) => console.log(err));
  };
  const UpdateProfileData = (data) => {
    axios
      .post("http://localhost:8000/profile/update", data)
      .then((result) => {
        loadUsers();
        toast.success(result.data.message);
        console.log(result.data);
      })
      .catch((err) => console.log(err));
  };
  const deleteProfile = (data) => {
    axios
      .post(`http://localhost:8000/profile/delete`,data)
      .then((result) => {
        loadUsers();
        toast.success(result.data.message);
        console.log(result.data)
      })
      .catch((err) => console.log(err));
  };

 return (
   <>
     <Toaster />
     <UsersContext.Provider
       value={{
         loadUsers,
         users,
         setUsers,
         isLoading,
         responses,
         createProfile,
         deleteProfile,
         fetchProfile,
         singleProfile,
         setSingleProfile,
         UpdateProfileData,
       }}
     >
       {props.children}
     </UsersContext.Provider>
   </>
 );
 
};
