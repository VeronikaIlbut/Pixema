import Pixema from '../../assets/Pixema.png';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import Inputs from '../../components/Inputs/Inputs';
import Title from '../../components/Title/Title';
import './SingInPage.css';

import { useContext } from 'react';
import {myContext} from '../../providers/ThemeContext'
import { useState } from "react";
import { Link } from 'react-router-dom';


export default function SingIn() {

    const [color] = useContext(myContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return(
        
    <>
        <div className="singIn">
            <div className="singIn-background">
                <div className="singIn-box">
                    <Link to="/">
                        <Button styleBtn='singIn-btnPixema singIn-btnPixema_hover'>
                            <img src={Pixema} alt="pixema" />
                        </Button>
                    </Link>
                    
                    <form className={`singIn-box-form-${color}`}>
                        <Title>Sing In</Title>
                        
                        <Inputs inputTitle='Email'
                                inputType='Email'
                                styleInput ={`singIn-box-form-input-${color}`}
                                isDisabled = {false}
                                inputPlaceholder = 'Your email'
                                setInputValue = {e => setEmail(e.target.value)}
                                inputValue = {email}></Inputs>
                                

                        <Inputs inputTitle='Password'
                                inputType='Password'
                                styleInput ={`singIn-box-form-input-${color}`}
                                isDisabled = {false}
                                inputPlaceholder = 'Your password'
                                setInputValue={(e) => setPassword(e.target.value)}
                                inputValue={password}></Inputs>
                        
                        
                        <Link to="/ResetPassword">
                            <Button styleBtn={`mini-button-${color}`}>Forgot password?</Button>
                        </Link>

                        <Button styleBtn='btn-singIn btn-singIn_hover'>Sing In</Button>
                        <span className={`text-${color}`}>Don't have an account?
                            <Link to="/SingUp">
                                <Button styleBtn={`btn-mini-singIn-${color}`}>Sing Up</Button>
                            </Link>
                        </span>

                    </form>
                </div>
                <Footer styleFooter='footer'></Footer>
            </div>
        </div>
    </>
    )
}
