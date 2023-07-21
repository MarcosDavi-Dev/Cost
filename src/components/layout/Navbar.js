import {Link} from 'react-router-dom'

import Container from './Container'

import styles from './navbar.module.css'
import logo from '../../img/costs_logo.png'

function Navbar () {
    return (
    <nav class={styles.navbar}>
        <Container>
            <Link to="/">
                <img src={logo} alt="cost" />
            </Link>
            <ul class={styles.list}>
                <li class={styles.item}>
                     <Link to="/">Home</Link>
                </li>
                <li class={styles.item}>
                    <Link to="/contact">Contato</Link>
                </li>
                <li class={styles.item}>
                    <Link to="/company">Empresa</Link>
                </li>
            </ul>
        </Container>
    </nav>
    )
}

export default Navbar