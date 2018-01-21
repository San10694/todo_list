import React from "react";
import {
  Container,
  Content,
  Icon,
  Body,
  Right,
  View,
  Text,
  List,
  ListItem
} from "native-base";
import { connect } from "react-redux";
import { StyleSheet } from "react-native";
import { styles } from "./styles";
import { fetchTaskList } from "../actions/TaskActions";
import { TaskDetails } from "./TaskDetails";

class TaskList extends React.Component {
  static navigationOptions = {
    title: "Task List",
    headerStyle: { backgroundColor: "#2f4d87", padding: 10 },
    headerTitleStyle: { color: "#fff" },
    headerLeft: <Icon style={styles.backIcon} name="arrow-back" />,
    headerRight: <Icon style={styles.searchIcon} name="search" />
  };

  constructor(props) {
    super(props);
    this.props.fetchTaskList();
  }

  renderTask(navigate, taskList) {
    return taskList.map((task, index) => (
      <View key={index * 10}>
        <Text style={styles.listHeaderText}>{task.createdOn}</Text>
        <View>{this.renderTaskList(task, navigate)}</View>
      </View>
    ));
  }

  renderTaskList(task, navigate) {
    const subList = task.taskList;
    if (!subList) {
      return;
    }
    return subList.map((task, index) => (
      <ListItem
        avatar
        style={styles.listItem}
        key={index}
        onPress={() => navigate("TaskDetails", { taskDetails: task })}
      >
        <Body style={styles.itemBody}>
          <Text style={styles.title}>{task.task}</Text>
          <View style={styles.detailsRow}>
            <View style={{ height: 50 }}>
              <Text style={styles.date}> Due Date: {task.dueDate}</Text>
            </View>
            <View style={{ height: 50 }}>
              <Text style={styles.name}>{task.createdBy}</Text>
            </View>
            <View style={{ height: 50 }}>
              <Text style={styles.profession}>{task.category}</Text>
            </View>
          </View>
        </Body>
        <Right>
          <Text note style={styles.closeText}>
            {task.status}
          </Text>
        </Right>
      </ListItem>
    ));
  }

  render() {
    const { navigate } = this.props.navigation;
    if (!this.props.taskList) {
      return;
    }
    return (
      <Container>
        <Content>
          <View style={styles.container}>
            <List>{this.renderTask(navigate, this.props.taskList)}</List>
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  //console.log("redux persist state-" + JSON.stringify(state));
  return {
    taskList: state.task.taskList
  };
};

export default connect(mapStateToProps, { fetchTaskList }, null)(TaskList);
