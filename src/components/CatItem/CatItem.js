import styles from './CatItem.module.scss';

const CatItem = ({ cat }) => {
    return (
        <article className={styles.catitem}>
            <img  className={styles.catitem__image} src={cat.url} alt={cat.id} />
        </article>
    );
};

export default CatItem;
