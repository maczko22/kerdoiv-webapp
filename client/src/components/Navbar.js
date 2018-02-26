import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    makeNavItems() {
        const isLoggedIn = this.props.isLoggedIn();
        let navArr = [];

        if (isLoggedIn === 'false' || isLoggedIn == null) {
            let items = (
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to={'/login'}>
                            Belépés
                        </Link>
                    </li>
                </ul>
            );
            navArr.push(items);
        } else {
            let items = (
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to={'/kerdoiv-keszites'}>
                            Kérdőív Készítése
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/kerdoiv-lista'}>
                            Kérdőív Lista
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            onClick={() => this.props.logoutUser()}
                        >
                            Kilépés
                        </a>
                    </li>
                </ul>
            );
            navArr.push(items);
        }
        return navArr;
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a
                    className="navbar-brand"
                    href={this.props.isLoggedIn() ? '/#/' : '/#/kerdoiv-lista'}
                >
                    Kérdőív készítő
                </a>
                {this.makeNavItems()}
            </nav>
        );
    }
}

export default Navbar;
