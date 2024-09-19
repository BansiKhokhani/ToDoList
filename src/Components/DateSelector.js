import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity } from 'react-native'


const DateSelector = ({onSendData}) => {
    
    const [error, seterror] = useState('');
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const SelectDate = (day) => { 
        const daysInMonth = new Date(year, month, 0).getDate();
        if (isNaN(day)) {
            seterror('Please Select Number Value');
            return;
        }
        else if(day<0 || day>daysInMonth)
        {
            seterror('Please Select Valid DD');
            return;
        }
        else{
            seterror('')
        }
        setDay(day)
        console.log('....',day)
        onSendData({day,month,year});
    }
    const SelectMonth = (month) => { 
        const currentYear=new Date().getFullYear();
        const LastYear=currentYear+100;
        if (isNaN(month)) {
            seterror('Please Select Number Value');
            return;
        }
        else if(month<0 || month>12)
        {
            seterror('Please Select Valid MM');
            return;
        }
        else if(year<currentYear || year>LastYear)
        {
            setYear('please Select Valid Year')
            return;
        }
        else{
            seterror('')
        }
        setMonth(month)
    }

    const SelectYear=(year)=>{
        if(isNaN(year))
        {
            seterror('Please Select valid Year');
            return;
        }
        else
        {
            seterror('')
        }
        setYear(year)
    }


    return (
        <View style={styles.dateWrapperView}>
            <View style={styles.dateWrapperSubView}>
                    <TextInput
                        style={styles.input}
                        placeholder="YYYY"
                        maxLength={4}
                        placeholderTextColor="#9395D3"
                        value={year}
                        onChangeText={value=>SelectYear(value)}
                        
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="MM"
                        placeholderTextColor="#9395D3"
                        value={month}
                        onChangeText={value=>SelectMonth(value)}
                    />
                     <TextInput
                        style={styles.input}
                        placeholder="DD"
                        placeholderTextColor="#9395D3"
                        value={day}
                        onChangeText={value => SelectDate(value)}
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
            <View>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        </View>

    )
}

export default DateSelector

const styles = StyleSheet.create({
    dateWrapperView: {
        marginTop: '10%',
        marginHorizontal: '6%'
       
    },
    dateWrapperSubView:{
        flexDirection: 'row',
         alignItems: 'center', gap: 20,
    },
    errorText:{
        color:'red',
        fontWeight:'600'
    },
    input: {

        height: 40,
        borderColor: '#9395D3',
        borderBottomWidth: 1,
        paddingHorizontal: 10,
        color: '#9395D3',
        fontWeight: '400',
        fontSize: 17
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
