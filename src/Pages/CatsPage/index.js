import Catgories from '../../features/categories/Catgories';
import Cats from '../../features/cats/Cats';

import styles from './CatsPage.module.scss';

const CatsPage = () => {

    return (
        <section className={styles.catspage}>
            <Catgories />
            <Cats />
        </section>
    );
};

export default CatsPage;
