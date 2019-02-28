import React, { Component } from 'react';
import KoalaForm from '../KoalaForm/KoalaForm';
import KoalaTable from '../KoalaTable/KoalaTable';
import Header from '../Header/Header';


class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <KoalaForm />
        <br />
        <KoalaTable />

      </div>
    );
  }
  
}

export default App;
