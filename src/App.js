import logo from './logo.svg';
import './App.css';

import Greeting,{Bye} from "./components/Gretting"
import Welcome from "./components/Welcome"
import Counter from "./components/Counter"
import Parent from './components/Parent';
import ConditionalGretting from './components/ConditionalGretting';
import ListReder from './components/ListReder';
import StyleSheet from "./components/StyleSheet"
import Form from './components/Form';
import Fragment from './components/Fragment';
import Mounting from './components/Mounting';
import PureComp from './components/PureComp';
import NormalComp from './components/NormalComp';

import React, { Component } from 'react'
import MemoComp from './components/MemoComp';
import Refs from './components/Refs';
import RefClassComp from './components/RefClassComp';
import Portals from './components/Portals';
import Hero from './components/Hero';
import ErrorHandling from './components/ErrorHandling';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import RenderpropsCounter from './components/RenderpropsCounter';
import CounterTwo from "./components/CounterTwo"
import A from "./components/A"
import {UserProvider} from "./components/userContext"
import ComponentA from './components/ComponentA';
import ComponentsC from './components/ComponentsC';
import UseContext from './components/UseContext';
import CounterWithUseReducer from './components/CounterWithUseReducer';
import CounterWithComplexUseReducer from './components/CounterTwoR';
import CounterTwoR from "./components/CounterTwoR"
import ReducerA from './components/ReducerA';
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';
import CounterPerformance from './components/CounterPerformance';
import FocusInput from './components/FocusInput';
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';
import CounterWithCustomHook1 from './components/CounterWithCustomHook1';
import CounterWithCustomHook2 from "./components/CounterWithCustomHook2"
 class App extends Component {
  
  
  render() {

    return (
      <div className="app" >
        
    <CounterWithCustomHook1/>
    <CounterWithCustomHook2/>

      </div>
    )

  }

  
}

export default App

