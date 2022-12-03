import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './components/assets/css/global.css';
import Layout from './components/layout/Layout';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Quiz from './components/pages/Quiz';
import Signup from './components/pages/Signup';
import Success from './components/pages/Success';
import PrivateRoute from './components/PrivateRoute';
// import PublicRoute from './components/PublicRoute';
// import React, { Fragment } from 'react';
import { AuthProvider } from './contexts/AuthContext';
// import React, {Fragment} from 'react';
function App() {
    return (
        <div className="App">
            <Router>
                <AuthProvider>
                    {/* <Fragment> */}
                        <Layout>
                            <Routes>
                                <Route exact path='/' element={<Home/>}></Route>
                                <Route exact path='/signup' element={<Signup/>}></Route>
                                <Route exact path='/login' element={<Login/>}></Route>
                               
                                <Route exact path="/quiz" element={<PrivateRoute>
                                    <Route  element={<Quiz/>} />
                                    </PrivateRoute>}></Route>
                                
                                
                                {/* <Route exact path="/quiz" element={<Quiz/>} /> */}
                                <Route exact path='/success' element={<Success />}></Route>
                            </Routes>
                        </Layout>
                    {/* </Fragment> */}
                </AuthProvider>
            </Router>
        </div>
    );
}

export default App;
