import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import Tooltip from 'react-native-walkthrough-tooltip';
import DatePicker from 'react-native-date-picker'
import { updateSpecificTask ,getAllTask} from '../RealmSchema/Database';

const EditTask = ({route,navigation}) => {
    const { data} = route.params;
    const dt=new Date(data.dueDate);
    const [showTooltip, setShowTooltip] = useState(false);
    const [title, setTitle] = useState(data.title);
    const [detail, setDetail] = useState(data.detail);
    const [date, setDate] = useState(dt)
    const [open, setOpen] = useState(false)
    
   
    const UpdateTaskOnDatabase = () => {
        updateSpecificTask(data.uniqueId, title, detail, date, false);
        console.log(getAllTask());
        navigation.goBack();
    }
    return (
        <View style={styles.mainWrapper}>
            {/* ..............header View...................... */}
            <View style={styles.headerView}>
                <View style={styles.headerSubView}>
                    <View style={styles.headerSubImageView}>
                        <TouchableOpacity activeOpacity={1} onPress={()=>navigation.goBack()}>
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
               <View style={styles.dateWrapperView}>
                     <Text style={styles.dateText}>{date.toLocaleDateString()}</Text>
                    <TouchableOpacity activeOpacity={1} style={styles.dateButton} onPress={() => setOpen(true)}>
                        <Text style={styles.dueDateText}>Due Date</Text>
                    </TouchableOpacity>
                    {/* <Button title="Open" onPress={() => setOpen(true)} /> */}
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
                <View style={styles.buttonWrapper}>
                    <View style={styles.buttonSubViewWrapper}> 
                        <TouchableOpacity style={styles.button} activeOpacity={1} onPress={UpdateTaskOnDatabase}>
                            <Text style={styles.buttonText}>Update</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonSubViewWrapper} >
                        <TouchableOpacity style={styles.button} activeOpacity={1} onPress={()=>navigation.goBack()}>
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
    dueDateText:{
        fontSize: 15,
        fontWeight: '500',
        textAlign: 'center',
        color: '#ffff',
    },
    dateWrapperView: { flexDirection: 'row', marginTop: '10%', alignItems: 'center',marginHorizontal: '6%', },
   dateText:{textDecorationLine:'underline',color:'#bfc0f5',fontWeight:'700',fontSize:20},
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