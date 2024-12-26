import React from 'react';
import { FiSearch } from "react-icons/fi";

const MainNavbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#">Dashboard</a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item border rounded d-flex justify-content-center align-items-center">
                                <a className="nav-link active" aria-current="page" href="#">
                                <FiSearch classNameName='me-2' />
                                    Search
                                </a>
                            </li>
                            <li className="nav-item mx-1 border rounded">
                                <a className="nav-link active" aria-current="page" href="#">Account</a>
                            </li>
                            <li className="nav-item border rounded">
                                <a className="nav-link active" aria-current="page" href="#">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default MainNavbar;
