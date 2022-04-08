/**
 * @format
 */

 import * as React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import thunk from 'redux-thunk';
import reducer from './src/reducer';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

const store = createStore(reducer, applyMiddleware(thunk));

export default function Main() {
  return (
      <Provider store={store}>
        <SafeAreaProvider>
            <PaperProvider>
                <App />
            </PaperProvider>
        </SafeAreaProvider>
      </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
