
import Body from "./components/body";
import Login from "./components/login";
import Profile from "./components/profile";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/feed";
function App() {

  return (
    <>
    <Provider store={appStore}>
    <BrowserRouter basename='/'>
    <Routes>
      <Route path="/" element={<Body />} >
           <Route path="/feed" element={<Feed />} />
           <Route path="/profile" element={<Profile />} />
           <Route path="/login" element={<Login/>} />
      </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
    </>
  )
}

export default App;
