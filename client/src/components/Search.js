import React, { useState,useEffect } from 'react'
import logo from '../assets/logo.png';
import { useSearchParams, useNavigate } from 'react-router-dom';

export const Search = () => {

    const navigate = useNavigate();
    const [text, setText] = useState('');
    const [submitted, setSubmitted] = useState('');

    function handleChange(e) {
        setText(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(text);
        navigate("/items/?search="+text)
    }
    
    return (
        <div className='wrapper_search'>
            <div className="container_search">
                <img src={logo}/>
                <form onSubmit={handleSubmit} className='search_form'>
                    <div className='search_box'>
                        <input type="text"  placeholder="Buscar productos, marcas y más…"  onChange={handleChange} className='search_input'/>
                        <button type="submit" className="search_button">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )

}
