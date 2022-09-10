import './App.css';
import MainPage from "./components/main-page/MainPage";
import {Route, Routes} from "react-router-dom";
import React from "react";

function App() {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/ingredients"/>
                <Route path="/recipes"/>
            </Routes>
            <MainPage/>
        </React.Fragment>
    );
}

export default App;
