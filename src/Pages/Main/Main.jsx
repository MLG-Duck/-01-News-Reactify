import { useEffect, useState } from "react";

import Header from "../../components/Header/Header";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import NewsListItem from "../../components/NewsListItem/NewsListItem";
import styles from './styles.module.css'
import { getNews } from "../../api/apiNews";
import NewsList from "../../components/NewsList/NewsList";

const Main = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
        const fetchNews = async() => {
            try {
                const response = await getNews();
                setNews(response.news)
            } catch (error) {
                console.log(error);
            }
        };
        fetchNews();
    },[])
    return(
        <div className={styles.main__container}>
            <Header />
            
            {news.length > 0 && <NewsBanner item={news[0]}/>}
            {news.length > 0 && <NewsList items={news.slice(1)}/>}
        </div>
    );
}

export default Main;