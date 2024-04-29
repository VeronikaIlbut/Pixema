import './Card.css';
import { useContext} from 'react';
import {myContext} from '../../../providers/ThemeContext'

export default function Card({source, cardTitle,cardYear}: any ) {

    const [color] = useContext(myContext);

    return (  
        <>
        
        <div className={`Card-${color}`}>
            <img src={source} alt="Post" className="Card-post"></img>
            <h4 className={`post-title-${color}`}>{cardTitle}</h4>
        </div>
        </>
    );
}