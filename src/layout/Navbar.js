import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className={styles.container}>
            <div style={{width:'50px'}}></div>
            <NavLink to='/' exact activeStyle={{borderBottom: '4px solid #c64dff'}}>
                <div>Link1</div>
            </NavLink>
            <NavLink to='/table' exact activeStyle={{borderBottom: '4px solid #c64dff'}}>
                <div>Link2</div>
            </NavLink>
        </div>
    )
};


export default Navbar;