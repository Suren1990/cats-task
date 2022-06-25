import styles from './Cats.module.scss';
import { statusCats } from './catsSlice';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoryId, fetchCats, selectCats } from '../../features/cats/catsSlice';
import CatItem from '../../components/CatItem/CatItem';
import Loader from '../../components/Loader/Loader';

const Cats = () => {
    const status = useSelector(statusCats);

    const dispatch = useDispatch();

    const id = useSelector(categoryId);
    const cats = useSelector(selectCats);

    const [page, setPage] = useState(1);

    const loadMore = () => {
        setPage(page + 1);
        dispatch(fetchCats({ page: page + 1, id })); 
    }

    return (
        <div className={styles.cats}>
            <section className={styles.catimage}>
                {
                    !!cats.length ? (
                        <>
                            <div className={styles.catimage__items}>
                                {
                                    cats.map((cat) => (
                                        <CatItem cat={cat} key={cat.id} />
                                    ))
                                }
                            </div>
                            <button
                                className={styles.catimage__load_more}
                                onClick={loadMore}
                            >Load More Cats</button>
                        </>
                    ) : (
                        <h2>Choose Category</h2>
                    )

                }

            </section>
            {
                status === 'loading' && <Loader />
            }
        </div>
    );
};

export default Cats;
