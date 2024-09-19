import React, { useEffect, useState , useCallback } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import Task from '../Components/Task'
import AddNewTaskButton from '../Components/AddNewTaskButton'
import { getAllTask, getSpecificTask } from '../RealmSchema/Database'
import { useFocusEffect } from '@react-navigation/native';  // Import useFocusEffect


const ToDoList = ({ navigation }) => {
  const [data, setData] = useState(getSpecificTask(false));


  const fetchData = () => {
    const taskData = getSpecificTask(false);
    setData(taskData);
    console.log(taskData);
  };

   // Fetch data when the screen comes into focus
   useFocusEffect(
    useCallback(() => {
      fetchData();
    }, []) // Empty dependency array ensures this effect runs only on focus
  );

  useEffect(()=>{
    const data=getSpecificTask(false);
    setData(data)
    console.log(data)
  },[])


  const handleToDoList=()=>{
    fetchData();
  }

  const renderItem = ({ item }) => (
    <Task navigation={navigation} data={item} updateToDoList={() => handleToDoList()} />
  );


  return (
    <View style={styles.mainWrapper}>
      {/* .............................header..................... */}
      <View style={styles.headerView}>
        <View style={styles.headerSubView}>
          <Text style={styles.headerViewText}>TODO APP</Text>
        </View>
      </View>
      {/* ..............MiddleView................... */}
      <View style={styles.middleView}>
        <FlatList
          data={data}
          renderItem={renderItem}      // Function to render each item
          keyExtractor={(item) => item.uniqueId}  // Unique key for each item
        />
        <AddNewTaskButton navigation={navigation} />
      </View>
      {/* ...................FooterView..................... */}
      <View style={styles.footerView}>

        <View style={styles.footerSubView}>
          <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('CompletedTask')} style={styles.footerSubViewButton}>
            <View>
              <Image source={require('../../assets/icon/Tick.png')} style={styles.image} />
            </View>
            <View>
              <Text style={styles.footerSubViewText}>COMPLETED</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ToDoList

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: '#9395D3'
  },
  headerView:
  {
    flex: 0.12,
  },
  middleView: {
    flex: 0.8,
    backgroundColor: '#B3B7EE', paddingTop: '2%', paddingBottom: '2%'
  },
  footerView: {
    flex: 0.08,
    backgroundColor: '#ffff',
  },
  headerSubView: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: '4%',
    paddingLeft: '4%',
  },
  headerViewText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffff',

  },
  footerSubView: {
    flex: 1,
    alignItems: 'center',
  },
  footerSubViewButton: { alignItems: 'center' },
  image: {
    width: 40,
    height: 40,
    tintColor: '#9395D3'
  },
  footerSubViewText: {
    color: '#9395D3', fontWeight: '600'
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
  },
})