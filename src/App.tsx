import React, { useState } from 'react';
import axios from 'axios';
import './App.scss';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Results } from './components/results/results';
import { Form } from './components/form/form';

const App = () => {
  let [state, setState] = useState({});
  const callApi = async (request: any) => {
    console.log(`it's callback time`, request)
    let data;
    switch (request?.method) {
      case 'GET':
        data = await axios.get(request.url);
        break;
      case 'POST':
        data = await axios.post(request.url);
        break;
      case 'PUT':
        data = await axios.put(request.url);
        break;
      case 'DELETE':
        data = await axios.delete(request.url);
        break;

      default:
        console.log('No methods?');
        break;
    }
    console.log(data)
    state = { data, request };
    setState(state);
  }
  return (
    <>
      <Header />
      <div id='firstChild'>Request Method: </div>
      <div>URL: </div>
      <Form callApi={callApi} />
      <Results results={state} />
      <Footer />
    </>
  );
}

export default App;
