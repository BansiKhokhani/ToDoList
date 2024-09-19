import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput ,FlatList} from 'react-native'
import FinishedTask from '../Components/FinishedTask';
import { getAllTask,getSpecificTask } from '../RealmSchema/Database';


const CompletedTask = ({ navigation }) => {
    const [data, setData] = useState();

    useEffect(() => {
        setData(getSpecificTask(true))
    }, [])

    const renderItem = ({ item }) => (
        <FinishedTask data={item} navigation={navigation}/>
      );
    return (
        <View style={styles.mainWrapper}>
            {/* ..............header View...................... */}
            <View style={styles.headerView}>
                <View style={styles.headerSubView}>
                    <View style={styles.headerSubImageView}>
                        <TouchableOpacity activeOpacity={1} onPress={() => navigation.goBack()} >
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
                <FlatList
                    data={data}
                    renderItem={renderItem}      // Function to render each item
                    keyExtractor={(item) => item.uniqueId}  // Unique key for each item
                />
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
        backgroundColor: '#B3B7EE', paddingTop: '2%', paddingBottom: '2%'

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
    }
})