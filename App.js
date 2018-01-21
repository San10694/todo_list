import React from "react";
import Expo from "expo";
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";
import { Provider, connect } from "react-redux";
import ReduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import TaskList from "./src/containers/TaskList";
import { TaskDetails } from "./src/containers/TaskDetails";
import Reducers from "./src/reducers";
import Tab from "./src/components/Tab";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }

  render() {
    const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk));
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <Provider store={store}>
        <Root>
          <SimpleApp />
        </Root>
      </Provider>
    );
  }
}

const SimpleApp = StackNavigator({
  Tab: {
    screen: Tab
  },
  Home: { screen: TaskList },
  TaskDetails: { screen: TaskDetails }
});
