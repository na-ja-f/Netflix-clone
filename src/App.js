import React from "react";
import Navbar from "./Components/Navbar";
import { orginals,action, comedy, horror, romance, documentaries } from "./Components/urls";
import "./styles/App.css"
import Banner from "./Components/Banner";
import RowPost from "./Components/RowPost";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RowPost url={orginals} title='Netflix orginals'/>
      <RowPost url={action} title='Action Movies' />
      <RowPost url={comedy} title='Comedy Entertainers' />
      <RowPost url={horror} title='Horror Films' />
      <RowPost url={romance} title='Romantic Must watches' />
      <RowPost url={documentaries} title='Documentaries' />
    </div>
  );
}

export default App;
