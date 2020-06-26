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
                                <img width="100%" src={data.length > 0 ? data[1].image : 'ddsd'} alt=""/>
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
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-6">
                                <img width="100%" src={data.length > 0 ? data[2].image : 'ddsd'} alt=""/>
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-6">
                                <img width="100%" src={data.length > 0 ? data[0].image : 'ddsd'} alt=""/>
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
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-6">
                                <img width="100%" src={data.length > 0 ? data[3].image : 'ddsd'} alt=""/>
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>

        </div>
    );
};

export default Home;