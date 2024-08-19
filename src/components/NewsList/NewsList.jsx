
import styles from './styles.module.css'
import NewsListItem from "../NewsListItem/NewsListItem";


const NewsList = ({ items }) => {
    console.log(items)
    let newsList = [];
    if (items.length > 0) {
        newsList = items.map(item =>
            <NewsListItem item={item} key={item.id} />
        );
    }

    return(
        <div className={styles.newsList}>
            {items.length > 0 && newsList}
        </div>
    )
}

export default NewsList;