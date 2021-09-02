import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

interface Props {

}

const Header = (props: Props) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <Link className={styles.link} to='/'>Home</Link>
                <Link className={styles.link} to='/projects'>Projects</Link>
            </div>
        </div>
    )
}

export default Header
