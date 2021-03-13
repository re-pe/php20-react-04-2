import React from 'react';

export default function Jumbotron() {
    return (
        <section className="jumbotron text-center">
            <div className="container">
                <h1 className="jumbotron-heading">Prekių sąrašas</h1>
                <p className="lead text-muted">Elekroninės maisto parduotuvės prekių sąrašas.</p>
                <p>
                    <a href="." className="btn btn-primary m-2">Išsirinkti</a>
                    <a href="." className="btn btn-secondary m-2">Pirkti</a>
                </p>
            </div>
        </section>
    );
}
