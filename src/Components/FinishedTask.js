import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { deleteSpecificTask } from '../RealmSchema/Database';

const FinishedTask = (props) => {
    const { data } = props;
    const date = new Date(data.dueDate.toString());

    useEffect(() => {
        //..........Delete those task which is 10 days older then today's date...........
        const tenDaysAgo = new Date(); // Create a new date object
        tenDaysAgo.setDate(tenDaysAgo.getDate() - 10); // Subtract 10 days from today
        if(date<tenDaysAgo)
        {
            deleteSpecificTask(data.uniqueId)
        }
    }, [])
    return (
        <View style={styles.taskWrapperView}>
            <View style={styles.taskWrapperLeftSubView}>
                <Text style={styles.taskNameTitleText}>{data.title}</Text>
                <Text style={styles.taskNameDueDateText}>Due Date : {date.toLocaleDateString()}</Text>
            </View>
            <View style={styles.taskWrapperRightSubView}>
                <TouchableOpacity activeOpacity={1}>
                    <Image source={require('../../assets/icon/CheckCircle.png')} style={styles.image} />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default FinishedTask

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
        justifyContent: 'flex-end',
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