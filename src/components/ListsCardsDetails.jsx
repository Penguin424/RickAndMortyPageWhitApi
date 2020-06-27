import React from 'react';

import CardDetails from './CardDetails.jsx';

const ListsCardsDetails = ({detailsCard}) => {
    return (
        <div className="row">
            {
                detailsCard.length > 0 ?
                detailsCard.map((details, index) => {
                    return(
                        <CardDetails key={index} info={details} />
                    );
                })
                :
                <p></p>
            }
        </div>
    );
};

export default ListsCardsDetails;