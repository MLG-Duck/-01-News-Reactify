import { useEffect, useState } from "react";

import Header from "../../components/Header/Header";
import styles from './styles.module.scss'
import { getNews } from "../../api/apiNews";
import BreakingNews from "../../components/BreakingNews/BreakingNews";
import LiveTranslation from "../../components/LiveTranslation/LiveTranslation";
import NewsBlock from "../../components/NewsBlock/NewsBlock";

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
        <div className={styles.main}>
            <Header />
            <BreakingNews />
            <div className={styles.contentBlocks}>
                <NewsBlock item={news}/>
                <LiveTranslation />
            </div>

        </div>
    );
}

export default Main;