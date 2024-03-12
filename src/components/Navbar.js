import React from 'react'

export default function Navbar(props) {
    return (
        <>
            <div>
                <nav class="navbar navbar-expand-lg bg-success">
                    <div class="container-fluid">
                        <a class="navbar-brand text-white" href="#">{props.logo}</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#">Toutrials</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#">Exercise</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#">Services</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#">Certificates</a>
                                </li>
                                
                            </ul>
                            <form class="d-flex mx-auto " role="search">
                                <input class="form-control me-2 rounded-pill" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success rounded-pill text-white border-white" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
