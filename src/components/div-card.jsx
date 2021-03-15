/* eslint-disable global-require, import/no-dynamic-require */
import React from 'react';
import './div-card.css';

export default function DivCard(props) {
    const { itemData } = props;
    const { description, price, amount, unit, category, image } = itemData;

    return (
        <div className="col-md-4">
            <div className="card mb-4 box-shadow">
                <img
                    className="card-img-top"
                    src={require(`../images/${image}`).default}
                    alt="Card cap with graphics"
                />
                <div className="card-body">
                    <p className="card-text">{category}</p>
                    <p className="card-text description">{description}</p>
                    <p className="card-text">
                        {amount}
                        {unit}
                        -
                        {price}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            {['View', 'Edit'].map((text) => (
                                <button
                                    key={`btn-${text.toLowerCase}`}
                                    type="button"
                                    className="btn btn-sm btn-outline-secondary"
                                >
                                    {text}
                                </button>
                            ))}
                        </div>
                        <small className="text-muted">9 mins</small>
                    </div>
                </div>
            </div>
        </div>
    );
}
