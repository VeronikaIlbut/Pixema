import Home from '../../assets/Home.svg';
import Trends from '../../assets/Trends.svg';
import Favorites from '../../assets/Favorites.svg';
import Settings from '../../assets/Settings.svg';
import Search from '../../assets/search.png';
import Close from '../../assets/Close.svg';
import ArrowRight from '../../assets/Arrow Right.png';
import Pixema from '../../assets/Pixema.png';
import PixemaLight from '../../assets/PixemaLight.png';
import Filter from '../../assets/Filter.svg';
import Button from '../Button/Button';
import { useContext, useState } from 'react';
import {myContext} from '../../providers/ThemeContext'
import './Header.css';
import Title from '../Title/Title';
import UserAuth from '../UserAuth/UserAuth';
import Inputs from '../Inputs/Inputs';
import { Link } from 'react-router-dom';



export default function Header() {

    const [isOpen, setOpen] = useState(false);
    const [isOpenNav, setOpenNav] = useState(false);

    function openFilter() {
        setOpen(!isOpen);
        console.log(isOpen)
    }

    function openNavigation() {
        setOpenNav(!isOpenNav);
        console.log(isOpen)
    }

    const [color] = useContext(myContext);

    let userName = 'Artem Lapitsky'
    let userInitials = userName.split(" ").map(item => item.slice(0, 1)).join("")

    return(
        
    <>
        <div className={`Header-${color}`}>
            <div className='Header-box'>
                <Button styleBtn={`btnPixema-${color}`}
                        onClick={() => openNavigation()}>
                    <img src={Pixema} alt="pixema" className={`Header-pixemaDark-${color}`} />
                    <img src={PixemaLight} alt="pixema" className={`Header-pixemaLight-${color}`}/>
                </Button>

                {isOpenNav && 
                <div className={`navigation-${color} ${isOpenNav ? "active" : ""}`}>
                        
                    <Link to="/"> <Button styleBtn={`btn-nav-${color}`}>
                        <img src={Home} alt="Home" className='bth-Home'/> 
                        <span>Home</span>
                    </Button></Link>

                    <Link to="trends"> <Button styleBtn={`btn-nav-${color}`}>
                        <img src={Trends} alt="Trends" className='bth-Trends'/> 
                        <span>Trends</span>
                    </Button></Link>

                    <Link to="/favorites"> <Button styleBtn= {`btn-nav-${color}`}>
                        <img src={Favorites} alt="Favorites"  className='bth-Favorites'/> 
                        <span>Favorites</span>
                    </Button></Link>

                    <Link to="/settings"> <Button styleBtn={`btn-nav-${color}`}>
                        <img src={Settings} alt="Settings" className='bth-Settings' /> 
                        <span>Settings</span>
                    </Button></Link>
                            
                </div> 
                }


                
                
          

                <div className={`Header-search-${color}`}>
                    
                    <input type='text'
                            placeholder='Search...'
                            className={`Header-box-search-${color}`}>
                    </input>

                    <Link to="/search">
                        <Button styleBtn={`Header-bthSearch-${color}`} 
                                // onClick={() => openFilter()}
                                >
                            <img src={Search} alt="Search" />
                        </Button> 
                    </Link>
                    
                </div>
                
                {/* <div className={`filter-box ${isOpen ? "active" : ""}`}>
                    <div>
                        <Title>Filters</Title>
                        <Button styleBtn={`btn-Close-${color}`}
                                onClick={() => openFilter()}>
                            <img src={Close} alt="Close" />
                        </Button>
                    </div>

                    <div className={`filter-btn-${color}`}>
                        <Button styleBtn={`btn-Rating-${color}`}>Rating</Button>
                        <Button styleBtn={`btn-Year-${color}`}>Year</Button>
                    </div>

                    <Inputs inputTitle='Full or short movie name'
                            inputType='text'
                            styleInput = {`filter-input-${color}`}
                            isDisabled = {false}
                            inputPlaceholder = 'Your text'></Inputs>

                    <Inputs inputTitle='Genre'
                            inputType='text'
                            styleInput = {`filter-input-${color}`}
                            isDisabled = {false}
                            inputPlaceholder = 'Choose a genre'></Inputs>

                    <Inputs inputTitle='Country'
                            inputType='text'
                            styleInput = {`filter-input-${color}`}
                            isDisabled = {false}
                            inputPlaceholder = 'Select country'></Inputs>

                    <div className='filter-box-btn'>
                        <Button styleBtn={`btn-ClearFilter-${color}`}>Cancel</Button>
                        <Button styleBtn='btn-ShowResults'>Save</Button>
                    </div>

                </div>  */}

                <UserAuth initials={userInitials} name={userName}></UserAuth>
                
                
            
                    
            </div>
        </div> 
    </>
    )
}