import Header from '../../components/Header/Header';
import './MoviePage.css';
import { useState, useContext, useEffect } from 'react';
import {myContext} from '../../providers/ThemeContext'
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import {  useSelector} from "react-redux";
import { fetchOneFilm } from "../../redux/slice/filmSlice";


export default function MoviePage() {

    const [color, ] = useContext(myContext);
    
    const film = useSelector ((state:any) => state.film);


    return(    
        <>
            <Header></Header>
            <div className={`MoviePage-${color}`}>
                <div className='MoviePage-box'>

                 
                    <div className="film-box">
                        {/* <img src={ } alt="Poster" className="film-box-poster"></img> */}
                        <div className="btn-box">
                            <Button  isDisabled={false} 
                                    styleBtn="smallBtn smallBtn-ADD">ADD</Button>
                            
                            <Button  isDisabled={false} 
                                    styleBtn="smallBtn smallBtn-DELETE" >DELETE</Button>
                        </div>
                    </div>




                    <div className="info">
                            {/* <p className="info-genre">{film.oneFilm.genre}</p>
                            <p className="info-genre"></p>
                            <h1 className={`info-title-${color}`}>{film.oneFilm.title}</h1>
                            <div className="info-rating">
                                <div className="rating">{film.oneFilm.imdbRating}</div>
                                <div className="imdb-box">
                                    <p className="imdb-rating" >IMDb</p>
                                    <p className="imdb-rating">{film.oneFilm.imdbRating}</p>
                                </div>
                                <div className="imdb-box">
                                    <p className="imdb-rating">{film.oneFilm.imdbRating}</p>
                                </div>
                            </div> */}


                            <p className={`film-description-${color}`}></p>
                            <div className="info-box">
                                <p className="info-title">Year</p>
                                <p className={`info-description-${color}`}></p>
                            </div>
                            <div className="info-box">
                                <p className="info-title">Released</p>
                                <p className={`info-description-${color}`}></p>
                            </div>
                            <div className="info-box">
                                <p className="info-title">BoxOffice</p>
                                <p className={`info-description-${color}`}></p>
                            </div>
                            <div className="info-box">
                                <p className="info-title">Country</p>
                                <p className={`info-description-${color}`}></p>
                            </div>
                            <div className="info-box">
                                <p className="info-title">Production</p>
                                <p className={`info-description-${color}`}></p>
                            </div>
                            <div className="info-box">
                                <p className="info-title">Actors</p>
                                <p className={`info-description-${color}`}></p>
                            </div>
                            <div className="info-box">
                                <p className="info-title">Director</p>
                                <p className={`info-description-${color}`}></p>
                            </div>
                            <div className="info-box">
                                <p className="info-title">Writers</p>
                                <p className={`info-description-${color}`}></p>
                            </div> 
                        </div> 
                     
                    
                </div> 
                <Footer styleFooter={`footer-${color}`}></Footer>
            </div>
            

        </>
    )
}


