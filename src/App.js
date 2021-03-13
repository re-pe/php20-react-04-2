import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Error from './components/error';
import { Route, Switch } from 'react-router-dom'

export default function App() {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route component={Error} />
            </Switch>
        </>
    );
}