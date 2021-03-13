import React from 'react';
import Main from './main';
import LoadScripts from './load-scripts';
import Footer from './footer';

export default function App() {
    const scripts = [
        { src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js' },
        { textContent: 'window.jQuery || document.write(\'<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>\')' },
        { src: 'https://getbootstrap.com/docs/4.0/dist/js/bootstrap.min.js' },
        { src: 'https://getbootstrap.com/docs/4.0/assets/js/vendor/holder.min.js' },
    ];

    return (
        <div id="container">
            <Main />
            <Footer />
            <LoadScripts scriptList={scripts} />
        </div>
    );
}
