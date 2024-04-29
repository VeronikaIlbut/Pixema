
import Home from '../../assets/Home.svg';
import Trends from '../../assets/Trends.svg';
import Favorites from '../../assets/Favorites.svg';
import Settings from '../../assets/Settings.svg';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import './Navigation.css';
import { useContext } from 'react';
import {myContext} from '../../providers/ThemeContext'


export default function Navigation() {

    const [color] = useContext(myContext);

    return(
        
    <>
        <div className={`navigation-${color}`}>
    
            <div className='navigation-box'>
                
                <Button styleBtn={`btn-nav-${color}`}>
                    <img src={Home} alt="Home" className='bth-Home'/> 
                    <span>Home</span>
                </Button>

                <Button styleBtn={`btn-nav-${color}`}>
                    <img src={Trends} alt="Trends" className='bth-Trends'/> 
                    <span>Trends</span>
                </Button>

                <Button styleBtn= {`btn-nav-${color}`}>
                    <img src={Favorites} alt="Favorites"  className='bth-Favorites'/> 
                    <span>Favorites</span>
                </Button>

                <Button styleBtn={`btn-nav-${color}`}>
                    <img src={Settings} alt="Settings" className='bth-Settings' /> 
                    <span>Settings</span>
                </Button>
                    
            </div>
        </div> 
    </>
    )
}