
import './App.css';
import { Toaster } from 'react-hot-toast';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from './pages/DashboardPage';
import AllMemberPage from './pages/AllMemberPage';
import SearchPage from './pages/SearchPage';
import RegistrationPage from './pages/RegistrationPage';
import NotFound from './pages/NotFound';

import RegularCostPage from './pages/RegularCostPage';
import SignIn from './components/SignIn';
import { getToken } from './helper/SessionHelper';

import MealInformationPage from './pages/MealInformationPage';
import ProfilePage from './pages/ProfilePage';



function App() {

  const token = getToken();

       if(!token){

        return(
          <div className="App">
             <Toaster />     
        <BrowserRouter>
        <Routes>

                
                <Route exact path='/register' element={<RegistrationPage></RegistrationPage>}></Route>
                <Route exact path='/dashboard' element={<DashboardPage></DashboardPage>}></Route>
                <Route exact path='/' element={<SignIn></SignIn>}></Route>
                <Route exact path='*' element={<NotFound></NotFound>}></Route>

        </Routes>

        
        </BrowserRouter>
          <ToastContainer />

          </div>
        )
       

       }else{
        return (
          <div className="App">            
                <Toaster />     
                <BrowserRouter>
                <Routes>
                  <Route exact path='/' element={<DashboardPage></DashboardPage>}></Route>
                  <Route exact path='/ProfilePage' element={<ProfilePage></ProfilePage>}></Route>
                  <Route exact path='/mealInformation' element={<MealInformationPage></MealInformationPage>}></Route>
                  <Route exact path='/allMemberPage' element={<AllMemberPage></AllMemberPage>}></Route>
                  <Route exact path='/searchPage' element={<SearchPage></SearchPage>}></Route>          
                  <Route exact path='/regularCost' element={<RegularCostPage></RegularCostPage>}></Route>          
                  <Route exact path='*' element={<NotFound></NotFound>}></Route>
                </Routes>
            
                </BrowserRouter>
                <ToastContainer />
        
          </div>
        );

       }
  
}

export default App;
