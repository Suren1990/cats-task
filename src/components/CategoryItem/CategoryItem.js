import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { fetchCats, setCategoryId } from '../../features/cats/catsSlice';
import styles from './CategoryItem.module.scss';

const CategoryItem = ({ category, active, setActive }) => {
    const dispatch = useDispatch();
    
    const page = 1;

    const chooseCategory = (id) => {
        dispatch(fetchCats({ page, id })); 
    }

    const activeCatgory = (id) => {
        if (active !== id) {
            chooseCategory(id);
            setActive(id);
            dispatch(setCategoryId(id));
        }
    }

    return (
        <span
            className={cn(styles.categoryitem, { [styles.categoryitem_active]: active === category.id })}
            onClick={() => activeCatgory(category.id)}
        >{category.name}
        </span>
    );
};

export default CategoryItem;
