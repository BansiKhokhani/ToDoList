import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Task from '../Components/Task'
import AddNewTaskButton from '../Components/AddNewTaskButton'


const ToDoList = () => {
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
        <Task />
        <Task />
        <AddNewTaskButton/>
      </View>
      {/* ...................FooterView..................... */}
      <View style={styles.footerView}>
        <View style={styles.footerSubView}>
          <View>
            <TouchableOpacity activeOpacity={1} >
              <Image source={require('../../assets/icon/Playlist.png')} style={styles.image} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.footerSubViewText}>ALL</Text>
          </View>

        </View>
        <View style={styles.footerSubView}>
          <View>
            <TouchableOpacity activeOpacity={1} >
              <Image source={require('../../assets/icon/Tick.png')} style={styles.image} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.footerSubViewText}>COMPLETED</Text>
          </View>

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
    flexDirection: 'row',
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
    justifyContent: 'center'
  },
  image: {
    width: 40, 
    height: 40,
    tintColor:'#9395D3'
  },
  footerSubViewText:{
    color:'#9395D3',fontWeight:'600'
  }
})