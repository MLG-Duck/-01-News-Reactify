
import NewsCard from '../NewsCard/NewsCard';
import NewsCardList from '../NewsCardList/NewsCardList';
import styles from './styles.module.scss'


const NewsBlock = ({ item }) => {
    console.log(item)
    return(
        <div className={styles.newsBlock}>
            <div className={styles.newsBlock_categories}>
                <button className={styles.newsBlock_categories__item}>Latest news</button>
                <button className={styles.newsBlock_categories__item}>Sport</button>
                <button className={styles.newsBlock_categories__item}>Cats</button>
            </div>
            <div className={styles.newsBlock_newsCardsList}>
                <NewsCardList item={item}/>
            </div>
        </div>
    );
}

export default NewsBlock;