import { NavLink } from 'react-router-dom';
import { PATHS } from '../../Constants';
import styles from './Header.module.scss';

const Header = () => {

    return (
        <header className={styles.header}>
            <nav className={styles.header__nav}>
                {
                    Object.keys(PATHS).map((path, index) => (
                        <NavLink to={PATHS[path]} className={styles.header__link} key={index}>{path}</NavLink>
                    ))
                }
            </nav>
        </header>
    );
};

export default Header;
