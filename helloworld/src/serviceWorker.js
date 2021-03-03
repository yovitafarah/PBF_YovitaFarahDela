import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { render } from '@testing-library/react';

const HelloComponent = ()=>{
    return HelloComponent
}

class StateFullComponent extends React.Component{
    render(){
        return <p>StateFullComponent</p>
    }
}
ReactDOM.render(<StateFullComponent />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();