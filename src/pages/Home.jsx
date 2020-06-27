import React, {useState, useEffect} from 'react';

import '../assets/components/CardViewPrev.css';

import ListsCardsDetails from '../components/ListsCardsDetails.jsx';

const Home = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        getPersonajes();
    }, []);

    const getPersonajes = async() => 
    {
        let res = await fetch('https://rickandmortyapi.com/api/character/', {method: "GET"});
        let dataPersonajes = await res.json();

        setData(dataPersonajes.results);
    }

    return (
        <div className="container">

            <div className="row mb-5"></div>
            
            <ListsCardsDetails detailsCard={data} />

        </div>
    );
};

export default Home;