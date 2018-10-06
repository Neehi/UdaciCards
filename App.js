import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppNavigator from './navigation/AppNavigator';
import rootReducer from './reducers';

const store = createStore(rootReducer);

export default class UdaciCards extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}
