import { formatDate } from "../../helpers/formateDate";
import styles from './styles.module.scss'
import LogoIcon from './LogoIcon.png'

const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.header_logo} src={LogoIcon} />
            <div className={styles.nav}>
                <a href="/" className={styles.nav__item}>Latest news</a>
                <a href="/WeatherPage" className={styles.nav__item}>Weather</a>
                <a href="/AboutPage" className={styles.nav__item}>About us</a>
            </div>
        </header>
    )
}

export default Header;