import Header from '../../components/Header/Header';
import NoFilm from '../../assets/NoFilm.svg'
import './FavoritesPage.css';
import { useState, useContext } from 'react';
import {myContext} from '../../providers/ThemeContext'
import Footer from '../../components/Footer/Footer';
// import { useState }MainPage from "react"; 


export default function FavoritesPage() {

    const [color, setColor] = useContext(myContext);

    return(    
        <>
            <Header></Header>
            <div className={`FavoritesPage-${color}`}>
                <div className='FavoritesPage-box'>
                    <div className='FavoritesPage-box-NoFavorites'>
                        <img src={NoFilm} alt="NoFavorites" />
                        <span className='NoFavorites-text'>Empty state text</span>

                    </div>
                    
                </div>
                <Footer styleFooter={`footer-${color}`}></Footer>
            </div>
            

        </>
    )
}