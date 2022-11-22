import styles from './header.module.scss'
import logo from '../images/Logo.png'

export function Header(){
    return (
        <header>
            <div className={styles.headerContent}>
                <img src={logo} alt="logo" />
            </div>
        </header>
    )
}