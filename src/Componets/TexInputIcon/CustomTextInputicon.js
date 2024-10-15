import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, Modal, TouchableWithoutFeedback } from 'react-native';
import { CountriesData } from '../../CountriesData'; // Assuming CountriesData contains an array of country objects
import { color } from 'react-native-elements/dist/helpers';
import { colors } from '../../Helper/colors';

const CustomTextInputIcon = ({ title,styviewmartwo, IconName, IconName2, placeholder, maxLength, onChangeText, value, secureTextEntry, placeholderTextColor, keyboardType }) => {
    const [showCountryList, setShowCountryList] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(CountriesData[0]);

    const renderCountryItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.countryItem}
                onPress={() => {
                    setSelectedCountry(item);
                    setShowCountryList(false);
                }}
            >
                <Text style={styles.textstyle}>{item.name}</Text>
                <Text style={styles.textstyle}>{item.callingCode}</Text>
                
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.textInputView}>
            <View style={styles.flexRow}>
                <Image source={IconName} style={styles.iconStyle} />
                <TouchableOpacity onPress={() => setShowCountryList(true)} style={styles.iconStyle3}>
                    <Image source={IconName2} style={styles.iconStyle2} />
                </TouchableOpacity>
                <Text style={styles.titleText}>{selectedCountry.callingCode}</Text>
                <TextInput
                    placeholder={placeholder}
                    value={value}
                    placeholderTextColor={placeholderTextColor}
                    onChangeText={onChangeText}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                    maxLength={maxLength}
                    style={styles.input}
                />
            </View>
            <Modal
                visible={showCountryList}
                animationType="slide"
                transparent={true}
            >
                <View style={styles.modalView}>
                    <TouchableWithoutFeedback onPress={() => setShowCountryList(false)}>
                        <View style={styles.modalBackground} />
                    </TouchableWithoutFeedback>
                    <FlatList
                        data={CountriesData}
                        renderItem={renderCountryItem}
                        keyExtractor={(item, index) => index.toString()}
                        style={styles.countryList}
                    />
                </View>
            </Modal>
        </View>
    );
};

export default CustomTextInputIcon;

const styles = StyleSheet.create({
    flexRow: {
        flexDirection: "row"
    },
    textInputView: {
        height: 50,
        width: '85%',
        backgroundColor: '#fff',
        borderRadius: 15,
        justifyContent: 'center',
        alignSelf: 'center',
        // marginTop: "1%",
         marginBottom:"2%",
          borderColor:"#CCCBCB",
           borderWidth:1,
           shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    iconStyle: {
        height: 25,
        width: 25,
        alignSelf: "center",
        marginLeft: '4%'
    },
    iconStyle2: {
        height: 10,
        width: 10,
    },
    input: {
        marginLeft: "2%"
    },
    iconStyle3: {
        alignSelf: "center",
        marginLeft: '4%'
    },
    titleText: {
        alignSelf: "center",
        marginLeft: '2%',
        color: '#000'
    },
    countryList: {
        marginTop: 15,
        // borderWidth: 1,
        // borderColor: '#ccc',
        borderRadius: 5,
        marginLeft: "2%"
        // maxHeight: 250,
    },
    countryItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // padding: 10,
        height: 50,
        width: "70%",
        // borderBottomWidth: 1,
        // borderBottomColor: '#ccc',
    },
    modalView: {
        flex: 1,
        justifyContent: 'center', alignSelf: "center", alignItems: "center",
        position: "absolute",
        bottom: 300,
        backgroundColor: colors.white, width: "70%"
        // justifyContent: 'flex-end',


    },
    modalBackground: {
        flex: 1,
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
        // backgroundColor:"red"
    },
    textstyle: {
        color: '#000',
        fontFamily: 'Poppins-SemiBold',
    }
});
