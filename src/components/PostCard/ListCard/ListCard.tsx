import './ListCard.css';
import Card from '../Card/Card'
import {Movies} from "../../../interfaces/interfaces";
import { useDispatch, useSelector} from "react-redux";
import { fetchAllmovies } from "../../../redux/slice/moviesSlice";
import {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import Button from '../../Button/Button';

export default function ListCard() {

    const dispatch = useDispatch <any>();
    const [page, setPage] = useState<number>(1);
    const handlePage = () => setPage((prevPage) => ++prevPage);
    
    

    const films = useSelector ((state:any) => state.movies.films);

    const moviesWords = ["win", "day", "life", "family", "film", "people","food", "fashion", "friend"];
    const titleFilm = moviesWords[Math.floor(Math.random() * moviesWords.length)];

    useEffect(() => {
        dispatch(fetchAllmovies({titleFilm, page}))
    },[titleFilm, page])

    return (
        <> 
            <div className="ListCard-box">
            {films.map((films:Movies)  => (
                <div className="film-container" key={films.imdbID}>
                    <Link to="/movie">
                        <Card key={films.imdbID} 
                            source={films.Poster} 
                            cardTitle={films.Title} 
                            cardYear={films.Year} 
                            imdbID={films.imdbID} ></Card> </Link>
                </div>
                )
                 )}
            </div>
        {films.length > 9 && 
            <div className="button-show-more">
                <Button onClick={handlePage} isDisabled={false} styleBtn="show-more">Show more</Button>
            </div>}
        </>
        
    );
}


