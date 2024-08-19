import styles from './styles.module.css'
import classNames from 'classnames'


const Image = ({ imgLink, isBanner }) => {
    return(
        <div  className={classNames(
            styles.img__wraper,
            {[styles.img__wraper_banner]: isBanner}
        )}>
            {imgLink && <img className={styles.img} src={imgLink} alt='news' />}
        </div>
    );
}

export default Image;