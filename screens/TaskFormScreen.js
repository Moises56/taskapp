import { Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import React, {useState, useEffect} from 'react'
import Layout from '../components/layout'
import { createTask, getTask, updateTask } from '../api'

const TaskFormScreen = ({navigation, route }) => {

  const [task, setTask] = useState({
    title: '',
    description: ''
  })

  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (route.params && route.params.id) {
      setEditing(true);
      navigation.setOptions({ headerTitle: "Actualizar Factura" });
      (async () => {
        const task = await getTask(route.params.id);
        setTask({ title: task.title, description: task.description });
      })();
    }
  }, []);

  const handleSubmit = async () => {
    try {
      if (!editing) {
        await createTask(task);
      } else {
        console.log(route.params.id, task)
        await updateTask(route.params.id, {...task});
      }
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleChange = (name, value) => {
    setTask({
      ...task,
      [name]: value
    })
  }


  return (
    <Layout>
      <TextInput
        style={styles.input}
        placeholder="Factura para:"
        placeholderTextColor="#576574"
        value={task.title}
        onChangeText={(text) => handleChange("title", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Escrbir una Description"
        placeholderTextColor="#576574"
        value={task.description}
        onChangeText={(text) => handleChange("description", text)}
      />

      {!editing ? (
        <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Guardar Factura</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.buttonUpdate} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Actualizar Factura</Text>
        </TouchableOpacity>
      )}
    </Layout>
  )
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    fontSize: 16,
    marginBottom: 7,
    borderWidth: 1,
    borderColor: '#fff',
    height: 40,
    color: '#fff',
    padding: 4,
    borderRadius: 5,
    textAlign: 'center'
  },
  buttonSave: {
    backgroundColor: '#5ccedf',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    width: "100%"
  },
  buttonUpdate: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 3,
    backgroundColor: "#e58e26",
    width: "100%",
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center'
  }
})

export default TaskFormScreen