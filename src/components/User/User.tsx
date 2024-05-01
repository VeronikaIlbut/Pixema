import Button from '../Button/Button';
import { useContext } from 'react';
import {myContext} from '../../providers/ThemeContext'
import './User.css';
import userSingIn from '../../assets/userSingIn.png';
import ArrowRight from '../../assets/Arrow Right.png';
import { Link } from 'react-router-dom';


export default function UserAuth({initials, name}: {initials:string, name: string}) {

    const [color] = useContext(myContext);

    return(
        
    <>

        <div className={`UserAuth-${color}`}>
                    <p className={`UserAuth-initials-${color}`}>
                        <img src={userSingIn} alt="userSingIn"/>
                        {/* {initials} */}
                    </p>
                    <p>{name}</p>
                    
                    <Link to="/SingIn">
                        <Button styleBtn={`ArrowDown-${color}`}>
                            <img src={ArrowRight} alt="ArrowRight" />
                        </Button>
                    </Link>
                </div> 
    </>
    )
}
