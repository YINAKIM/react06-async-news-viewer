import {useCallback, useState} from "react";
import axios from "axios";
import NewsList from "./component/NewsList";
import Categories from "./component/Categories";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import NewsPage from "./pages/NewsPage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path=":/category?" element={<NewsPage/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;