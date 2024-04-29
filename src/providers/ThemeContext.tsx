import { useState, createContext, PropsWithChildren } from "react";

type ContextType =  [ 
    string,
    (color: string) => void
];

export const myContext = createContext<ContextType>(['', () => {}]);

function ThemeContext({children}: PropsWithChildren<{}>) {

    const [color, setColor] = useState("dark");

    return ( 
        <myContext.Provider value={[color, setColor]}>
            {children}
        </myContext.Provider>
     );
}

export default ThemeContext;