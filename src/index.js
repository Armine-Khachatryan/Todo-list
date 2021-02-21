import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './Counter/Counter';
import { Provider } from 'react-redux';
import {createStore} from 'redux';


function reducer(state={ count: 0}, action){


    switch(action.type){
        case 'INCREMENT':{
          return {
            ...state,
            count: state.count+1
          };
        }
        case 'DECREMENT':{
          return {
            ...state,
            count: state.count-1
          };
        }
        default: return state;
      }
    }
      const store=createStore(reducer);

    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <Counter />
        </Provider>
      </React.StrictMode>,
      document.getElementById('root')
    );
    
