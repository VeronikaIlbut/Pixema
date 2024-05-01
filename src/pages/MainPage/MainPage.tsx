import Header from '../../components/Header/Header';
import './MainPage.css';
import { useContext } from 'react';
import {myContext} from '../../providers/ThemeContext'
import Footer from '../../components/Footer/Footer'; 
import ListCard from '../../components/PostCard/ListCard/ListCard';



export default function MainPage() {

    const [color] = useContext(myContext);

    return(    
        <>
            <Header></Header>
            <div className={`MainPage-${color}`}>
                <div className='MainPage-box'>
                    <ListCard></ListCard>   
                </div>
                <Footer styleFooter={`footer-${color}`}></Footer>
            </div>
        </>
    )
}



