import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native'

const ToDoListDetail = ({ route, navigation }) => {
    const { data } = route.params;
    const dt = new Date(data.dueDate);

    return (
        <View style={styles.mainWrapper}>
            {/* ..............header View...................... */}
            <View style={styles.headerView}>
                <View style={styles.headerSubView}>
                    <View style={styles.headerSubImageView}>
                        <TouchableOpacity activeOpacity={1} onPress={() => navigation.goBack()}>
                            <Image source={require('../../assets/icon/BackButton.png')} style={styles.image} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.headerViewText}>Task Details</Text>
                    </View>

                </View>
            </View>
            {/* ............................Body View...................................... */}
            <View style={styles.bodyViewWrapper}>
                <View>
                    <Text style={styles.titleText}>Title:</Text>
                    <Text style={styles.descriptionText}>{data.title}</Text>
                </View>
                <View style={{marginTop:'3%'}}>
                    <Text style={styles.titleText}>Description:</Text>
                    <Text style={styles.descriptionText}>{data.detail}{"."}</Text>
                </View>
                <View style={{marginTop:'3%',flexDirection:'row',alignItems:'center'}}>
                    <Text style={styles.titleText}>Due Date:</Text>
                    <Text style={styles.descriptionText}>{dt.toLocaleDateString()}</Text>
                </View>
                <View style={{marginTop:'3%',flexDirection:'row',alignItems:'center'}}>
                    <Text style={styles.titleText}>Completed Status:</Text>
                    <Text style={styles.descriptionText}>No</Text>
                </View>
            </View>
        </View>
    )
}

export default ToDoListDetail

const styles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
        backgroundColor: '#ffff'
    },
    headerView: {
        flex: 0.12,
        backgroundColor: '#9395D3',
        flexDirection: 'row'
    },
    headerSubView: {
        flex: 1 / 2,
        justifyContent: 'space-around',
        paddingBottom: '4%',
        paddingLeft: '1%',
        // backgroundColor:'yellow',
        flexDirection: 'row',
        alignItems: 'flex-end'

    },
    headerViewText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#ffff',

    },
    headerSubImageView: { paddingBottom: '2%' },
    image: {
        height: 24,
        width: 30
    },
    bodyViewWrapper: {
        flex: 0.88,
        paddingHorizontal:'5%',
        paddingTop:'5%',

    },
    input: {
        marginTop: '10%',
        marginHorizontal: '6%',
        height: 40,
        borderColor: '#9395D3',
        borderBottomWidth: 1,
        paddingHorizontal: 10,
        color: '#9395D3',
        fontWeight: '400',
        fontSize: 17
    },
    buttonWrapper: {
        marginHorizontal: '5%',
        marginTop: '10%',
        flexDirection: 'row',
        gap: 20
    },
    buttonSubViewWrapper: { flex: 1 },
    button: {
        paddingVertical: '10%',
        backgroundColor: '#9395D3',
        borderRadius: 15,

    },
    buttonText: {
        fontSize: 15,
        fontWeight: '500',
        textAlign: 'center',
        color: '#ffff',
    },
    titleText: {
        color: '#9395D3',
        fontSize:20,
        fontWeight:'bold'
    },
    descriptionText: {
        color: '#9395D3',
        fontSize:15,
        paddingLeft:'5%'
    }
})