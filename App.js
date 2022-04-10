import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>
          Today's tasks
        </Text>
        
        <View style={styles.items}>
          {/* tasks will be here */}
          <Task task="Buy vegetables" />
          <Task task="Complete Native tutorial" />
          <Task task="This is a random long line to test the "/>
        </View>

      </View>


    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
     },
  taskWrapper:{
       paddingTop:80,
       paddingHorizontal:20
     },
  sectionTitle:{
       fontSize:24,
       fontWeight:'bold'
     },
  items:{
    marginTop:30
  }
});
