
import Image from "../Image/Image";
import styles from './styles.module.scss'
import { formatTimeAgo} from "../../helpers/formatTimeAgo";


const BreakingNews = ({ item }) => {
    return(
        <>
        <div className={styles.breaking}>
            <span className={styles.breaking_logo}>
                Breaking News
            </span>
            <span className={styles.breaking_title}>'item.title'</span>
        </div>
        </>
    )
}

export default BreakingNews;