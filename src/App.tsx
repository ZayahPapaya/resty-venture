import React, { useState, useReducer } from 'react';
//import axios from 'axios';
import './App.scss';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Results } from './components/results/results';
import { Form } from './components/form/form';

interface AppState {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  url: string;
  body: object | undefined;
  response: object | undefined;
}

export const changeMetadata = (state: AppState, request: any) => {
    state.method = request.method;
    state.url = request.url;

  return { ...state, request, };
}

export const setBodyIfNotGet = (state: AppState, body: object) => {
  if (state.method !== 'GET') {
    state.body = body;
  }
  return state;
}

export const setData = (state: AppState, response: object) => {
  state.response = response;
  return state;
}

export const reset = (state: AppState) => {
  console.log('resetting');
  state.response = undefined;
  return state;
}

export const dispatchAction = (state: AppState, action: { action: string, body: unknown }) => {
  switch (action.action) {
    case 'meta':
      console.log('metadata')
      return changeMetadata(state, action.body as object);
    case 'body':
      return setBodyIfNotGet(state, action.body as object);
    case 'response':
      return setData(state, action.body as object);
    case 'reset':
      return reset(state);
    default:
      return state;
  }
}

const App = () => {
  //let [state, setState] = useState({});
  const [state, dispatch] = useReducer(dispatchAction, {
    method: 'GET',
    url: 'http://localhost:3000',
    body: undefined,
    response: undefined,
  })

  const updateBodyIfNotGet = (body: object) => {
    dispatch({action: 'body', body});
  }

  const updateMetadata = (request: any) => {
    dispatch({action: 'meta', body: request});
  }

  const updateData = (response: any) => {
    dispatch({action: 'response', body: response});
  }

  const reset = () => {
    dispatch({action: 'reset', body: undefined});
  }

  const callApi = async (request: any) => {
    console.log('request:', request)
    //reset();
    updateMetadata(request);
    let response;
    if(request.method === 'GET') {
      response = await fetch(request.url, { method: request.method })
    } else {
      updateBodyIfNotGet(request.body);
      response = await fetch(request.url, { method: request.method, body: request.body });
    }
    let data = await response.json();
    console.log(data) // reponse from a get is working but not displaying
    updateData(data);
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
