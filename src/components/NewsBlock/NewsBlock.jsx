
import NewsCard from '../NewsCard/NewsCard';
import NewsCardList from '../NewsCardList/NewsCardList';
import styles from './styles.module.scss'


const NewsBlock = ({ item, categories, handleCategoryClick }) => {
    return(
        <div className={styles.newsBlock}>
            <div className={styles.newsBlock_categories}>
                {categories.map((category) => <button 
                        className={styles.newsBlock_categories__item} 
                        key={category}
                        onClick={() => handleCategoryClick(category)}
                    
                    >{category}</button>
                )}
            </div>
            <div className={styles.newsBlock_newsCardsList}>
                <NewsCardList item={item}/>
            </div>
        </div>
    );
}

export default NewsBlock;