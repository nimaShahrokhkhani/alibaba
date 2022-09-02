import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import HomePage from "./routs/home/HomePage";
import DetailPage from "./routs/detail/DetailPage";
import Navbar from "./components/navbar/Navbar";
import {changeDarkMode} from "./utils/stateManagement/actions";
import store from "./utils/stateManagement/customStore";
import './App.css'

export default class App extends React.Component{
    state = {
        darkMode: false
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                darkMode: store.getState().darkMode
            })
        })
    }

    render() {
        let {darkMode} = this.state;
        return (
            <div>
                <Navbar darkMode={darkMode} onDarkModeClick={() => {
                    store.dispatch(changeDarkMode())
                }}/>
                <div style={{backgroundColor: darkMode ? 'hsl(209deg 24% 17%)' : '#f0f0f0', paddingTop: 15, paddingBottom: 15, minHeight: '100vh'}}>
                    <Router>
                        <Routes>
                            <Route exact path="/" element={<HomePage/>}/>
                            <Route path="/detail" element={<DetailPage/>}/>
                        </Routes>
                    </Router>
                </div>
            </div>
        );
    }
}