import { StackNavigator, TabNavigator } from "react-navigation";
import { TaskDetails } from "./../containers/TaskDetails";
import TaskList from "../containers/TaskList";

const Tab = TabNavigator(
  {
    ALL: {
      screen: TaskList,
      navigationOptions: { tabBarLabel: "ALL" }
    },
    OVERDUE: {
      screen: TaskList,
      navigationOptions: { tabBarLabel: "OVERDUE" }
    },
    CLOSED: {
      screen: TaskList,
      navigationOptions: { tabBarLabel: "CLOSED" }
    },
    NEW: {
      screen: TaskList,
      navigationOptions: { tabBarLabel: "NEW" }
    },
    TODO: {
      screen: TaskList,
      navigationOptions: { tabBarLabel: "TODO" }
    }
  },
  {
    initialRouteName: "NEW",
    tabBarPosition: "top",
    animationEnabled: true,
    tabBarOptions: {
      labelStyle: {
        fontSize: 13,
        color: "#cfcfcf",
        marginBottom: 13
      },
      tabStyle: {
        height: 50,
        width: 90
      },
      activeTintColor: "#ffffff",
      inactiveTintColor: "#cfcfcf",
      showIcon: true,
      style: {
        backgroundColor: "#2f4d87"
      }
    }
  }
);

export default Tab;
