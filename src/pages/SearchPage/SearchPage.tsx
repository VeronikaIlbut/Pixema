
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './SearchPage.css';
import { useState, useContext, useEffect } from 'react';
import {myContext} from '../../providers/ThemeContext'
import Card from '../../components/PostCard/Card/Card';
import Button from '../../components/Button/Button'
import {useSelector, useDispatch} from "react-redux";
import { Movies } from "../../interfaces/interfaces";
import {Link, useParams } from "react-router-dom";
import { fetchSearch } from "../../redux/slice/searchSlice";



export default function SearchPage() {

    const { title } = useParams();
    const [color] = useContext(myContext);
    const searchFilm = useSelector ((state:any) => state.search.search);
    const dispatch = useDispatch <any>();
    const [page, setPage] = useState<number>(1);
    const changePage = () => setPage((prevPage) => ++prevPage);

    useEffect(() => {
        if (title) {
            dispatch(fetchSearch({ title, page}));
        }
    }, [dispatch, title]);


        return (
        <>
            <Header></Header>
            <div className={`SearchPage-${color}`}>
                
                <div className='SearchPage-box'>
                {searchFilm.length === 0 ? null : searchFilm.map((film:Movies) => (
                    <div className="key-container" key={film.imdbID}>
                        <Link to={`/movie/${film.imdbID}`}>
                            <Card key={film.imdbID} 
                                source={film.Poster} 
                                cardTitle={film.Title} 
                                cardYear={film.Year} 
                                imdbID={film.imdbID} ></Card> 
                        </Link>
                        
                    </div>))}
                
                </div>
                {searchFilm.length > 9 && 
                <div className="button-show-more">
                    <Button onClick={changePage} isDisabled={false} styleBtn="show-more">Show more</Button>
                </div>}
                <Footer styleFooter={`footer-${color}`}></Footer>
            </div>
            
        </>
    );
}
