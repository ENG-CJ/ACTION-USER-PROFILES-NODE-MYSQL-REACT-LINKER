import { useEffect, useState } from "react";
import "./App.css";
import toast, { Toaster } from "react-hot-toast";
import Header from "./components/Header.jsx";
import ProfileList from "./components/ProfileList.jsx";
import { UsersContextProvider } from "./context/UsersContext.jsx";
import { CssBaseline, Paper, ThemeProvider, createTheme } from "@mui/material";
function App() {
  const [count, setCount] = useState(10);
  const [darkMode, setDarkMode] = useState(false);
  const [currentTheme, setCurrentTheme] = useState();

  useEffect(() => {
    if (localStorage.getItem("theme") == "dark") setDarkMode(true);
    else setDarkMode(false);
  }, []);
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <UsersContextProvider>
          <Header
            check={darkMode}
            change={() => {
              setDarkMode(!darkMode);
            }}
          />
          <ProfileList />
        </UsersContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
