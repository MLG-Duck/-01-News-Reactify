
import Image from "../Image/Image";
import styles from './styles.module.css'
import { formatTimeAgo} from "../../helpers/formatTimeAgo";


const NewsListItem = ({ item }) => {
    console.log(item)
    return(
        <div className={styles.newsListItem}>
            <Image imgLink={item.image}/>
            <div className={styles.newsListItem_text}>
                <h3 className={styles.news__title}>{item.title}</h3>
                <p className={styles.news__date}>
                    {formatTimeAgo(item.published)} by {item.author}
                </p>
            </div>  
        </div>
    )
}

export default NewsListItem;