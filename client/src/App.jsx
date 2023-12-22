import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About'
import SignIn from './pages/SignIn';
import SignUp from "./pages/SignUp";
import Profile from './pages/Profile'
import CreateListing from './pages/CreateListing'
import UpdateListing from "./pages/UpdateListing"
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import { useSelector } from "react-redux";
import Listing from "./pages/Listing";
import Search from "./pages/Search";


const App = () => {
  
  return (
   <BrowserRouter>
   <Header/>
    <Routes>
    <Route  path="/" element={<Home/>}  />
    <Route path="/sign-in" element={<SignIn/>} />
    <Route path="/search" element={<Search/>}/>
    <Route path="/sign-up" element={<SignUp/>} />
    <Route path="/listing/:listingId" element={<Listing/>} />
  <Route element={<PrivateRoute/>} >
  <Route  path="/profile" element={<Profile/>} />
  <Route  path="/create-listing" element={<CreateListing/>} />
  <Route path="/update-listing/:listingId" element={<UpdateListing/>} />
  </Route>
 
    <Route path="/about" element={<About/>} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
