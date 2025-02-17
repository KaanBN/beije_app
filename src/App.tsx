import React from 'react';
import store from './store';
import {AppNavigator} from './navigation';
import {Provider} from 'react-redux';

function App(): React.JSX.Element {
  return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
  );
}

export default App;
