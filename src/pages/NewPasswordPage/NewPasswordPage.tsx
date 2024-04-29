import Pixema from '../../assets/Pixema.png';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import Inputs from '../../components/Inputs/Inputs';
import Title from '../../components/Title/Title';
import './NewPasswordPage.css';
import { useContext } from 'react';
import {myContext} from '../../providers/ThemeContext'
import { useState } from "react"; 



export default function NewPassword() {

    const [color] = useContext(myContext);
    const [password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    return(
        
    <>
        <div className="NewPassword">
            <div className="NewPassword-background">
                <div className='NewPassword-box'>
                    <Button styleBtn='NewPassword-btnPixema NewPassword-btnPixema_hover'>
                        <img src={Pixema} alt="pixema" />
                    
                    </Button>
                    <form className={`NewPassword-box-form-${color}`}>
                        <Title>New password</Title>
                        
                        <Inputs inputTitle='Password'
                                inputType='Password'
                                styleInput ={`NewPassword-box-form-input-${color}`}
                                isDisabled = {false}
                                inputPlaceholder = 'Your password'
                                setInputValue = {e => setPassword(e.target.value)}
                                inputValue = {password}></Inputs>

                        <Inputs inputTitle='Confirm password'
                                inputType='Password'
                                styleInput ={`NewPassword-box-form-input-${color}`}
                                isDisabled = {false}
                                inputPlaceholder = 'Confirm your password'
                                setInputValue = {e => setConfirmPassword(e.target.value)}
                                inputValue = {ConfirmPassword}></Inputs>

                        <Button styleBtn='btn-NewPassword btn-NewPassword_hover'>Set password</Button>
                    </form>
                </div>
                <Footer styleFooter='footer'></Footer>
            </div>
        </div> 
    </>
    )
}