import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './components/assets/css/global.css';
import Layout from './components/layout/Layout';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Quiz from './components/pages/Quiz';
import Signup from './components/pages/Signup';
import Success from './components/pages/Success';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';


import { AuthProvider } from './contexts/AuthContext';
function App() {
    return (
        <div className="App">
            <Router>
                <AuthProvider>
                    <Layout>
                        <Routes>
                            <Route exact path='/' element={<Home/>}></Route>
                            <Route element={<PublicRoute />}>
                                <Route exact path='/signup' element={<Signup/>}></Route>
                                <Route exact path='/login' element={<Login/>}></Route>
                            </Route>

                            <Route element={<PrivateRoute />}>
                                <Route exact path="/quiz/:id" element={<Quiz/>} />
                                <Route exact path='/success' element={<Success />}></Route>
                            </Route>
                        </Routes> 
                    </Layout>
                </AuthProvider>
            </Router>
        </div>
    );
}

export default App;
