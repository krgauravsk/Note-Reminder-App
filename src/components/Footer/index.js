import React from 'react';

import styles from './Footer.module.scss';
const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <footer className={styles.footHead}>
            <div className={styles.footText} >
               <p> copyright@ {year} </p>
               </div>
            </footer>
        </>
    );
};
export default Footer;
