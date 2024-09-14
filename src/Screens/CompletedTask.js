import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native'

const CompletedTask = () => {
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
                        <Text style={styles.headerViewText}>Completed Task</Text>
                    </View>

                </View>
            </View>
            {/* ............................Body View...................................... */}
            <View style={styles.bodyViewWrapper}>
                
            </View>
        </View>
    )
}

export default CompletedTask

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
        flex: 0.65,
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