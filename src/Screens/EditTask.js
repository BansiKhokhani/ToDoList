import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native'

const EditTask = () => {
    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');

    return (
        <View style={styles.mainWrapper}>
            {/* ..............header View...................... */}
            <View style={styles.headerView}>
                <View style={styles.headerSubView}>
                    <View style={styles.headerSubImageView}>
                        <TouchableOpacity activeOpacity={1}>
                            <Image source={require('../../assets/icon/BackButton.png')} style={styles.image} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.headerViewText}>Edit Task</Text>
                    </View>

                </View>
            </View>
            {/* ............................Body View...................................... */}
            <View style={styles.bodyViewWrapper}>
                <TextInput
                    style={styles.input}
                    placeholder="Title"
                    placeholderTextColor="#9395D3"
                    value={title}
                    onChangeText={setTitle}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Detail"
                    placeholderTextColor="#9395D3"
                    value={detail}
                    onChangeText={setDetail}
                />
                <View style={styles.buttonWrapper}>
                    <View style={styles.buttonSubViewWrapper}> 
                        <TouchableOpacity style={styles.button} activeOpacity={1}>
                            <Text style={styles.buttonText}>Update</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonSubViewWrapper} >
                        <TouchableOpacity style={styles.button} activeOpacity={1}>
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>
    )
}

export default EditTask

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
    buttonWrapper:{
        marginHorizontal: '5%',
        marginTop: '10%',
        flexDirection:'row',
        gap:20
    },
    buttonSubViewWrapper:{flex:1},
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
    }
})