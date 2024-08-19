
import Image from "../Image/Image";
import styles from './styles.module.css'
import { formatTimeAgo} from "../../helpers/formatTimeAgo";


const NewsBanner = ({ item }) => {
    return(
        <div className="newsBanner">
            <Image isBanner={true} imgLink={item.image}/>
            <h3 className={styles.news__title}>{item.title}</h3>
            <p className={styles.news__date}>
                {formatTimeAgo(item.published)} by {item.author}
            </p>
        </div>
    )
}

export default NewsBanner;