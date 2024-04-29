interface IFooter {
    styleFooter?: string;
}

export default function Footer({styleFooter}: IFooter) {
    return(
    <>
        <footer className={styleFooter}>© All Rights Reserved</footer>
    </>
    )
}