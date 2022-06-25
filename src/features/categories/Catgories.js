import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import { fetchCategories, selectCategories, statusCategories } from './categoriesSlice';

import styles from './Categories.module.scss';
import CategoryItem from '../../components/CategoryItem/CategoryItem';

const Catgories = () => {
    const dispatch = useDispatch();

    const [active, setActive] = useState(null);

    const categories = useSelector(selectCategories);
    const status = useSelector(statusCategories);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCategories());
        }
    }, [status, dispatch])

    return (
        <div className={styles.categories}>
            <div className={styles.categories__inner}>
                {
                    status === 'loading' && !categories.length && (
                        <Loader />
                    )
                }
                {
                    status === 'loaded' && !!categories.length && (
                        categories.map((category) => (
                            <CategoryItem
                                key={category.id}
                                category={category}
                                setActive={setActive}
                                active={active}
                            />
                        ))
                    )
                }
            </div>
        </div>
    );
};

export default Catgories;
