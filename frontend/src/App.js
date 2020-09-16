import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import DataList from './components/DataList';
import Pagination from './components/Pagination';

function App() {
  return (
    <div className="App">
      <Header />
      <DataList />
      <Pagination />
      <Footer />
    </div>
  );
}

export default App;
