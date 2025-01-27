import React, {useEffect, useState} from 'react'
import { FlatList, SafeAreaView, Alert, RefreshControl } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import TaskItem from './TaskItem'
import { getTasks, deleteTask } from '../api'

const TasksLists = () => {

    const [tasks, setTasks] = useState([])
    const [refreshing, setRefreshing] = React.useState(false);
    const isFocused = useIsFocused();
    
    const loadTasks = async () => {
        const data = await getTasks()
        // console.log('data')
        setTasks(data)
    }

    useEffect(() => {
        loadTasks()
    }, [])
    
   

    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        // wait(2000).then(() => setRefreshing(false));
        // await getUsers();
        await loadTasks();
        setRefreshing(false);
      }, []);

      const handleDelete = (id) => {
        Alert.alert("Delete Task", "Are you sure you want to delete the task", [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "Ok",
            onPress: async () => {
              await deleteTask(id);
              await loadTasks();
            //   await getUsers();
            },
          },
        ]);
      };

      useEffect(() => {
        loadTasks();
        // getUsers();
        // console.log("called");
      }, [isFocused]);

      const renderItem = ({ item }) => (
        <TaskItem task={item} handleDelete={handleDelete} />
      );
    

  return (
    <SafeAreaView style={{ flex: 1, width: "90%" }}>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={["#78e08f"]}
            progressBackgroundColor="#0a3d62"
          />
        }
      />
    </SafeAreaView>
  )
}

export default TasksLists