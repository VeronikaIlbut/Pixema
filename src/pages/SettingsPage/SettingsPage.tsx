import Header from '../../components/Header/Header';
import Title from '../../components/Title/Title';
import './SettingsPage.css';

import Light from '../../assets/Light.svg';
import Dark from '../../assets/Dark.svg';
import Button from '../../components/Button/Button';
import { useContext } from 'react';
import {myContext} from '../../providers/ThemeContext'
import Inputs from '../../components/Inputs/Inputs';
import Footer from '../../components/Footer/Footer';



export default function Settings() {

    const [color, setColor] = useContext(myContext);

    function changeColor() {
        setColor(color === "light" ? "dark" : "light")
    }
    return(
        
    <>
        <Header></Header>
        <div className={`Settings-${color}`}>
            <div className='Settings-box'>
                
                <div className='Settings-box-profile'>
                    <Title>Profile</Title>
                    <div className={`box-profile-${color}`}>
                        <div className='box-profile-right'>
                            <Inputs inputTitle='Name'
                                    inputType='text'
                                    styleInput = {`box-input-${color}`}
                                    isDisabled = {false}
                                    inputPlaceholder = 'Your password'></Inputs>
                        </div>
                            
                        <div className='box-profile-left'>
                            <Inputs inputTitle='Email'
                                    inputType='Email'                                            
                                    styleInput = {`box-input-${color}`}
                                    isDisabled = {false}
                                    inputPlaceholder = 'Email'></Inputs>
                        </div>
                    </div>
                </div>

                <div className='Settings-box-password'>
                    <Title>Password</Title>
                    <div className={`box-password-${color}`}>
                        <div className='box-left'>
                            <Inputs inputTitle='Password'
                                    inputType='password'
                                    styleInput = {`box-input-${color}`}
                                    isDisabled = {false}
                                    inputPlaceholder = 'Your password'></Inputs>
                        </div>
                        
                        <div className='box-password-right'>
                            <Inputs inputTitle='New Password'
                                    inputType='password'
                                    styleInput = {`box-input-${color}`}
                                    isDisabled = {false}
                                    inputPlaceholder = 'New password'></Inputs>
                            <Inputs inputTitle='Confirm  password'
                                    inputType='password'
                                    styleInput = {`box-input-${color}`}
                                    isDisabled = {false}
                                    inputPlaceholder = 'Confirm password'></Inputs>
                        </div>
                    </div>
                </div>

                <div className='Settings-box-color'>
                    <Title>Color mode</Title>
                    <div className={`box-color-${color}`}>
                        <Button onClick={changeColor} styleBtn='btn-light '>
                            <img className='header-burger-nav-theme' src={Light} alt='light'></img>
                        </Button>
                        <Button onClick={changeColor} styleBtn='btn-dark '>
                            <img className='header-burger-nav-theme' src={Dark} alt='dark'></img>
                        </Button>
                    </div> 
                </div>

                <div className='Settings-box-btn'>
                    <Button styleBtn={`btn-Cancel-${color}`}>Cancel</Button>
                    <Button styleBtn='btn-Save'>Save</Button>
                </div>
                     
            </div>
            <Footer styleFooter={`footer-${color}`}></Footer>  
        </div> 
        
    </>
    )
}