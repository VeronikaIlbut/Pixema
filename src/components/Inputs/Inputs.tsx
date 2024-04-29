import './Inputs.css';
import { useContext } from 'react';
import {myContext} from '../../providers/ThemeContext'

interface IInputs {
            inputTitle:string;
            inputType:string;
            styleInput: string;
            isDisabled:boolean;
            inputPlaceholder:string;
            inputValue?: string; 
            setInputValue?: (e: any)=> void;
            labelId?: string
        }

export default function Inputs({inputTitle, inputType, styleInput, isDisabled, inputPlaceholder, inputValue, setInputValue, labelId }: IInputs) {

    const [color] = useContext(myContext);

    return (
        <>
            <p className={`input-name-${color}`}>{inputTitle}</p>
            <input type={inputType} 
                    className={styleInput}
                    disabled={isDisabled}
                    placeholder={inputPlaceholder} 
                    value = {inputValue} 
                    onChange={setInputValue} 
                    id={labelId}
                    />
        </>
    )
}
