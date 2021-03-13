import React from 'react';
import DivCard from './div-card';
import data from '../data/data.json';

export default function Album() {
    return (
        <div className="album py-5 bg-light">
            <div className="container">

                <div className="row">

                    {data.map(
                        (itemData) => <DivCard key={itemData.id} itemData={itemData} />,
                    )}

                </div>
            </div>
        </div>
    );
}
