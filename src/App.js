import {useState} from "react";
import axios from "axios";
import NewsList from "./component/NewsList";
import Categories from "./component/Categories";

const App = () => {
  return (
      <>
        <Categories/>
        <NewsList />
      </>
  );
};

export default App;