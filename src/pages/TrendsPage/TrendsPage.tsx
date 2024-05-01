import Footer from '../../components/Footer/Footer';
import './TrendsPage.css';
import { useContext } from 'react';
import {myContext} from '../../providers/ThemeContext'
import Header from '../../components/Header/Header';
import Card from '../../components/PostCard/Card/Card';
import {useSelector, useDispatch} from "react-redux";
import { Movies } from "../../interfaces/interfaces";
import {fetchTrends} from "../../redux/slice/trendsSlice";
import {useEffect} from "react";
import { Link } from 'react-router-dom';
import Trend from '../../assets/Trend.png';


export default function TrendsPage() {

    const [color] = useContext(myContext);



    const trendFilms = useSelector ((state:any) => state.trends.trends);
    const dispatch = useDispatch <any>();

    const trendWords = [ "popular", "better", "films", "first", "win"];
    const randomTrendWord = trendWords[Math.floor(Math.random() * trendWords.length)];
    
    useEffect(() => {
    dispatch(fetchTrends(randomTrendWord));
    }, [dispatch]);

    return(    
        <>
            <Header></Header>
            <div className={`TrendsPage-${color}`}>
                <div className='TrendsPage-box'>
                {trendFilms.length > 0 && trendFilms.map((film:Movies) => (
                    <div className="film-container" key={film.imdbID}>
                        {/* <div className="trend-container">
                            <img src={Trend} alt="trend-icon" className="trend-icon"></img>
                        </div>  */}
                     <Link to={`/movie/${film.imdbID}`}>
                        <Card key={film.imdbID} 
                            source={film.Poster} 
                            cardTitle={film.Title} 
                            cardYear={film.Year} 
                            imdbID={film.imdbID} >
                        </Card>
                    </Link>
                    </div>))}  
                </div>
                <Footer styleFooter={`footer-${color}`}></Footer>
            </div>

        </>
    )
}
