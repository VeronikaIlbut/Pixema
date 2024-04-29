import Pixema from '../../assets/Pixema.png';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import Inputs from '../../components/Inputs/Inputs';
import Title from '../../components/Title/Title';
import './SingUpPage.css';
import { useContext } from 'react';
import {myContext} from '../../providers/ThemeContext'
import { useState } from "react";

// import Title from "../../components/Title/Title";
// import Inputs from '../../components/Inputs/Inputs';
// import BtnBackToHome from '../../components/BtnBackToHome/BtnBackToHome';
// import BtnBig from '../../components/BtnBig/BtnBig';
// import Button from '../../components/Button/Button';


export default function SingUp() {

    const [color] = useContext(myContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    return(
    <>
        <div className="singUp">
            <div className="singUp-background">
                <div className='singUp-box'>
                    <Button styleBtn='singUp-btnPixema singUp-btnPixema_hover'>
                        <img src={Pixema} alt="pixema" />
                    </Button>
                    <form className={`singUp-box-form-${color}`}>
                        
                        <Title>Sing Up</Title>
                        

                        <Inputs inputTitle='Name'
                                inputType='text'
                                styleInput ={`singUp-box-form-input-${color}`}
                                isDisabled = {false}
                                inputPlaceholder = 'Your email'
                                setInputValue = {e => setName(e.target.value)}
                                inputValue = {name}></Inputs>
                        
                        <Inputs inputTitle='Email'
                                inputType='Email'
                                styleInput = {`singUp-box-form-input-${color}`}
                                isDisabled = {false}
                                inputPlaceholder = 'Your email'
                                setInputValue = {e => setEmail(e.target.value)}
                                inputValue = {email}></Inputs>

                        <Inputs inputTitle='Password'
                                inputType='Password'
                                styleInput = {`singUp-box-form-input-${color}`}
                                isDisabled = {false}
                                inputPlaceholder = 'Your password'
                                setInputValue = {e => setPassword(e.target.value)}
                                inputValue = {password}></Inputs>

                        <Inputs inputTitle='Confirm  password'
                                inputType='Confirm  password'
                                styleInput = {`singUp-box-form-input-${color}`}
                                isDisabled = {false}
                                inputPlaceholder = 'Your password'
                                setInputValue = {e => setConfirmPassword(e.target.value)}
                                inputValue = {ConfirmPassword}></Inputs>

                        <Button styleBtn='btn-singUp btn-singUp_hover' >Sing Up</Button>

                        <span className={`text-${color}`}>Already have an account?
                            <Button styleBtn={`btn-mini-singIn-${color}`}>Sing In</Button>
                        </span>

                    </form>
                </div>
                <Footer styleFooter='footer'></Footer>
            </div>
        </div>
        
    </>
    )

}