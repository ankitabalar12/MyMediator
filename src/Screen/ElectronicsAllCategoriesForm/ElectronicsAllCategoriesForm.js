import { Alert, Image, PermissionsAndroid, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderUserName from '../../Componets/HeaderUserName/HeaderUserName'
import { styles } from './styles'
import { string } from '../../Helper/string'
import CustomTextInput from '../../Componets/TextInput/CustomTextInput'
import ButtonComponets from '../../Componets/Button/ButtonComponets'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { icons } from '../../Helper/icons'
import TabbottomviewComponets from '../../Componets/TabViewComponets/TabbottomviewComponets'
import AsyncStorage from '@react-native-community/async-storage'
import { addelecApi, selectedUploadimg, selectedUploadimgelec, selectedUploadimgelect, updateelectronicsapi } from '../../../APICall'
import { ActivityIndicator } from 'react-native'

const ElectronicsAllCategoriesForm = ({ navigation, route }) => {
    const [errors, setErrors] = useState({});
    const [Modelname, setModalName] = useState();
    const [Modelyear, setModalYear] = useState();
    const [amount, setAmount] = useState();
    const [NumberofOwner, setNumberofOwner] = useState();
    const [ProcessorBrand, setProcessorBrand] = useState();
    const [ProcessorTypes, setProcessorTypes] = useState();
    const [ProcessorSpeed, setProcessorSpeed] = useState();
    const [ProcessorCounts, setProcessorCounts] = useState();
    const [location, setLocation] = useState();
    const [RamSize, setRamSize] = useState();
    const [MaximumMemorySupported, setMaximumMemorySupported] = useState();
    const [HardDriveSize, setHardDriveSize] = useState();
    const [HardDiskDescription, setHardDiskDescription] = useState();
    const [AdTitle, setAdTitle] = useState();
    const [HardDrive, setHardDrive] = useState();
    const [HardDiskRotationalSpeed, setHardDiskRotationalSpeed] = useState();
    const [Description, setDescription] = useState('');
    const [imageUri, setImageUri] = useState([]);
    const [videoUri, setVideoUri] = useState(null);
    const [Id, setID] = useState('')
    const [elect_ID, setElect_ID] = useState('');
    const [loading, setLoading] = useState(false);
    const [updatedImages, setUpdatedImages] = useState([]);
   const elect_id = route?.params?.elect_id;
    // console.log('elect_id------------', elect_id)
    useEffect(() => {
        const loginallData = async () => {
            const userdata = await AsyncStorage.getItem('logindata');
            const finaluserdata = JSON.parse(userdata);
            setID(finaluserdata.id);
            setModalName(elect_id.model_name)
            setElect_ID(elect_id.id);
            setModalYear(elect_id.model_year)
            setAmount(elect_id.amount)
            setLocation(elect_id.location)
            // setNumberofOwner(elect_id.no_of_owner)
            if (elect_id && elect_id.no_of_owner) {
                setNumberofOwner(elect_id.no_of_owner.toString());
              }
            console.log('elect_id.no_of_owner --------------', elect_id.no_of_owner)
            setProcessorBrand(elect_id.processor_brand)
            setProcessorTypes(elect_id.processor_type)
            setProcessorSpeed(elect_id.processor_speed)
            setProcessorCounts(elect_id.processor_count)
            setRamSize(elect_id.ram_size)
            setMaximumMemorySupported(elect_id.maxumum_memory_support)
            setHardDriveSize(elect_id.hdd_size)
            setHardDiskDescription(elect_id.hdd_description)
            setHardDiskRotationalSpeed(elect_id.hdd_rotation_speed)
            setAdTitle(elect_id.ad_title)
            setHardDrive(elect_id.hdd)
            setDescription(elect_id.description)
            // console.log('elect_id.ad_title --------------', elect_id.ad_title)
        }
        loginallData()
    }, [])

    const handleAddElect = async () => {

        const newErrors = {};
        if (!Modelname) {
            newErrors.Modelname = 'Please enter Modelname';
        }
        if (!Modelyear) {
            newErrors.Modelyear = 'Please enter Modelyear';
        }
        if (!amount) {
            newErrors.amount = 'Please enter amount';
        }
        if (!NumberofOwner) {
            newErrors.NumberofOwner = 'Please enter Number of Owner';
        }
        if (!ProcessorBrand) {
            newErrors.ProcessorBrand = 'Please enter Processor Brand';
        }
        if (!ProcessorTypes) {
            newErrors.ProcessorTypes = 'Please enter Processor Types';
        }
        if (!ProcessorSpeed) {
            newErrors.ProcessorSpeed = 'Please enter Processor Speed';
        }
        if (!ProcessorCounts) {
            newErrors.ProcessorCounts = 'Please enter Processor Counts';
        }
        if (!location) {
            newErrors.location = 'Please enter location';
        }
        if (!RamSize) {
            newErrors.RamSize = 'Please enter Ram Size';
        }
        if (!MaximumMemorySupported) {
            newErrors.MaximumMemorySupported = 'Please enter Maximum Memory Supported';
        }
        if (!HardDriveSize) {
            newErrors.HardDriveSize = 'Please enter Hard DriveSize';
        }
        if (!HardDiskDescription) {
            newErrors.HardDiskDescription = 'Please enter Hard Disk Description';
        }

        if (!AdTitle) {
            newErrors.AdTitle = 'Please enter AdTitle';
        }
        if (!HardDrive) {
            newErrors.HardDrive = 'Please enter Hard Drive';
        }
        if (!HardDiskRotationalSpeed) {
            newErrors.HardDiskRotationalSpeed = 'Please enter Hard Disk Rotational Speed';
        }
        if (!Description) {
            newErrors.Description = 'Please enter Description';
        }

        if (!imageUri) {
            newErrors.imageUri = 'Please enter image';
        }

        if (!videoUri) {
            newErrors.videoUri = 'Please enter video';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);

        }
        setErrors({});
        // alert('111')
        setLoading(true);
        // alert('111')
        try {
            const data = {
                user_id: Id,
                model_name: Modelname,
                model_year: Modelyear,
                amount: amount,
                location: location,
                no_of_owner: NumberofOwner,
                processor_brand: ProcessorBrand,
                processor_type: ProcessorTypes,
                processor_speed: ProcessorSpeed,
                processor_count: ProcessorCounts,
                ram_size: RamSize,
                maxumum_memory_support: MaximumMemorySupported,
                hdd_size: HardDriveSize,
                hdd_description: HardDiskDescription,
                hdd: HardDrive,
                hdd_rotation_speed: HardDiskRotationalSpeed,
                ad_title: AdTitle,
                description: Description,
                image: imageUri.join(','),
                video: videoUri,
            };
            console.log('data -------------', data)
            const res = await addelecApi(global.url + 'addelectronics ', data);
            console.log('res ><>><', res)
            if (res && res.success === true) {
                Alert.alert('Success', 'Data uploaded successfully.', [
                    {
                        text: 'OK',
                        onPress: () => {

                            navigation.navigate('HomeScreen');
                        },
                    },
                ]);
            } else {
                Alert.alert('Error', 'Failed to upload data. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            Alert.alert('Error', 'An unexpected error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    }
    const selectImage = () => {
        Alert.alert('Alert', 'Choose an option', [
            {
                text: 'Back',
                onPress: () => { },
            },
            {
                text: 'Camera',
                onPress: () => openCamera(),
            },
            {
                text: 'Library',
                onPress: () => openGallery(),
            },
        ]);
    };

    const openGallery = async () => {
        const options = {
            mediaType: 'photo',
            includeBase64: true,
            base64: true,
            maxHeight: 500,
            maxWidth: 500,
            selectionLimit: 50 - (imageUri?.length || 0)
        };

        try {
            const res = await launchImageLibrary(options);
            if (!res.didCancel && res.assets) {
                let images = [];
                for (let i = 0; i < res.assets.length; i++) {
                    const asset = res.assets[i];
                    if (asset.fileSize > 3 * 1024 * 1024) {
                        Alert.alert('Error', 'Image size should be within 3MB.');
                        continue;
                    }
                    const data = {
                        base64: 'data:image/jpeg;base64,' + asset.base64,
                    };
                    const userpic = await selectedUploadimgelect(global.url + 'uploadimage', data);
                    if (userpic.data) {
                        images.push(userpic.data);
                    }
                }
                console.log('selectedImages---', images);
                setImageUri(prevImages => [...prevImages, ...images]);
                setUpdatedImages(images);
            }
        } catch (error) {
            console.error('Error selecting images from library:', error);
            Alert.alert('Error', 'An unexpected error occurred while selecting images.');
        }
    };

    const openCamera = async () => {
        if (Platform.OS === 'android') {
            const hasPermission = await requestCameraPermission();
            if (!hasPermission) {
                Alert.alert("Permission Denied", "Camera permission is required to take photos.");
                return;
            }
        }

        const options = {
            mediaType: 'photo',
            includeBase64: true,
            base64: true,
            maxHeight: 500,
            maxWidth: 500,

        };

        try {
            const res = await launchCamera(options);
            if (!res.didCancel && res.assets) {
                let images = [];
                for (let i = 0; i < res.assets.length; i++) {
                    const asset = res.assets[i];
                    if (asset.fileSize > 3 * 1024 * 1024) {
                        Alert.alert('Error', 'Image size should be within 3MB.');
                        continue; // Skip to the next iteration
                    }
                    const data = {
                        base64: 'data:image/jpeg;base64,' + asset.base64,
                    };
                    const userpic = await selectedUploadimgelect(`${global.url}uploadimage`, data);
                    if (userpic.data) {
                        images.push(userpic.data);
                    }
                }
                console.log('selectedImages---', images);
                setImageUri(prevImages => [...prevImages, ...images]);
                setUpdatedImages(images);
            }
        } catch (error) {
            console.error('Error capturing image from camera:', error);
            Alert.alert('Error', 'An unexpected error occurred while capturing image from camera.');
        }
    };

    const selectVideo = () => {
        Alert.alert('Alert', 'Choose an option', [
            {
                text: 'Back',
                onPress: () => { },
            },
            {
                text: 'Video',
                onPress: () => openCameraVideo(),
            },
            {
                text: 'Library',
                onPress: () => openGalleryVideo(),
            },
        ]);
    };
    const requestCameraPermissionvideo = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: "Camera Permission",
                    message: "App needs access to your camera to take photos.",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK",
                }
            );
            return granted === PermissionsAndroid.RESULTS.GRANTED;
        } catch (err) {
            console.warn('Permission request error:', err);
            return false;
        }
    };


    const openCameraVideo = async () => {
        if (Platform.OS === 'android') {
            const hasPermission = await requestCameraPermissionvideo();
            if (!hasPermission) {
                Alert.alert("Permission Denied", "Camera permission is required to take videos.");
                return;
            }
        }

        let options = {
            mediaType: 'video',
            cameraType: 'back',
        };

        launchCamera(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled camera picker');
            } else if (response.errorCode) {
                console.log('Camera Error: ', response.errorMessage);
            } else if (response.assets && response.assets.length > 0) {
                setVideoUri(response.assets[0].uri);
            }
        });
    };

    const openGalleryVideo = () => {
        let options = {
            mediaType: 'video',
        };
        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('Gallery Error: ', response.errorMessage);
            } else {
                setVideoUri(response.assets[0].uri);
            }
        });
    };

    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: "Camera Permission",
                    message: "App needs access to your camera to take videos.",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK",
                }
            );
            return granted === PermissionsAndroid.RESULTS.GRANTED;
        } catch (err) {
            console.warn('Permission request error:', err);
            return false;
        }
    };


    const updateelectronicsdata = async () => {
        setLoading(true);
        try {
            const data = {
                id: elect_ID,
                model_name: Modelname,
                model_year: Modelyear,
                amount: amount,
                location: location,
                no_of_owner: NumberofOwner,
                processor_brand: ProcessorBrand,
                processor_type: ProcessorTypes,
                processor_speed: ProcessorSpeed,
                processor_count: ProcessorCounts,
                ram_size: RamSize,
                maxumum_memory_support: MaximumMemorySupported,
                hdd_size: HardDriveSize,
                hdd_description: HardDiskDescription,
                hdd: HardDrive,
                hdd_rotation_speed: HardDiskRotationalSpeed,
                ad_title: AdTitle,
                description: Description,
                image: updatedImages.toString(),
                video: videoUri || null,
            };
            console.log('data <>', data);
            console.log('global.url <>', global.url);
            const res = await updateelectronicsapi(global.url + 'updateelectronics', data);
            console.log('res <d>', res);
            if (res.success) {
                if (res && res.success === true) {
                    Alert.alert('Success', 'Data uploaded successfully.', [
                        {
                            text: 'OK',
                            onPress: () => {

                                navigation.navigate('ProfileMyPropertyDetails');
                            },
                        },
                    ]);
                }
            } else {
                Alert.alert('Failed to update electronics data: ' + (res.message || 'Unknown error'));
            }

        } catch (error) {
            console.error('Error updating electronics data:', error);
            Alert.alert('Error updating electronics data: ' + error.message);
        } finally {
            setLoading(false);
        }
    };


    return (
        <View style={styles.container}>
            <ScrollView>
                <HeaderUserName onPress={() => { navigation.navigate('Notification') }} />
                <Text style={styles.make}>{string.UploadElectronics}</Text>
                <Text style={styles.inuttextstyletext}>{string.Modelname}</Text>
                <CustomTextInput
                    placeholder="Enter Modal name"
                    placeholderTextColor="#C2C2C2"
                    value={Modelname}

                    onChangeText={(Modelname) => setModalName(Modelname)}
                    styleview={styles.styleview}
                />
                {errors.Modelname && <Text style={styles.error}>{errors.Modelname}</Text>}
                <Text style={styles.inuttextstyletext}>{string.modelyear}</Text>
                <CustomTextInput
                    placeholder="Enter Model year"
                    placeholderTextColor="#C2C2C2"
                    value={Modelyear}

                    onChangeText={(Modelyear) => setModalYear(Modelyear)}
                    styleview={styles.styleview}
                />
                {errors.Modelyear && <Text style={styles.error}>{errors.Modelyear}</Text>}
                <Text style={styles.inuttextstyletext}>{string.amount}</Text>
                <CustomTextInput
                    placeholder="Enter Amount"
                    placeholderTextColor="#C2C2C2"
                    value={amount}

                    onChangeText={(amount) => setAmount(amount)}
                    styleview={styles.styleview}
                />
                {errors.amount && <Text style={styles.error}>{errors.amount}</Text>}
                <Text style={styles.inuttextstyletext}>{string.location}</Text>
                <CustomTextInput
                    placeholder="Enter Amount"
                    placeholderTextColor="#C2C2C2"
                    value={location}

                    onChangeText={(location) => setLocation(location)}
                    styleview={styles.styleview}
                />
                {errors.location && <Text style={styles.error}>{errors.location}</Text>}
                <Text style={styles.inuttextstyletext}>{string.NumberofOwner}</Text>
                <CustomTextInput
                    placeholder="Enter Number of Owner"
                    placeholderTextColor="#C2C2C2"
                    value={NumberofOwner}
                    onChangeText={(NumberofOwner) => setNumberofOwner(NumberofOwner)}
                    styleview={styles.styleview}
                />
                {errors.NumberofOwner && <Text style={styles.error}>{errors.NumberofOwner}</Text>}
                <Text style={styles.inuttextstyletext}>{string.ProcessorBrand}</Text>
                <CustomTextInput
                    placeholder="Enter Process or Brand"
                    placeholderTextColor="#C2C2C2"
                    value={ProcessorBrand}

                    onChangeText={(ProcessorBrand) => setProcessorBrand(ProcessorBrand)}
                    styleview={styles.styleview}
                />
                {errors.ProcessorBrand && <Text style={styles.error}>{errors.ProcessorBrand}</Text>}
                <Text style={styles.inuttextstyletext}>{string.ProcessorTypes}</Text>
                <CustomTextInput
                    placeholder="Enter Processor Types"
                    placeholderTextColor="#C2C2C2"
                    value={ProcessorTypes}

                    onChangeText={(ProcessorTypes) => setProcessorTypes(ProcessorTypes)}
                    styleview={styles.styleview}
                />
                {errors.ProcessorTypes && <Text style={styles.error}>{errors.ProcessorTypes}</Text>}
                <Text style={styles.inuttextstyletext}>{string.ProcessorSpeed}</Text>
                <CustomTextInput
                    placeholder="Enter Processor Speed"
                    placeholderTextColor="#C2C2C2"
                    value={ProcessorSpeed}

                    onChangeText={(ProcessorSpeed) => setProcessorSpeed(ProcessorSpeed)}
                    styleview={styles.styleview}
                />
                {errors.ProcessorSpeed && <Text style={styles.error}>{errors.ProcessorSpeed}</Text>}
                <Text style={styles.inuttextstyletext}>{string.ProcessorCounts}</Text>
                <CustomTextInput
                    placeholder="Enter Processor Counts"
                    placeholderTextColor="#C2C2C2"
                    value={ProcessorCounts}

                    onChangeText={(ProcessorCounts) => setProcessorCounts(ProcessorCounts)}
                    styleview={styles.styleview}
                />
                {errors.ProcessorCounts && <Text style={styles.error}>{errors.ProcessorCounts}</Text>}
                <Text style={styles.inuttextstyletext}>{string.RamSize}</Text>
                <CustomTextInput
                    placeholder="Enter  Ram Size"
                    placeholderTextColor="#C2C2C2"
                    value={RamSize}

                    onChangeText={(RamSize) => setRamSize(RamSize)}
                    styleview={styles.styleview}
                />
                {errors.RamSize && <Text style={styles.error}>{errors.RamSize}</Text>}
                <Text style={styles.inuttextstyletext}>{string.MaximumMemorySupported}</Text>
                <CustomTextInput
                    placeholder="Enter Maximum Memory Supported"
                    placeholderTextColor="#C2C2C2"
                    value={MaximumMemorySupported}

                    onChangeText={(MaximumMemorySupported) => setMaximumMemorySupported(MaximumMemorySupported)}
                    styleview={styles.styleview}
                />
                {errors.RamSize && <Text style={styles.error}>{errors.MaximumMemorySupported}</Text>}
                <Text style={styles.inuttextstyletext}>{string.HardDriveSize}</Text>
                <CustomTextInput
                    placeholder="Enter Hard DriveSize"
                    placeholderTextColor="#C2C2C2"
                    value={HardDriveSize}

                    onChangeText={(HardDriveSize) => setHardDriveSize(HardDriveSize)}
                    styleview={styles.styleview}
                />
                {errors.HardDriveSize && <Text style={styles.error}>{errors.HardDriveSize}</Text>}
                <Text style={styles.inuttextstyletext}>{string.HardDiskDescription}</Text>
                <CustomTextInput
                    placeholder="Enter Hard Disk Description"
                    placeholderTextColor="#C2C2C2"
                    value={HardDiskDescription}

                    onChangeText={(HardDiskDescription) => setHardDiskDescription(HardDiskDescription)}
                    styleview={styles.styleview}
                />
                {errors.HardDiskDescription && <Text style={styles.error}>{errors.HardDiskDescription}</Text>}
                <Text style={styles.inuttextstyletext}>{string.HardDrive}</Text>
                <CustomTextInput
                    placeholder="Enter Hard Drive"
                    placeholderTextColor="#C2C2C2"
                    value={HardDrive}

                    onChangeText={(HardDrive) => setHardDrive(HardDrive)}
                    styleview={styles.styleview}
                />
                {errors.HardDrive && <Text style={styles.error}>{errors.HardDrive}</Text>}
                <Text style={styles.inuttextstyletext}>{string.HardDiskRotationalSpeed}</Text>
                <CustomTextInput
                    placeholder="Enter Hard Disk Rotational Speed"
                    placeholderTextColor="#C2C2C2"
                    value={HardDiskRotationalSpeed}

                    onChangeText={(HardDiskRotationalSpeed) => setHardDiskRotationalSpeed(HardDiskRotationalSpeed)}
                    styleview={styles.styleview}
                />
                {errors.HardDiskRotationalSpeed && <Text style={styles.error}>{errors.HardDiskRotationalSpeed}</Text>}
                <Text style={styles.inuttextstyletext}>{string.AdTitle}</Text>
                <CustomTextInput
                    placeholder="Enter  Ad Title"
                    placeholderTextColor="#C2C2C2"
                    value={AdTitle}

                    onChangeText={(AdTitle) => setAdTitle(AdTitle)}
                    styleview={styles.styleview}
                />
                {errors.AdTitle && <Text style={styles.error}>{errors.AdTitle}</Text>}
                <Text style={styles.inuttextstyletext}>{string.Description}</Text>
                <View style={styles.styleviewdescrip}>
                    <TextInput
                        placeholder="Enter Description"
                        placeholderTextColor="#C2C2C2"
                        value={Description}
                        onChangeText={(Description) => setDescription(Description)}
                        style={styles.sttyinput}
                        multiline={true}
                    />
                </View>
                {errors.Description && <Text style={styles.error}>{errors.Description}</Text>}
                <Text style={styles.inuttextstyletext}>{string.ImageUpload}</Text>
                <View style={styles.styleviewdescrip2}>
                    <View style={styles.flexrow3}>
                        <TouchableOpacity onPress={selectImage}>
                            <Image source={icons.propauplodimg} style={styles.propgallary} />
                        </TouchableOpacity >
                        <TouchableOpacity onPress={selectImage}
                        >
                            <Image source={icons.propgallary} style={styles.propgallary2} />
                        </TouchableOpacity>
                    </View>
                </View>
                {errors.imageUri && <Text style={styles.error}>{errors.imageUri}</Text>}
                <Text style={styles.inuttextstyletext}>{string.VideoUpload}</Text>
                <View style={styles.styleviewdescrip2}>
                    <View style={styles.flexrow3}>
                        <TouchableOpacity onPress={selectVideo}>
                            <Image source={icons.propauplodimg} style={styles.propgallary} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={selectVideo}>
                            <Image source={icons.propgallary} style={styles.propgallary2} />
                        </TouchableOpacity>

                    </View>
                </View>
                {errors.videoUri && <Text style={styles.error}>{errors.videoUri}</Text>}
                {loading && <ActivityIndicator size="large" color="#02487C" />}
                <View>
                    {!elect_id && (
                        <ButtonComponets
                            stylebutton={styles.stylebutton}
                            title={string.Submit}
                            onPress={() => {
                                handleAddElect();

                            }}
                        />
                    )}

                    {elect_id && (
                        <ButtonComponets
                            stylebutton={styles.stylebutton}
                            title={'save'}
                            onPress={() => {
                                updateelectronicsdata();
                            }}
                        />
                    )}
                </View>
                <View style={styles.marbotttom} />
            </ScrollView>

        </View>
    )
}

export default ElectronicsAllCategoriesForm

