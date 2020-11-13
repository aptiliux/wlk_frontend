import React, { FunctionComponent, useState } from "react";
import "./App.css";
import Logo from "./assets/logo.svg";
import { Search } from "./component";
import SearchController from "./controller/search/search.controller";

const App: FunctionComponent<{}> = (props) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="App">
      <header className="App-header"></header>
      <nav className="App-nav">
        <div className="App-nav-container">
          <img
            style={{ width: "152px", height: "35px" }}
            src={Logo}
            alt="store logo"
          />
          <Search
            handleOnChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setSearchValue(event?.target?.value);
              console.log(event?.target?.value);
            }}
            value={searchValue}
          />
        </div>
      </nav>
      <main className="App-main">
        <SearchController searchValue={searchValue} />
      </main>
    </div>
  );
};

export default App;
