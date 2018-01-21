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
import { styles } from "./styles";

export class TaskDetails extends React.Component {
  static navigationOptions = {
    title: "Task Details",
    headerTintColor: "#fff",
    headerStyle: { backgroundColor: "#2f4d87" },
    headerTitleStyle: { color: "#fff" }
  };
  render() {
    const { taskDetails } = this.props.navigation.state.params;
    console.log("task Details- " + JSON.stringify(taskDetails));
    return (
      <Container>
        <Content style={styles.main}>
          <List>
            <ListItem avatar style={styles.listItem}>
              <Body style={styles.itemBody}>
                <Text style={styles.title}>{taskDetails.task}</Text>
                <View style={styles.detailsRow}>
                  <View style={{ height: 50 }}>
                    <Text style={styles.date}>
                      Due date: {taskDetails.dueDate}
                    </Text>
                  </View>
                  <View style={{ height: 50 }}>
                    <Text style={styles.name}>{taskDetails.createdBy}</Text>
                  </View>
                  <View style={{ height: 50 }}>
                    <Text style={styles.profession}>
                      {taskDetails.category}
                    </Text>
                  </View>
                </View>
              </Body>
              <Right>
                <Text note style={styles.closeText}>
                  {taskDetails.status}
                </Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
