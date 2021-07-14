import React from 'react';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import styles from './Header.module.scss';

const Header = () => {
    return (
        <div className={styles.header}>
            <MenuIcon className={styles.menuBtn} />
            <img className={styles.imageText} src="./images/googlekeep.png" alt="logo" height="60px" />
            <h4 className={styles.headingTitle}>Note-Reminder</h4>
            <div className={styles.searchText}>
                <SearchIcon className={styles.searchBtn} />
                <InputBase
                    placeholder="Search..."
                    className={styles.inputBtn}
                />
            </div>
        </div>
    );
};

export default Header;
