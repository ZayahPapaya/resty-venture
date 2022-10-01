import React from 'react';
import './App.css';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Results } from './components/results';
import { Form } from './components/form';

class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      data: null,
      requestParams: {},
    };
  }
  callApi = (request: string) => {
    const data = {
      count: 2,
      results: [
        { name: 'fake1', url: 'http://pog.com/1' },
        { name: 'fake2', url: 'http://pog.com/2' },
      ],
    };
    this.setState({ data, request });
  }
  render() {
    //{this.state.requestParams.method}
    //{this.state.requestParams.url}
    //data={this.state.data}
    return (
      <>
        <Header />
        <div>Request Method: </div>
        <div>URL: </div>
        <Form handleApiCall={this.callApi} />
        <Results />
        <Footer />
      </>
    );
  }
}

export default App;
