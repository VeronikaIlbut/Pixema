import Pixema from '../../assets/Pixema.png';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import Inputs from '../../components/Inputs/Inputs';
import Title from '../../components/Title/Title';
import './ResetPasswordPage.css';
import { useContext } from 'react';
import {myContext} from '../../providers/ThemeContext'
import { useState } from "react"; 


export default function ResetPassword() {

    const [color] = useContext(myContext);
    const [email, setEmail] = useState("");

    return(
        
    <>
        <div className="ResetPassword">
            <div className="ResetPassword-background">
                <div className='ResetPassword-box'>
                    <Button styleBtn='ResetPassword-btnPixema ResetPassword-btnPixema_hover'>
                        <img src={Pixema} alt="pixema" />
                    
                    </Button>
                    <form className={`ResetPassword-box-form-${color}`}>
                        <Title>Reset password</Title>
                        
                        <Inputs inputTitle='Email'
                                inputType='Email'
                                styleInput ={`ResetPassword-box-form-input-${color}`}
                                isDisabled = {false}
                                inputPlaceholder = 'Your email'
                                setInputValue = {e => setEmail(e.target.value)}
                                inputValue = {email}></Inputs>

                        <Button styleBtn='btn-ResetPassword btn-ResetPassword_hover'>Reset</Button>
                    </form>
                </div>
                <Footer styleFooter='footer'></Footer>
            </div>
        </div> 
    </>
    )
}