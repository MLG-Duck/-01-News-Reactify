import { formatDate } from "../../helpers/formateDate";
import styles from './styles.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>News Reactify</h1>
            <p>{formatDate(new Date())}</p>
        </header>
    )
}

export default Header;