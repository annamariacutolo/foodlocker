import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Search from './components/Search'
import Login from './components/Login'
import Register from './components/Register'
import Footer from './components/Footer'

const App = () => {
    return ( 
        <Router>
            <div className = "App">
                <Header />
                <Route path = '/'exact component = {Home} /> 
                <Route path = '/search'exact component = {Search} /> 
                <Route path = '/login' exact component = {Login} /> 
                <Route path = '/register'exact component = {Register} /> 
            </div>
            <Footer />
        </Router>
    )
}

export default App