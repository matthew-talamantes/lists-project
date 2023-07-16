import styles from './header.module.css';


const Header = () => {
    return (
        <header className={styles.header}>
            <a href='/' className={styles.siteTitleLink}><h1 id="site-title" className={styles.siteTitle}>To-Do Boards</h1></a>
        </header>
    );
};

export default Header;