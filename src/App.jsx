
import Body from "./body";
import Login from "./login";
import Profile from "./profile";
import { BrowserRouter, Route,Routes } from "react-router-dom";
function App() {

  return (
    <>
    <BrowserRouter basename='/'>
    <Routes>
      <Route path="/" element={<Body />} >
          <Route path="/profile" element={<Profile />} />
           <Route path="/login" element={<Login/>} />
      </Route>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
