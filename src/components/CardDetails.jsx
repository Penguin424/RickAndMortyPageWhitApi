import React from 'react';

import '../assets/components/CardViewPrev.css';

const CardDetails = ({info}) => {
    return (
        <div className="col-md-6">
            <div className="card mb-3 boxshadowcard">
                <div className="row g-0">
                        <div className="col-md-6">
                            <img width="100%" src={info.image} alt={info.name} />
                        </div>
                    <div className="col-md-6" style={{backgroundColor: '#CEF6F5'}}>
                        <div className="card-body">
                            <h5 className="card-title"> {info.name} </h5>
                            
                            <span>
                                <span className="status__icon"></span>
                                Estatus: {info.status} 
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;