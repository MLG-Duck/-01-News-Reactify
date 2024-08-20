
import { formatTimeAgo} from "../../helpers/formatTimeAgo";

import styles from './styles.module.scss'


const NewsCard = ({ item }) => {
    return(
        <div className={styles.card}>
            <img className={styles.card_img} src={item.image}/>
            <div className={styles.card_text}>
                <h3 className={styles.card_text__title}>
                    {item.title}
                </h3>
                <span className={styles.card_text__shortText}>
                    {item.description}
                </span>
                <div className={styles.card_text__author}>
                    <span className={styles.card_text__author_time}>
                    {formatTimeAgo(item.published)}
                    </span>
                    <span className={styles.card_text__author_name}>
                        {item.author}
                    </span>
                </div>
            </div>
            <div className={styles.card_reactions}>
                <span className={styles.card_reactions__item}>Like</span>
                <span className={styles.card_reactions__item}>Share</span>
                <span className={styles.card_reactions__item}>Save</span>
            </div>
        </div>
    );
}

export default NewsCard;