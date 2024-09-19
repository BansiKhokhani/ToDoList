import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, Button } from 'react-native'
import uuid from 'react-native-uuid';
import DatePicker from 'react-native-date-picker'
import { AddNewToDoListTask, deleteAllTask, getAllTask } from '../RealmSchema/Database';
import Tooltip from 'react-native-walkthrough-tooltip';

const AddNewTask = ({ navigation }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');
    const [day, setDay] = useState('');
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    const AddNewTaskOnDatabase = () => {
        const uid = uuid.v4();
        AddNewToDoListTask(uid, title, detail, date, false);
        navigation.goBack()
        console.log(getAllTask());
    }
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
                        <Text style={styles.headerViewText}>Add Task</Text>
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
                <View style={styles.dateWrapperView}>
                    <Text style={styles.dateText}>{date.toLocaleDateString()}</Text>
                    <TouchableOpacity activeOpacity={1} style={styles.dateButton} onPress={() => setOpen(true)}>
                        <Text style={styles.dueDateText}>Due Date</Text>
                    </TouchableOpacity>

                    <DatePicker
                        modal
                        mode='date'
                        open={open}
                        date={date}
                        minimumDate={new Date()}
                        onConfirm={(date) => {
                            setOpen(false)
                            setDate(date)
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }}
                    />
                    <Tooltip
                        isVisible={showTooltip}
                        content={<Text style={styles.tooltipText}>Please Select Due Date</Text>}
                        contentStyle={styles.tooltipContentStyle}
                        placement="bottom"
                        onClose={() => setShowTooltip(false)}
                    >
                        <TouchableOpacity onPress={() => setShowTooltip(true)} >
                            <Image source={require('../../assets/icon/information.png')} style={styles.informationImageIcon} />
                        </TouchableOpacity>
                    </Tooltip>
                </View>
                <TouchableOpacity activeOpacity={1} style={styles.addButton} onPress={AddNewTaskOnDatabase}>
                    <Text style={styles.addButtonText}>ADD</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddNewTask

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
    dateButton: {
        paddingHorizontal: '10%',
        marginHorizontal: '5%',
        paddingVertical: '4%',
        backgroundColor: '#9395D3',
        borderRadius: 15,
        justifyContent: 'center',
        alignContent: 'center'
    },
    dueDateText: {
        fontSize: 15,
        fontWeight: '500',
        textAlign: 'center',
        color: '#ffff',
    },
    dateWrapperView: { flexDirection: 'row', marginTop: '10%', alignItems: 'center',marginHorizontal: '6%', },
   dateText:{textDecorationLine:'underline',color:'#bfc0f5',fontWeight:'700',fontSize:20},
    addButton: {
        marginTop: '10%',
        marginHorizontal: '5%',
        paddingVertical: '4%',
        backgroundColor: '#9395D3',
        borderRadius: 15,

    },
    addButtonText: {
        fontSize: 25,
        fontWeight: '500',
        textAlign: 'center',
        color: '#ffff',
    },
    informationImageIcon: {
        height: 30,
        width: 30, tintColor: '#9395D3'
    },
    tooltipText: {
        fontSize: 15,
        fontWeight: '400'
    },
    tooltipContentStyle: { backgroundColor: '#9395D3', alignItems: 'center' }
})