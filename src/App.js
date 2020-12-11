
import { Provider } from 'react-redux';

import store from './store/index';
import './App.css';
import CalenderList from './components/calender/calender-list/calender-list';
import Footer from './components/calender/calender-footer/calender-footer';

function App() {
  return (

    <Provider store={store}>
      <div style={{ flex: 1, display: "flex", flexDirection: 'column' }}>
        <div style={{ flex: 1,maxHeight:'70%' }}>
          <CalenderList></CalenderList>
        </div>
        <div style={{ flex: 1 }}>

          <Footer></Footer>
        </div>
      </div>
    </Provider>
  );
}

export default App;
