
import NewsCard from '../NewsCard/NewsCard';
import styles from './styles.module.scss'


const NewsCardList = ({ item }) => {
    let newsCardList = [];
    if (item.length > 0) {
        newsCardList = item.map(item =>
            <NewsCard item={item} key={item.id} />
        );
    }

    return(
        <div className={styles.cardList}>
            {item.length > 0 && newsCardList}
        </div>
    );
}

export default NewsCardList;