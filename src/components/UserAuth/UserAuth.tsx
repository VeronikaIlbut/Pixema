import ArrowDown from '../../assets/ArrowDown.svg';
import Button from '../Button/Button';
import { useContext } from 'react';
import {myContext} from '../../providers/ThemeContext'
import './UserAuth.css';


export default function UserAuth({initials, name}: {initials:string, name: string}) {

    const [color] = useContext(myContext);

    return(
        
    <>
        <div className={`UserAuth-${color}`}>
            <p className={`UserAuth-initials-${color}`}>{initials}</p>
            <p>{name}</p>
            <Button styleBtn={`ArrowDown-${color}`}>
            <img src={ArrowDown} alt="ArrowDown" />
            </Button>
        </div> 
    </>
    )
}
