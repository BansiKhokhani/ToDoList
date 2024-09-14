import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const Task = () => {
    return (
        <View style={styles.taskWrapperView}>
            <View style={styles.taskWrapperLeftSubView}>
                <Text style={styles.taskNameTitleText}>TODO TILTE</Text>
                <Text style={styles.taskNameDueDateText}>Due Date : 12/9/2024</Text>
            </View>
            <View style={styles.taskWrapperRightSubView}>
                <TouchableOpacity activeOpacity={1}>
                    <Image source={require('../../assets/icon/Pencil.png')} style={styles.image} />
                </TouchableOpacity >
                <TouchableOpacity activeOpacity={1}>
                    <Image source={require('../../assets/icon/Trash.png')} style={styles.image} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1}>
                    <Image source={require('../../assets/icon/CheckCircle.png')} style={styles.image} />
                </TouchableOpacity>


            </View>

        </View>
    )
}

export default Task

const styles = StyleSheet.create({
    taskWrapperView: {
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
        flexDirection:'row',
        alignItems:'center'
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
    image:{ 
        width: 30, height: 30 
    },

})