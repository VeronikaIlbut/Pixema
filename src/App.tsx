import './App.css';
import NewPassword from './pages/NewPasswordPage/NewPasswordPage';
import ResetPassword from './pages/ResetPasswordPage/ResetPasswordPage';
import Settings from './pages/SettingsPage/SettingsPage';
import SingIn from './pages/SingInPage/SingInPage';
import SingUp from './pages/SingUpPage/SingUpPage';
import ThemeContext from './providers/ThemeContext';
import MainPage from './pages/MainPage/MainPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import MoviePage from './pages/MoviePage/MoviePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from './pages/SearchPage/SearchPage';
import TrendsPage from './pages/TrendsPage/TrendsPage';

 export default function App() {


   return (
   <>

     <BrowserRouter>

      <ThemeContext>

        <Routes>

          <Route path="/" element={<MainPage/>}></Route>
          <Route path="/settings" element={<Settings/>}></Route>
          <Route path="/favorites" element={<FavoritesPage/>}></Route>
           {/* <Route path="/movie/:imdbID" element={<MoviePage/>}></Route> */}
          <Route path="/movie" element={<MoviePage/>}></Route>
          <Route path="/search" element={<SearchPage/>}></Route>
          <Route path="/trends" element={<TrendsPage/>}></Route> 
          

           {/* <SingIn></SingIn>
        <SingUp></SingUp>
        <ResetPassword></ResetPassword>
        <NewPassword></NewPassword>  */}

         </Routes>

      </ThemeContext>
    
    </BrowserRouter> 
      
    </>

  );
}  



