import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import HeaderUserName from '../../../Componets/HeaderUserName/HeaderUserName'
import SearchComponest from '../../../Componets/SearchComponets/SearchComponest'
import CustomModal from '../../../Componets/CustomModal/CustomModal'
import { icons } from '../../../Helper/icons'
import { styles } from './styles'
import TabbottomviewComponets from '../../../Componets/TabViewComponets/TabbottomviewComponets'
import ReactNativeModal from 'react-native-modal'
import { string } from '../../../Helper/string'

const CarList = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState()
  const [modalVisible2, setModalVisible2] = useState()
  const [modalVisible3, setModalVisible3] = useState()
  const [selectclearapply, setSelectclearapply] = useState(false);
  const [isIconViewVisible, setIconViewVisible] = useState(false);
  const [isIconViewVisible2, setIconViewVisible2] = useState(false);
  const [isIconViewVisible3, setIconViewVisible3] = useState(false);
  const [selectclearapply2, setSelectclearapply2] = useState(false);
  const [filtersort, setfiltersort] = useState();
  useEffect(() => {
    const id = 1;
    setfiltersort(id)
  }, []);
  const selectclearapplybutton = async (id) => {
    setSelectclearapply(id)
  }
  const selectclearapplybutton2 = async (id) => {
    setSelectclearapply2(id)
  }
  const toggleModal = () => {
    setModalVisible(!modalVisible)
  }
  const toggleModal2 = () => {
    setModalVisible2(!modalVisible2)
  }
  const toggleModal3 = () => {
    setModalVisible3(!modalVisible3)
  }
  const toggleIconView = () => {
    setIconViewVisible(!isIconViewVisible);
  };
  const toggleIconView2 = () => {
    setIconViewVisible2(!isIconViewVisible2);
  };
  const toggleIconView3 = () => {
    setIconViewVisible3(!isIconViewVisible3);
  };
  // const goBackToScreen = (selectedId) => {
  //   const screenMap = {
  //     1: 'HomeScreen',
  //     2: 'Propertyscreen',
  //     3: 'SellScreen',
  //     4: 'Package',
  //     5: 'ProfileScreen',
  //   };
  //   navigation.navigate(screenMap[selectedId]);
  // };
  const selectedsort = async (id) => {
    setfiltersort(id)
  }
  return (
    <View>
      <ScrollView>
        <HeaderUserName onPress={() => { navigation.navigate('Notification') }} />
        <View style={styles.flexrow2}>
          <View style={styles.searchview}>
            <View style={styles.flexrow23}>
              <Image source={icons.search} style={styles.search} />
              <TextInput
                placeholder="Search your Car"
                placeholderTextColor={'#808080'}
              //   onChangeText={onPress} 
              />
            </View>
          </View>
          <TouchableOpacity onPress={() => {
            setModalVisible2(true)
          }} style={styles.searchiconview}>

            <Image source={icons.menuselected} style={styles.mapsandflags} />

          </TouchableOpacity>
        </View>
        <CustomModal
          isVisible={modalVisible}
          onBackdropPress={toggleModal}
          transparent={true}
          backdropColor={'#fff'}
          style={{ margin: 0, bottom: 0 }}
          backdropOpacity={0}
          modalestyle={styles.modalestyle}
        />


        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={[styles.brandview, styles.brandview8]}>
            <TouchableOpacity onPress={() => {
              // setModalVisible2(true)
            }} style={styles.flexrowview2}>
              <Text style={styles.budgettxt}>Budget</Text>
              <Image source={icons.downarro} style={styles.downarrostyle}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.brandview}>
            <TouchableOpacity onPress={() => {
              // setModalVisible3(true)
            }} style={styles.flexrowview2}>
              <Text style={styles.budgettxt}>Brand & Model</Text>
              <Image source={icons.downarro} style={styles.downarrostyle}></Image>
            </TouchableOpacity>
          </View>
          <View style={[styles.brandview, styles.flexrowview3]}>
            <TouchableOpacity style={[styles.flexrowview2]}>
              <Text style={styles.budgettxt}>Year</Text>
              <Image source={icons.downarro} style={styles.downarrostyle}></Image>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <TouchableOpacity onPress={() => { navigation.navigate('CarDetails') }} style={styles.likelist}>
          <View style={styles.flexrowview}>
            <Image source={icons.carnew} style={styles.lepstyle}></Image>
            <View style={styles.textstyle}>
              <Text style={styles.rupeesstyle}>₹ 50,00,000</Text>
              <Text style={styles.hptext}>MARUTI SUZUKI MODEL</Text>
              <Text style={styles.modalstex}>2021 - 10,000 km</Text>
              <View style={styles.loctionrow}>
                <Image source={icons.mapsandflags} style={styles.locstyelbike} />
                <Text style={styles.Weststyle}>T Nagar , Chennai</Text>

              </View>
            </View>
            <View style={styles.dateview}>

            </View>
            <View style={styles.dateview}>
              <Text style={[styles.Weststylepos]}>17 Jun</Text>
            </View>
            <TouchableOpacity style={styles.hartstyle}>
              <Image source={icons.heartw2} style={styles.heartw2style}></Image>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate('CarDetails') }} style={styles.likelist}>
          <View style={styles.flexrowview}>
            <Image source={icons.cartwo} style={styles.lepstyle}></Image>
            <View style={styles.textstyle}>
              <Text style={styles.rupeesstyle}>₹ 50,00,000</Text>
              <Text style={styles.hptext}>TATA SUV MODEL</Text>
              <Text style={styles.modalstex}>2021 - 10,000 km</Text>
              <View style={styles.loctionrow}>
                <Image source={icons.mapsandflags} style={styles.locstyelbike} />
                <Text style={styles.Weststyle}>T Nagar , Chennai</Text>

              </View>
            </View>
            <View style={styles.dateview}>
              <Text style={[styles.Weststylepos]}>17 Jun</Text>
            </View>
            <TouchableOpacity style={styles.hartstyle}>
              <Image source={icons.heartw2} style={styles.heartw2style}></Image>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate('CarDetails') }} style={styles.likelist}>
          <View style={styles.flexrowview}>
            <Image source={icons.mahendracar} style={styles.lepstyle}></Image>
            <View style={styles.textstyle}>
              <Text style={styles.rupeesstyle}>₹ 50,00,000</Text>
              <Text style={styles.hptext}>MARUTI SUZUKI MODEL</Text>
              <Text style={styles.modalstex}>2021 - 10,000 km</Text>
              <View style={styles.loctionrow}>
                <Image source={icons.mapsandflags} style={styles.locstyelbike} />
                <Text style={styles.Weststyle}>T Nagar , Chennai</Text>

              </View>
            </View>
            <View style={styles.dateview}>
              <Text style={[styles.Weststylepos]}>17 Jun</Text>
            </View>
            <TouchableOpacity style={styles.hartstyle}>
              <Image source={icons.heartw2} style={styles.heartw2style}></Image>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate('CarDetails') }} style={styles.likelist}>
          <View style={styles.flexrowview}>
            <Image source={icons.cartwo} style={styles.lepstyle}></Image>
            <View style={styles.textstyle}>
              <Text style={styles.rupeesstyle}>₹ 50,00,000</Text>
              <Text style={styles.hptext}>TATA SUV MODEL</Text>
              <Text style={styles.modalstex}>2021 - 10,000 km</Text>
              <View style={styles.loctionrow}>
                <Image source={icons.mapsandflags} style={styles.locstyelbike} />
                <Text style={styles.Weststyle}>T Nagar , Chennai</Text>

              </View>
            </View>
            <View style={styles.dateview}>
              <Text style={[styles.Weststylepos]}>17 Jun</Text>
            </View>
            <TouchableOpacity style={styles.hartstyle}>
              <Image source={icons.heartw2} style={styles.heartw2style}></Image>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate('CarDetails') }} style={styles.likelist}>
          <View style={styles.flexrowview}>
            <Image source={icons.mahendracar} style={styles.lepstyle}></Image>
            <View style={styles.textstyle}>
              <Text style={styles.rupeesstyle}>₹ 50,00,000</Text>
              <Text style={styles.hptext}>MARUTI SUZUKI MODEL</Text>
              <Text style={styles.modalstex}>2021 - 10,000 km</Text>
              <View style={styles.loctionrow}>
                <Image source={icons.mapsandflags} style={styles.locstyelbike} />
                <Text style={styles.Weststyle}>T Nagar , Chennai</Text>

              </View>
            </View>
            <View style={styles.dateview}>
              <Text style={[styles.Weststylepos]}>17 Jun</Text>
            </View>
            <TouchableOpacity style={styles.hartstyle}>
              <Image source={icons.heartw2} style={styles.heartw2style}></Image>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate('CarDetails') }} style={styles.likelist}>
          <View style={styles.flexrowview}>
            <Image source={icons.cartwo} style={styles.lepstyle}></Image>
            <View style={styles.textstyle}>
              <Text style={styles.rupeesstyle}>₹ 50,00,000</Text>
              <Text style={styles.hptext}>MARUTI SUZUKI MODEL</Text>
              <Text style={styles.modalstex}>2021 - 10,000 km</Text>
              <View style={styles.loctionrow}>
                <Image source={icons.mapsandflags} style={styles.locstyelbike} />
                <Text style={styles.Weststyle}>T Nagar , Chennai</Text>

              </View>

            </View>
            <View style={styles.dateview}>
              <Text style={[styles.Weststylepos]}>17 Jun</Text>
            </View>
            <TouchableOpacity style={styles.hartstyle}>
              <Image source={icons.heartw2} style={styles.heartw2style}></Image>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <View style={styles.martopms} />

        <ReactNativeModal
          isVisible={modalVisible2}
          onBackdropPress={toggleModal2}
          transparent={true}
          backdropColor={'rgba(0, 0, 0, 0.7)'}
          style={{ margin: 0, bottom: 0 }}
          backdropOpacity={0.5}>

          <View style={styles.backgroundview}>
            <View style={styles.lineviewstyle}></View>
            <ScrollView>
              <Text style={styles.bypricestext}>FILTERS & SORT</Text>
              <View style={styles.flexrowchoose}>
                <View style={styles.oneflexchooview}>
                  <TouchableOpacity onPress={() => {
                    selectedsort(1)
                  }}>
                    <Text style={[styles.byproty, { color: filtersort === 1 ? '#000' : '#000', fontWeight: filtersort === 1 ? "900" : '500' }]}>By Brand / Model</Text>
                  </TouchableOpacity>
                  <View style={styles.borwview}></View>
                  <TouchableOpacity onPress={() => {
                    selectedsort(2)
                  }}>
                    <Text style={[styles.byproty, { color: filtersort === 2 ? '#000' : '#000', fontWeight: filtersort === 2 ? "900" : '500' }]}>By Price</Text>
                  </TouchableOpacity>
                  <View style={styles.borwview}></View>
                  <TouchableOpacity onPress={() => {
                    selectedsort(3)
                  }}>
                    <Text style={[styles.byproty, { color: filtersort === 2 ? '#000' : '#000', fontWeight: filtersort === 3 ? "900" : '500' }]}>By Year</Text>
                  </TouchableOpacity>
                  <View style={styles.borwview}></View>
                  <TouchableOpacity onPress={() => {
                    selectedsort(4)
                  }}>
                    <Text style={[styles.byproty, { color: filtersort === 4 ? '#000' : '#000', fontWeight: filtersort === 4 ? "900" : '500' }]}>By No of Owners</Text>
                  </TouchableOpacity>
                  <View style={styles.borwview}></View>
                  <TouchableOpacity onPress={() => {
                    selectedsort(5)
                  }}>
                    <Text style={[styles.byproty, { color: filtersort === 5 ? '#000' : '#000', fontWeight: filtersort === 5 ? "900" : '500' }]}>By Inspection Status</Text>
                  </TouchableOpacity>
                  <View style={styles.borwview}></View>
                  <TouchableOpacity onPress={() => {
                    selectedsort(6)
                  }}>
                    <Text style={[styles.byproty, { color: filtersort === 6 ? '#000' : '#000', fontWeight: filtersort === 6 ? "900" : '500' }]}>OLX Cars</Text>
                  </TouchableOpacity>
                  <View style={styles.borwview}></View>
                  <TouchableOpacity onPress={() => {
                    selectedsort(7)
                  }}>
                    <Text style={[styles.byproty, { color: filtersort === 7 ? '#000' : '#000', fontWeight: filtersort === 7 ? "900" : '500' }]}>By Seller Verification</Text>
                  </TouchableOpacity>
                  <View style={styles.borwview}></View>
                  <TouchableOpacity onPress={() => {
                    selectedsort(8)
                  }}>
                    <Text style={[styles.byproty, { color: filtersort === 8 ? '#000' : '#000', fontWeight: filtersort === 8 ? "900" : '500' }]}>By KM Drivers</Text>
                  </TouchableOpacity>
                  <View style={styles.borwview}></View>
                  <TouchableOpacity onPress={() => {
                    selectedsort(9)
                  }}>
                    <Text style={[styles.byproty, { color: filtersort === 9 ? '#000' : '#000', fontWeight: filtersort === 9 ? "900" : '500' }]}>By Transmission</Text>
                  </TouchableOpacity>
                  <View style={styles.borwview}></View>
                  <TouchableOpacity onPress={() => {
                    selectedsort(10)
                  }}>
                    <Text style={[styles.byproty, { color: filtersort === 10 ? '#000' : '#000', fontWeight: filtersort === 10 ? "900" : '500' }]}>Other Filters</Text>
                  </TouchableOpacity>
                  <View style={styles.borwview}></View>
                  <TouchableOpacity onPress={() => {
                    selectedsort(11)
                  }}>
                    <Text style={[styles.byproty, { color: filtersort === 11 ? '#000' : '#000', fontWeight: filtersort === 11 ? "900" : '500' }]}>Change Sort</Text>
                  </TouchableOpacity>
                  <View style={styles.borwview}></View>


                </View>
                {filtersort == '1' ? (<>
                  <View >
                  {/* <Text style={styles.Choosefrobelowtext}>{string.Choosefrobelow}</Text> */}
                  <View style={styles.chooseview}>
                    <View style={styles.flexrowicon}>
                      <TextInput
                        placeholder="Search brand or model"
                        placeholderTextColor={'#000'}
                      //   onChangeText={onPress} 
                      />
                      <TouchableOpacity>
                        <Image source={icons.search} style={styles.searchwew} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.modalmodalpc}>
                    <Text style={styles.poputext}>{string.POPULARBRANDS}</Text>
                    <TouchableOpacity onPress={toggleIconView} style={styles.rightarrowmod}>
                      <Image source={icons.downarro} style={styles.downarrostyle}></Image>
                    </TouchableOpacity>
                  </View>
                  {isIconViewVisible && (<>
                    <View style={styles.iconrowview}>
                      <View style={styles.modeliconviewrow}>
                        <TouchableOpacity style={styles.iconvi}>
                          <Image source={icons.HyundaiLo} style={styles.hppcstyle}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconvi}>
                          <Image source={icons.honda} style={styles.leoaeer}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconvi}>
                          <Image source={icons.yamaha} style={styles.leoaeer}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconvi}>
                          <Image source={icons.Toyota} style={styles.leoaeer}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconvi}>
                          <Image source={icons.honda} style={styles.leoaeer}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconvi}>
                          <Image source={icons.Toyota} style={styles.leoaeer}></Image>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </>)}



                  <View style={styles.modalviewst} />
                  <View style={styles.modalmodalpc}>
                    <Text style={styles.poputext}>{string.allbranda}</Text>
                    <TouchableOpacity onPress={toggleIconView2} style={styles.rightarrowmod}>
                      <Image source={icons.downarro} style={styles.downarrostyle}></Image>
                    </TouchableOpacity>
                  </View>
                  {isIconViewVisible2 && (<>
                    <View style={styles.iconrowview}>
                      <View style={styles.modeliconviewrow}>
                        <TouchableOpacity style={styles.iconvi}>
                          <Image source={icons.HyundaiLo} style={styles.hppcstyle}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconvi}>
                          <Image source={icons.honda} style={styles.leoaeer}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconvi}>
                          <Image source={icons.yamaha} style={styles.leoaeer}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconvi}>
                          <Image source={icons.Toyota} style={styles.leoaeer}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconvi}>
                          <Image source={icons.honda} style={styles.leoaeer}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconvi}>
                          <Image source={icons.Toyota} style={styles.leoaeer}></Image>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </>)}

                  <View style={styles.modalviewst} />
                  <View style={styles.modalmodalpc}>
                    <Text style={styles.poputext}>{string.AllModels}</Text>
                    <TouchableOpacity onPress={toggleIconView3} style={styles.rightarrowmod}>
                      <Image source={icons.downarro} style={styles.downarrostyle}></Image>
                    </TouchableOpacity>
                  </View>
                  {isIconViewVisible3 && (<>
                    <View style={styles.iconrowview}>
                      <View style={styles.modeliconviewrow}>
                        <TouchableOpacity style={styles.iconvi}>
                          <Image source={icons.HyundaiLo} style={styles.hppcstyle}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconvi}>
                          <Image source={icons.honda} style={styles.leoaeer}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconvi}>
                          <Image source={icons.yamaha} style={styles.leoaeer}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconvi}>
                          <Image source={icons.Toyota} style={styles.leoaeer}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconvi}>
                          <Image source={icons.honda} style={styles.leoaeer}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconvi}>
                          <Image source={icons.Toyota} style={styles.leoaeer}></Image>
                        </TouchableOpacity>
                      </View>
                    </View>

                  </>)}

                  <View style={styles.modalviewst} />
                </View>

            
              {/* <View style={styles.centerview}></View> */}
                </>
                ):null}
                {filtersort == '2' ? (<>
                  <View >
                    <Text style={styles.Choosefrobelowtext}>{string.Choosefrobelow}</Text>
                    <View style={styles.chooseview}>
                      <View style={styles.belowFlexrow}>
                        <Text style={styles.textbelowtext}>Below 1 Lac</Text>
                        <Text style={styles.itemstext}>310 + items</Text>
                      </View>
                    </View>
                    <View style={[styles.chooseview, styles.chooseview2]}>
                      <View style={styles.belowFlexrow}>
                        <Text style={styles.textbelowtext}>1 Lac - 2 Lac</Text>
                        <Text style={styles.itemstext}>310 + items</Text>
                      </View>
                    </View>
                    <View style={[styles.chooseview, styles.chooseview2]}>
                      <View style={styles.belowFlexrow}>
                        <Text style={styles.textbelowtext}>2 Lac - 3 Lac</Text>
                        <Text style={styles.itemstext}>310 + items</Text>
                      </View>
                    </View>
                    <View style={[styles.chooseview, styles.chooseview2]}>
                      <View style={styles.belowFlexrow}>
                        <Text style={styles.textbelowtext}>3 Lac - 5 Lac</Text>
                        <Text style={styles.itemstext}>310 + items</Text>
                      </View>
                    </View>
                    <View style={[styles.chooseview, styles.chooseview2]}>
                      <View style={styles.belowFlexrow}>
                        <Text style={styles.textbelowtext}>5 Lac and Above</Text>
                        <Text style={styles.itemstext}>310 + items</Text>
                      </View>
                    </View>
                    {/* <Text style={styles.Choosearangbelowtext}>{string.Choosearangbelow}</Text> */}


                  </View>
                </>) : null}

                {filtersort == '8' ? (<>
                  <View >
                    <Text style={styles.Choosefrobelowtext}>Choose from options below ( KM )</Text>
                    <View style={styles.chooseview}>
                      <View style={styles.belowFlexrow}>
                        <Text style={styles.textbelowtext}>Below 25,000 Km</Text>
                        <Text style={styles.itemstext}>310+ items</Text>
                      </View>
                    </View>
                    <View style={[styles.chooseview, styles.chooseview2]}>
                      <View style={styles.belowFlexrow}>
                        <Text style={styles.textbelowtext}>25,000 Km - 50,00..</Text>
                        <Text style={styles.itemstext}>310 + items</Text>
                      </View>
                    </View>
                    <View style={[styles.chooseview, styles.chooseview2]}>
                      <View style={styles.belowFlexrow}>
                        <Text style={styles.textbelowtext}>50,000 Km - 75,00..</Text>
                        <Text style={styles.itemstext}>310 + items</Text>
                      </View>
                    </View>
                    <View style={[styles.chooseview, styles.chooseview2]}>
                      <View style={styles.belowFlexrow}>
                        <Text style={styles.textbelowtext}>75,000 Km - 85,00..</Text>
                        <Text style={styles.itemstext}>310 + items</Text>
                      </View>
                    </View>
                    <View style={[styles.chooseview, styles.chooseview2]}>
                      <View style={styles.belowFlexrow}>
                        <Text style={styles.textbelowtext}>90,000 Km - 1,00,0..</Text>
                        <Text style={styles.itemstext}>310 + items</Text>
                      </View>
                    </View>
                    {/* <Text style={styles.Choosearangbelowtext}>{string.Choosearangbelow}</Text> */}


                  </View>
                </>) : null}
              </View>
              
                 <View style={styles.marbot} />
                </ScrollView>
                
                  <View style={styles.footerview}>
                  <View style={styles.flextwobuttonrow}>
                <TouchableOpacity onPress={() => {
                  selectclearapplybutton(1);
                  setModalVisible2(false)
                }} style={[styles.clearallbutton, {
                  backgroundColor: selectclearapply === 1 ? '#02487C' : '#fff',
                  borderColor: selectclearapply === 1 ? '#02487c' : '#cccc'
                }]}>
                <Text style={[styles.foncl, { color: selectclearapply === 1 ? "#fff" : '#000' }]}>{string.Clearall}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                  selectclearapplybutton(2);

                }} style={[styles.clearallbutton, {
                  backgroundColor: selectclearapply === 2 ? '#02487C' : '#fff',
                  borderColor: selectclearapply === 2 ? '#02487c' : '#cccc'
                  }]}>
                  <Text style={[styles.foncl, { color: selectclearapply === 2 ? "#fff" : '#000' }]}>{string.Apply}</Text>
                  </TouchableOpacity>
                  </View> 
                  </View>
          </View>


        </ReactNativeModal>
        <ReactNativeModal
          isVisible={modalVisible3}
          onBackdropPress={toggleModal3}
          transparent={true}
          backdropColor={'rgba(0, 0, 0, 0.7)'}
          style={{ margin: 0, bottom: 0 }}
          backdropOpacity={0.5}>
          <View style={styles.backgroundview}>
            <Text style={styles.bypricestext}>FILTERS & SORT</Text>
            <View style={[styles.lineviewstyle, styles.lineviewstyle2view]}></View>

            <ScrollView>
              <View style={styles.flexrowchoose}>
                <View style={[styles.oneflexchooview, styles.oneflexchooviewre]}>
                  <Text style={[styles.byproty, styles.byproty34]}>By Brand / Model</Text>
                  <View style={styles.borwview}></View>
                  <TouchableOpacity onPress={() => {
                    selectedsort(1)
                  }}>
                    <Text style={[styles.byproty, { color: filtersort === 1 ? '#000' : '#0000' }]}>By Price</Text>
                  </TouchableOpacity>
                  <View style={styles.borwview}></View>
                  <TouchableOpacity onPress={() => {
                    selectedsort(1)
                  }}>
                    <Text style={[styles.byproty, { color: filtersort === 2 ? '#000' : '#0000' }]}>By Year</Text>
                  </TouchableOpacity>
                  <View style={styles.borwview}></View>
                  <TouchableOpacity onPress={() => {
                    selectedsort(2)
                  }}>
                    <Text style={[styles.byproty, { color: filtersort === 3 ? '#000' : '#0000' }]}>By No of Owners</Text>
                  </TouchableOpacity>
                  <View style={styles.borwview}></View>
                  <TouchableOpacity onPress={() => {
                    selectedsort(2)
                  }}>
                    <Text style={[styles.byproty, { color: filtersort === 4 ? '#000' : '#0000' }]}>By KM Drivers</Text>
                  </TouchableOpacity>
                  <View style={styles.borwview}></View>
                  <TouchableOpacity onPress={() => {
                    selectedsort(4)
                  }}>
                    <Text style={[styles.byproty, { color: filtersort === 5 ? '#000' : '#0000' }]}>Change Sort</Text>
                  </TouchableOpacity>
                </View>



                <View >
                  {/* <Text style={styles.Choosefrobelowtext}>{string.Choosefrobelow}</Text> */}
                  <View style={styles.chooseview}>
                    <View style={styles.flexrowicon}>
                      <TextInput
                        placeholder="Search brand or model"
                        placeholderTextColor={'#000'}
                      //   onChangeText={onPress} 
                      />
                      <TouchableOpacity>
                        <Image source={icons.search} style={styles.searchwew} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.modalmodalpc}>
                    <Text style={styles.poputext}>{string.POPULARBRANDS}</Text>
                    <TouchableOpacity onPress={toggleIconView} style={styles.rightarrowmod}>
                      <Image source={icons.downarro} style={styles.downarrostyle}></Image>
                    </TouchableOpacity>
                  </View>
                  {isIconViewVisible && (<>
                    <View style={styles.iconrowview}>
                      <View style={styles.modeliconviewrow}>
                        <TouchableOpacity style={styles.iconvi}>
                          <Image source={icons.Bajajlogo} style={styles.hppcstyle}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconvi}>
                          <Image source={icons.ktm2} style={styles.leoaeer}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconvi}>
                          <Image source={icons.yamaha} style={styles.leoaeer}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconvi}>
                          <Image source={icons.tvs} style={styles.leoaeer}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconvi}>
                          <Image source={icons.Bajajlogo} style={styles.leoaeer}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconvi}>
                          <Image source={icons.tvs} style={styles.leoaeer}></Image>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </>)}



                  <View style={styles.modalviewst} />
                  <View style={styles.modalmodalpc}>
                    <Text style={styles.poputext}>{string.allbranda}</Text>
                    <TouchableOpacity onPress={toggleIconView2} style={styles.rightarrowmod}>
                      <Image source={icons.downarro} style={styles.downarrostyle}></Image>
                    </TouchableOpacity>
                  </View>
                  {isIconViewVisible2 && (<>
                    <View style={styles.iconrowview}>
                      <View style={styles.modeliconviewrow}>
                        <TouchableOpacity style={styles.iconvi}>
                          <Image source={icons.Bajajlogo} style={styles.hppcstyle}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconvi}>
                          <Image source={icons.ktm2} style={styles.leoaeer}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconvi}>
                          <Image source={icons.yamaha} style={styles.leoaeer}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconvi}>
                          <Image source={icons.tvs} style={styles.leoaeer}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconvi}>
                          <Image source={icons.Bajajlogo} style={styles.leoaeer}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconvi}>
                          <Image source={icons.tvs} style={styles.leoaeer}></Image>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </>)}

                  <View style={styles.modalviewst} />
                  <View style={styles.modalmodalpc}>
                    <Text style={styles.poputext}>{string.AllModels}</Text>
                    <TouchableOpacity onPress={toggleIconView3} style={styles.rightarrowmod}>
                      <Image source={icons.downarro} style={styles.downarrostyle}></Image>
                    </TouchableOpacity>
                  </View>
                  {isIconViewVisible3 && (<>
                    <View style={styles.iconrowview}>
                      <View style={styles.modeliconviewrow}>
                        <TouchableOpacity style={styles.iconvi}>
                          <Image source={icons.Bajajlogo} style={styles.hppcstyle}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconvi}>
                          <Image source={icons.ktm2} style={styles.leoaeer}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconvi}>
                          <Image source={icons.yamaha} style={styles.leoaeer}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconvi}>
                          <Image source={icons.tvs} style={styles.leoaeer}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconvi}>
                          <Image source={icons.Bajajlogo} style={styles.leoaeer}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconvi}>
                          <Image source={icons.tvs} style={styles.leoaeer}></Image>
                        </TouchableOpacity>
                      </View>
                    </View>

                  </>)}

                  <View style={styles.modalviewst} />
                </View>

              </View>
              <View style={styles.centerview}></View>
              <View style={styles.flextwobuttonrow}>
                <TouchableOpacity onPress={() => {
                  selectclearapplybutton2(1);
                  setModalVisible3(false)
                }} style={[styles.clearallbutton, {
                  backgroundColor: selectclearapply2 === 1 ? 'red' : '#fff',
                  borderColor: selectclearapply2 === 1 ? '#02487c' : '#cccc'
                }]}>
                  <Text style={[styles.foncl, { color: selectclearapply2 === 1 ? "#fff" : '#000' }]}>{string.Clearall}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                  selectclearapplybutton2(2);

                }} style={[styles.clearallbutton, {
                  backgroundColor: selectclearapply2 === 2 ? '#02487C' : '#fff',
                  borderColor: selectclearapply2 === 2 ? '#02487c' : '#cccc'
                }]}>
                  <Text style={[styles.foncl, { color: selectclearapply2 === 2 ? "#fff" : '#000' }]}>{string.Apply}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.marbot} />
            </ScrollView>

          </View>
        </ReactNativeModal>



      </ScrollView>
      {/* <TabbottomviewComponets
        selectedId={1} goBackToScreen={goBackToScreen} /> */}
    </View>
  )
}

export default CarList

