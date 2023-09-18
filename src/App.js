
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
import RegularMealPage from './pages/RegularMealPage';
import RegularCostPage from './pages/RegularCostPage';
import SignIn from './components/SignIn';



function App() {
  return (
    <div className="App">
       
          <Toaster />     
          <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<DashboardPage></DashboardPage>}></Route>
            <Route exact path='/allMemberPage' element={<AllMemberPage></AllMemberPage>}></Route>
            <Route exact path='/searchPage' element={<SearchPage></SearchPage>}></Route>
            <Route exact path='/registration' element={<RegistrationPage></RegistrationPage>}></Route>
            <Route exact path='/regularMeal' element={<RegularMealPage></RegularMealPage >}></Route>
            <Route exact path='/regularCost' element={<RegularCostPage></RegularCostPage>}></Route>
            <Route exact path='/signIn' element={<SignIn></SignIn>}></Route>
           
           
            <Route exact path='*' element={<NotFound></NotFound>}></Route>
          </Routes>
      
          </BrowserRouter>
          <ToastContainer />
  
    </div>
  );
}

export default App;
