
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './store/index';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Calender from './components/calender/calender';

import DayDetails from './components/calender/Day-Details/Day-Details';

function App() {
  return (

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

        <BrowserRouter>
          <Switch>
            <Route path={"/dayDetails/:id"} exact component={DayDetails} />
            <Route path={"/"} component={Calender} />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
