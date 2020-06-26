import React, {useState, useEffect} from 'react';

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
            <h1 className="text-center">Bienvenido</h1>
            <div className="row">
                <div className="col-md-6">
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-6">
                                <img width="100%" src="https://firebasestorage.googleapis.com/v0/b/portafolio-c8c78.appspot.com/o/1581209828325descarga.jpeg?alt=media&token=dfa8c537-1266-4607-a807-5d84e5b8e955" alt=""/>
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    
                </div>
                
            </div>
        </div>
    );
};

export default Home;