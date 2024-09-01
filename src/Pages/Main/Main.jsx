import { useEffect, useState } from "react";

import Header from "../../components/Header/Header";
import styles from './styles.module.scss'
import { getNews, getCategories } from "../../api/apiNews";
import BreakingNews from "../../components/BreakingNews/BreakingNews";
import LiveTranslation from "../../components/LiveTranslation/LiveTranslation";
import NewsBlock from "../../components/NewsBlock/NewsBlock";
import Pagination from "../../components/Pagination/Pagination";

const Main = () => {
    const [news, setNews] = useState([]);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 7;
    const pageSize = 10;
    const limitPages = 30;

    const fetchNews = async() => {
        try {
            const response = await getNews({
                page_number: currentPage,
                page_size: pageSize,
                limit: limitPages,
                category: category === 'All' ? null : category,
                });
            setNews(response.news)
        } catch (error) {
            console.log(error);
        }
    };

    const fetchCategories = async() => {
        try {
            const response = await getCategories();
            setCategories(["All", ...response.categories])
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {

        fetchNews();
    },[currentPage, category]);

    useEffect(() => {
        fetchCategories();
    },[]);

    const handleNextPage = () => {
        if (currentPage < limitPages) {
            setCurrentPage(currentPage + 1);
        }
    }

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const handleCategoryClick = (category) => {
        setCategory(category);
        console.log(category);
    }

    return(
        <div className={styles.main}>
            <Header />
            <BreakingNews />
            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                handlePageClick={handlePageClick}
                limitPages={limitPages}
            />
            <div className={styles.contentBlocks}>
                <NewsBlock item={news} categories={categories} handleCategoryClick={handleCategoryClick}/>
                <LiveTranslation />
            </div>

        </div>
    );
}

export default Main;