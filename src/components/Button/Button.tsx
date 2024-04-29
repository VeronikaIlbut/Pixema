interface IButton {
    isDisabled?: boolean,
    children?: any;
    styleBtn?: string;
    onClick?: () => void;
}

export default function Button({children, styleBtn, onClick, isDisabled}: IButton) {
    return(
    <>
        <button onClick={onClick} 
                disabled={isDisabled}
                className={styleBtn}>{children}</button>
    </>
    )
}