// import Header from '../../components/Header/Header';
// import './MoviePage.css';
// import { useState, useContext, useEffect } from 'react';
// import {myContext} from '../../providers/ThemeContext'
// import Footer from '../../components/Footer/Footer';
// import Button from '../../components/Button/Button';
// import { useDispatch, useSelector} from "react-redux";
// import { fetchOneFilm } from "../../redux/slice/filmSlice";
// import { useParams } from 'react-router-dom';


// export default function MoviePage() {


//     const [color, ] = useContext(myContext);

//     const dispath = useDispatch()<any>

//     const {imdbID} = useParams();
    
//     const film = useSelector ((state:any) => state.film);

//     useEffect(() => {
//         dispath(fetchOneFilm(imdbID));
//     },[])

//     console.log(film.selectedFilm)


//     return(    
//         <>
//             <Header></Header>
//             <div className={`MoviePage-${color}`}>
//                 <div className='MoviePage-box'>

//                     <div className="film-box">
//                         {/* <img src={film.selectedFilm.Poster} alt="Poster" className="film-box-poster"></img> */}
//                         <div className="btn-box">
//                             <Button  isDisabled={false} 
//                                     styleBtn="smallBtn smallBtn-ADD">ADD</Button>
                            
//                             <Button  isDisabled={false} 
//                                     styleBtn="smallBtn smallBtn-DELETE" >DELETE</Button>
//                         </div>
//                     </div>

//                     <div className="info">
//                             <p className="info-genre">{film.selectedFilm.Genre}</p>
//                             <p className="info-genre"></p>
//                             <h1 className={`info-title-${color}`}>{film.selectedFilm.Title}</h1>
//                             <div className="info-rating">
//                                 <div className="rating">{film.selectedFilm.imdbRating}</div>
//                                 <div className="imdb-box">
//                                     <p className="imdb-rating" >IMDb</p>
//                                     <p className="imdb-rating">{film.selectedFilm.imdbRating}</p>
//                                 </div>
//                                 <div className="imdb-box">
//                                     <p className="imdb-rating">{film.selectedFilm.Runtime}</p>
//                                 </div>
//                             </div>


//                             <p className={`film-description-${color}`}>{film.selectedFilm.Plot}</p>
//                             <div className="info-box">
//                                 <p className="info-title">Year</p>
//                                 <p className={`info-description-${color}`}>{film.selectedFilm.Year}</p>
//                             </div>
//                             <div className="info-box">
//                                 <p className="info-title">Released</p>
//                                 <p className={`info-description-${color}`}>{film.selectedFilm.Released}</p>
//                             </div>
//                             <div className="info-box">
//                                 <p className="info-title">BoxOffice</p>
//                                 <p className={`info-description-${color}`}>{film.selectedFilm.BoxOffice}</p>
//                             </div>
//                             <div className="info-box">
//                                 <p className="info-title">Country</p>
//                                 <p className={`info-description-${color}`}>{film.selectedFilm.Country}</p>
//                             </div>
//                             <div className="info-box">
//                                 <p className="info-title">Production</p>
//                                 <p className={`info-description-${color}`}>{film.selectedFilm.Production}</p>
//                             </div>
//                             <div className="info-box">
//                                 <p className="info-title">Actors</p>
//                                 <p className={`info-description-${color}`}>{film.selectedFilm.Actors}</p>
//                             </div>
//                             <div className="info-box">
//                                 <p className="info-title">Director</p>
//                                 <p className={`info-description-${color}`}>{film.selectedFilm.Director}</p>
//                             </div>
//                             <div className="info-box">
//                                 <p className="info-title">Writers</p>
//                                 <p className={`info-description-${color}`}>{film.selectedFilm.Writer}</p>
//                             </div> 
//                         </div> 
                     
                    
//                 </div> 
//                 <Footer styleFooter={`footer-${color}`}></Footer>
//             </div>
            

//         </>
//     )
// }



import Header from '../../components/Header/Header';
import './MoviePage.css';
import { useState, useContext, useEffect } from 'react';
import {myContext} from '../../providers/ThemeContext'
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import { useDispatch, useSelector} from "react-redux";
import { fetchOneFilm } from "../../redux/slice/filmSlice";
import { useParams } from 'react-router-dom';


export default function MoviePage() {


    const [color, ] = useContext(myContext);

    const dispath = useDispatch()<any>

    const {imdbID} = useParams();
    
    const film = useSelector ((state:any) => state.film);

    useEffect(() => {
        dispath(fetchOneFilm(imdbID));
    },[])

    console.log(film.selectedFilm)


    return(    
        <>
            <Header></Header>
            <div className={`MoviePage-${color}`}>
                <div className='MoviePage-box'>

                    <div className="film-box">
                        <img src={film.selectedFilm.Poster} alt="Poster" className="film-box-poster"></img>
                        <div className="btn-box">
                            <Button  isDisabled={false} 
                                    styleBtn="smallBtn smallBtn-ADD">ADD</Button>
                            
                            <Button  isDisabled={false} 
                                    styleBtn="smallBtn smallBtn-DELETE" >DELETE</Button>
                        </div>
                    </div>

                    <div className="info">
                            <p className="info-genre"></p>
                            <p className="info-genre"></p>
                            <h1 className={`info-title-${color}`}></h1>
                            <div className="info-rating">
                                <div className="rating"></div>
                                <div className="imdb-box">
                                    <p className="imdb-rating" >IMDb</p>
                                    <p className="imdb-rating"></p>
                                </div>
                                <div className="imdb-box">
                                    <p className="imdb-rating"></p>
                                </div>
                            </div>


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





