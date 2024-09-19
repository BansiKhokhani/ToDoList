import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { deleteSpecificTask, getAllTask, updateSpecificTask } from '../RealmSchema/Database';

const Task = (props) => {
    const { data, navigation, updateToDoList } = props;
    const [taskCompleteStatus, setTaskCompleteStatus ] = useState(false);

    const deleteTask = () => {
        updateToDoList();
        console.log(getAllTask())
        deleteSpecificTask(data?.uniqueId);

    }
    const taskComplete = () => {
        updateToDoList();
        setTaskCompleteStatus(prevState => !prevState)
        updateSpecificTask(data.uniqueId,data.title,data.detail,data.dueDate,true)
    }
    return (
        <View style={styles.taskWrapperView}>
            <View style={styles.taskWrapperLeftSubView}>
                <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('ToDoListDetail', { data: { ...data, dueDate: data.dueDate.toISOString() } })}>
                    <Text style={styles.taskNameTitleText}>{data?.title}</Text>
                    <Text style={styles.taskNameDueDateText}>Due Date : {data?.dueDate?.toLocaleDateString()}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.taskWrapperRightSubView}>
                <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('EditTask', { data: { ...data, dueDate: data.dueDate.toISOString() } })}>
                    <Image source={require('../../assets/icon/Pencil.png')} style={styles.image} />
                </TouchableOpacity >
                <TouchableOpacity activeOpacity={1} onPress={deleteTask}>
                    <Image source={require('../../assets/icon/Trash.png')} style={styles.image} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={taskComplete}>
                    {taskCompleteStatus ?
                        (<Image source={require('../../assets/icon/CheckCircle.png')} style={styles.image} />)
                        :
                        (<Image source={require('../../assets/icon/UncheckCircle.png')} style={styles.image} />)
                    }
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Task

const styles = StyleSheet.create({
    taskWrapperView: {
        paddingVertical: '5%',
        backgroundColor: '#ffff',
        flex: 0.13,
        margin: '2%',
        borderRadius: 15,
        flexDirection: 'row'
    },
    taskWrapperLeftSubView: {
        flex: 1,
        flexDirection: 'column',
        // backgroundColor:'red',
        justifyContent: 'center',
        paddingLeft: '4%'
    },
    taskWrapperRightSubView: {
        flex: 0.5,
        // backgroundColor:'yellow', 
        justifyContent: 'space-around',
        paddingRight: '4%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    taskNameTitleText: {
        color: '#9395D3',
        fontSize: 17,
        fontWeight: 'bold',
    },
    taskNameDueDateText: {
        color: '#bfc0f5',
        fontWeight: 'bold',
    },
   
    image: {
        width: 30, height: 30,
        tintColor: '#bfc0f5'
    },
   
})