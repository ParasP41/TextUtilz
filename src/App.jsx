import Navbar from './Components/Navbar.jsx'
import Textarea from './Components/Textarea.jsx';
import { useState } from 'react'
import Alert from './Components/Alert.jsx';
import About from './Components/About.jsx';
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';
function App() {
  const [mode, setMode] = useState("Dark Mode");
  const changeMode = () => {
    if (mode == "Dark Mode") {
      setMode("Light Mode");
      showAlert("Dark Mode", "Success!"); 
      document.body.style.color="white"
      document.body.style.backgroundColor="	#181818"
    }
    else {
      setMode("Dark Mode");
      showAlert("Light Mode", "Success!");
      document.body.style.color="	#181818"
      document.body.style.backgroundColor="white"
    }
  }

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  
  const router=createBrowserRouter([
    {
      path: '/',
      element: <><Navbar  changeMode={changeMode} mode={mode} back="#202020" text="white" ></Navbar> <Alert alert={alert} /><Textarea showAlert={showAlert} ></Textarea></>,
    },
    {
      path: '/home',
      element: <><Navbar changeMode={changeMode} mode={mode} ></Navbar><Alert alert={alert} /><Textarea showAlert={showAlert} ></Textarea></>,
    },
    {
      path: '/about',
      element: <> <Navbar changeMode={changeMode} mode={mode} ></Navbar><About></About></>,
    },
  ]);
  return (
    <>
      {/* <Navbar changeMode={changeMode} mode={mode} ></Navbar> */}
      <RouterProvider router={router}/>
      {/* <Alert alert={alert} /> */}
      {/* <Textarea showAlert={showAlert} ></Textarea> */}
    </>
  )
}

export default App



