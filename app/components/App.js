import React from 'react';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div id="topContainer">
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
