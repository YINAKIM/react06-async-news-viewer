import {useCallback, useState} from "react";
import axios from "axios";
import NewsList from "./component/NewsList";
import Categories from "./component/Categories";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import ReplyPage from "./pages/ReplyPage";

const App = () => {
    return (
        <BrowserRouter>
                <Route path="/:number?" component={ReplyPage} />
        </BrowserRouter>
    );
};

export default App;