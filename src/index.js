import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ActionCableProvider } from 'react-actioncable-provider'
import './Navbar'
import './TankChart'

registerServiceWorker();

export default function Container (props) {
    return (
      <ActionCableProvider url='ws://localhost:3000/cable'>
      </ActionCableProvider>
    )
}
