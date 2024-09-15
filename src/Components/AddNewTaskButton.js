import React from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'

const AddNewTaskButton = () => {
    return (
        <View style={styles.mainWrapper}>
            <TouchableOpacity activeOpacity={1}> 
                <Image source={require('../../assets/icon/AddNewButton.png')} style={styles.image}></Image>
            </TouchableOpacity>
        </View>
    )
}

export default AddNewTaskButton
const styles = StyleSheet.create({
    mainWrapper: {
        position:'absolute',
        bottom:10,
        right:10
    },
    image: {
        height: 70,
        width: 70

    }
})