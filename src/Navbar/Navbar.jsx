import React from 'react';

export default function Navbar(props){
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container-fluid'>
                <a className='navbar-brand' href='/'>Turbo Blog</a>
                <form className="d-flex" onSubmit={event => event.preventDefault()}>
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-success" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </div>  
        </nav>
    )
}