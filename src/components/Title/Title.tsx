import './Title.css';

import { useContext } from 'react';
import {myContext} from '../../providers/ThemeContext'

interface ITitle {
    children: string
}
export default function Title({children}:ITitle) {

    const [color] = useContext(myContext);

    return(
        <>
            <div className={`title-${color}`}>{children}</div>
        </>
        )
    }