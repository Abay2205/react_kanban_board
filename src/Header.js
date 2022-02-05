import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = () => {

    const [search, setSearch] = useState('')

    return (<nav className="navbar navbar-expand-lg navbar-light bg-primary bg-light ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Tasks</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="#">Previous project</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">(Project name)</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Next project</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Users
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">User1</a></li>
                                <li><a className="dropdown-item" href="#">User2</a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><a className="dropdown-item" href="#">
                                    <button type="button" className="btn btn-danger">Logout</button>
                                </a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search text"
                               aria-label="Search" value={search} onChange={(event)=>setSearch(event.target.value)}/>
                        <button className="btn btn-outline-success" type="submit" onClick={()=>setSearch('')}>Search</button>
                    </form>
                </div>
            </div>
        </nav>);
};

export default Header;