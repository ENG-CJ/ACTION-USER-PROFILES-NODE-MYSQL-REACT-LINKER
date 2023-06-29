import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import toast,{Toaster} from 'react-hot-toast';
function App() {
  const [count, setCount] = useState(10)


  return (
    <>
   <h2>USER PROFILE {count}</h2>
    </>
  )
}

export default App
