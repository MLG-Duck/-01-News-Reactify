
import classNames from 'classnames';

import styles from './styles.module.scss'


const Pagination = ({
    totalPages,
    handleNextPage,
    handlePrevPage,
    handlePageClick,
    currentPage,
    limitPages
}) => {
    let pagesNumberArr = [];

    if (currentPage > limitPages - 4) {
        pagesNumberArr = [];
        for (let i = limitPages - 6; i < limitPages; i++) {
            pagesNumberArr.push(i);
        }
    } else if (currentPage > 6) {
        pagesNumberArr = [];
        for (let i = currentPage - 3; i <= currentPage + 3; i++) {
            pagesNumberArr.push(i);
        }
    } else {
        pagesNumberArr = [];
        for (let i = 0; i <= totalPages; i++) {
            pagesNumberArr.push(i);
        }
    }


    return(
        <div className={classNames(
            styles.pagination,
            styles.flex_container,
        )}>
            <button onClick={handlePrevPage} className={styles.pagination_item__arrow}>{'<'}</button>
            {(currentPage >= totalPages) &&
                <>
                    <button className={styles.pagination_item} onClick={() => handlePageClick(1)}>1</button> 
                    <button className={styles.pagination_item__inactive} disabled={true}>...</button>
                </>
            }
                <div className={styles.flex_container}>
                    {pagesNumberArr.length > 0 && pagesNumberArr.map((index) => {
                        
                        return <button className={classNames(
                            styles.pagination_item,
                            {[styles.pagination_item__active]: (currentPage === index + 1)}
                        )} key={index} onClick={() => handlePageClick(index + 1)} >{index + 1}</button>;
                    })}
                </div>
            {(currentPage < limitPages - 4) &&
                <>
                    <button className={styles.pagination_item__inactive} disabled={true}>...</button>
                    <button className={styles.pagination_item} onClick={() => handlePageClick(30)}>30</button> 

                </>
            }

            <button onClick={handleNextPage} className={styles.pagination_item__arrow}>{'>'}</button>
        </div>
    );
}

export default Pagination;