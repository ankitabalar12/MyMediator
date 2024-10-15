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

const Electronicslist = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState()
  const [modalVisible2, setModalVisible2] = useState()
  const [modalVisible3, setModalVisible3] = useState()
  const [selectclearapply, setSelectclearapply] = useState(false);
  const [isIconViewVisible, setIconViewVisible] = useState(false);
  const [isIconViewVisible2, setIconViewVisible2] = useState(false);
  const [isIconViewVisible3, setIconViewVisible3] = useState(false);
  const [selectclearapply2, setSelectclearapply2] = useState(false);
  const [selectedmodal, setSelectcModel] = useState(false);
  useEffect(() => {
    const id = 1;
    setSelectcModel(id)
  }, []);
  const selectclearapplybutton = async (id) => {
    setSelectclearapply(id)
  }
  const selectbrandandmodel = async (id) => {
    setSelectcModel(id)
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

  return (
    <View>
      <ScrollView>
        <HeaderUserName onPress={() => { navigation.navigate('Notification') }} />
        <View style={styles.flexrow2}>
          <View style={styles.searchview}>
            <View style={styles.flexrow23}>
              <Image source={icons.search} style={styles.search} />
              <TextInput
                placeholder="Search your leptop"
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
        <TouchableOpacity onPress={() => { navigation.navigate('ElectronicsDetails') }} style={styles.likelist}>
          <View style={styles.flexrowview}>
            <Image source={icons.leptio1} style={styles.lepstyle}></Image>
            <View style={styles.textstyle}>
              <Text style={styles.rupeesstyle}>₹ 45,000</Text>
              <Text style={styles.hptext}>HP C17 LAPTOP</Text>
              <Text style={styles.modalstex}>2021 Model</Text>
              <View style={styles.loctionrow}>
                <Image source={icons.mapsandflags} style={styles.locstyelbike} />
                <Text style={styles.Weststyle}>West Mambalam, Chennai</Text>
                <Text style={[styles.Weststylepos]}>17 Jun</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.hartstyle}>
              <Image source={icons.heartw2} style={styles.heartw2style}></Image>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.likelist}>
          <View style={styles.flexrowview}>
            <Image source={icons.lepto2} style={styles.lepstyle}></Image>
            <View style={styles.textstyle}>
              <Text style={styles.rupeesstyle}>₹ 45,000</Text>
              <Text style={styles.hptext}>HP C17 LAPTOP</Text>
              <Text style={styles.modalstex}>2021 Model</Text>
              <View style={styles.loctionrow}>
                <Image source={icons.mapsandflags} style={styles.locstyelbike} />
                <Text style={styles.Weststyle}>West Mambalam, Chennai</Text>
                <Text style={[styles.Weststylepos]}>17 Jun</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.hartstyle}>
              <Image source={icons.heartw2} style={styles.heartw2style}></Image>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.likelist}>
          <View style={styles.flexrowview}>
            <Image source={icons.leptop3} style={styles.lepstyle}></Image>
            <View style={styles.textstyle}>
              <Text style={styles.rupeesstyle}>₹ 45,000</Text>
              <Text style={styles.hptext}>HP C17 LAPTOP</Text>
              <Text style={styles.modalstex}>2021 Model</Text>
              <View style={styles.loctionrow}>
                <Image source={icons.mapsandflags} style={styles.locstyelbike} />
                <Text style={styles.Weststyle}>West Mambalam, Chennai</Text>
                <Text style={[styles.Weststylepos]}>17 Jun</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.hartstyle}>
              <Image source={icons.heartw2} style={styles.heartw2style}></Image>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.likelist}>
          <View style={styles.flexrowview}>
            <Image source={icons.leptio1} style={styles.lepstyle}></Image>
            <View style={styles.textstyle}>
              <Text style={styles.rupeesstyle}>₹ 45,000</Text>
              <Text style={styles.hptext}>HP C17 LAPTOP</Text>
              <Text style={styles.modalstex}>2021 Model</Text>
              <View style={styles.loctionrow}>
                <Image source={icons.mapsandflags} style={styles.locstyelbike} />
                <Text style={styles.Weststyle}>West Mambalam, Chennai</Text>
                <Text style={[styles.Weststylepos]}>17 Jun</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.hartstyle}>
              <Image source={icons.heartw2} style={styles.heartw2style}></Image>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.likelist}>
          <View style={styles.flexrowview}>
            <Image source={icons.leptop3} style={styles.lepstyle}></Image>
            <View style={styles.textstyle}>
              <Text style={styles.rupeesstyle}>₹ 45,000</Text>
              <Text style={styles.hptext}>HP C17 LAPTOP</Text>
              <Text style={styles.modalstex}>2021 Model</Text>
              <View style={styles.loctionrow}>
                <Image source={icons.mapsandflags} style={styles.locstyelbike} />
                <Text style={styles.Weststyle}>West Mambalam, Chennai</Text>
                <Text style={[styles.Weststylepos]}>17 Jun</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.hartstyle}>
              <Image source={icons.heartw2} style={styles.heartw2style}></Image>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.likelist}>
          <View style={styles.flexrowview}>
            <Image source={icons.lepto2} style={styles.lepstyle}></Image>
            <View style={styles.textstyle}>
              <Text style={styles.rupeesstyle}>₹ 45,000</Text>
              <Text style={styles.hptext}>HP C17 LAPTOP</Text>
              <Text style={styles.modalstex}>2021 Model</Text>
              <View style={styles.loctionrow}>
                <Image source={icons.mapsandflags} style={styles.locstyelbike} />
                <Text style={styles.Weststyle}>West Mambalam, Chennai</Text>
                <Text style={[styles.Weststylepos]}>17 Jun</Text>
              </View>
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
                    selectbrandandmodel(1)
                  }}>
                    <Text style={[styles.byproty, { color: selectedmodal === 1 ? '#000' : '#000', fontWeight: selectedmodal === 1 ? "900" : '500' }]}>By Brand / Model</Text>
                  </TouchableOpacity>
                  <View style={styles.borwview}></View>
                  <TouchableOpacity onPress={() => {
                    selectbrandandmodel(2)
                  }}>
                    <Text style={[styles.byproty, { color: selectedmodal === 2 ? '#000' : '#000', fontWeight: selectedmodal === 2 ? "900" : '500' }]}>By Price</Text>
                  </TouchableOpacity>
                  <View style={styles.borwview}></View>
                  <TouchableOpacity onPress={() => {
                    selectbrandandmodel(3)
                  }}>
                    <Text style={[styles.byproty, { color: selectedmodal === 3 ? '#000' : '#000', fontWeight: selectedmodal === 3 ? "900" : '500' }]}>By No of Owners</Text>
                  </TouchableOpacity>
                  <View style={styles.borwview}></View>
                  <TouchableOpacity onPress={() => {
                    selectbrandandmodel(4)
                  }}>
                    <Text style={[styles.byproty, { color: selectedmodal === 4 ? '#000' : '#000', fontWeight: selectedmodal === 4 ? "900" : '500' }]}>Change Sort</Text>
                  </TouchableOpacity>


                </View>
                {selectedmodal == '1' ? (
                  <>
                    <View >
                      <Text style={styles.Choosefrobelowtext}>{string.Choosefrobelow}</Text>
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
                              <Image source={icons.hppc} style={styles.hppcstyle}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconvi}>
                              <Image source={icons.leoaeer} style={styles.leoaeer}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconvi}>
                              <Image source={icons.pedle} style={styles.leoaeer}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconvi}>
                              <Image source={icons.ipedlep} style={styles.ipedlep}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconvi}>
                              <Image source={icons.leoaeer} style={styles.leoaeer}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconvi}>
                              <Image source={icons.pedle} style={styles.leoaeer}></Image>
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
                              <Image source={icons.hppc} style={styles.hppcstyle}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconvi}>
                              <Image source={icons.leoaeer} style={styles.leoaeer}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconvi}>
                              <Image source={icons.pedle} style={styles.leoaeer}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconvi}>
                              <Image source={icons.ipedlep} style={styles.ipedlep}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconvi}>
                              <Image source={icons.leoaeer} style={styles.leoaeer}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconvi}>
                              <Image source={icons.pedle} style={styles.leoaeer}></Image>
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
                              <Image source={icons.hppc} style={styles.hppcstyle}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconvi}>
                              <Image source={icons.leoaeer} style={styles.leoaeer}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconvi}>
                              <Image source={icons.pedle} style={styles.leoaeer}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconvi}>
                              <Image source={icons.ipedlep} style={styles.ipedlep}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconvi}>
                              <Image source={icons.leoaeer} style={styles.leoaeer}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconvi}>
                              <Image source={icons.pedle} style={styles.leoaeer}></Image>
                            </TouchableOpacity>
                          </View>
                        </View>

                      </>)}

                      <View style={styles.modalviewst} />
                    </View>

                  </>
                ) : null}
                {selectedmodal == '2' ? (
                  <>
                    <View >
                      <Text style={styles.Choosefrobelowtext}>{string.Choosefrobelow}</Text>
                      <View style={styles.chooseview}>
                        <View style={styles.belowFlexrow}>
                          <Text style={styles.textbelowtext}>Below 10,000</Text>
                          <Text style={styles.itemstext}>310 + items</Text>
                        </View>
                      </View>
                      <View style={[styles.chooseview, styles.chooseview2]}>
                        <View style={styles.belowFlexrow}>
                          <Text style={styles.textbelowtext}>10,000 - 20,000</Text>
                          <Text style={styles.itemstext}>310 + items</Text>
                        </View>
                      </View>
                      <View style={[styles.chooseview, styles.chooseview2]}>
                        <View style={styles.belowFlexrow}>
                          <Text style={styles.textbelowtext}>20,000 - 30,000</Text>
                          <Text style={styles.itemstext}>310 + items</Text>
                        </View>
                      </View>
                      <View style={[styles.chooseview, styles.chooseview2]}>
                        <View style={styles.belowFlexrow}>
                          <Text style={styles.textbelowtext}>50,000 and Above</Text>
                          <Text style={styles.itemstext}>310 + items</Text>
                        </View>
                      </View>
                      <Text style={styles.Choosearangbelowtext}>{string.Choosearangbelow}</Text>
                      <View style={styles.chatview}>
                        <View style={styles.flexprorow}>
                          <View style={styles.line1}></View>
                          <View style={styles.line2}></View>
                          <View style={styles.line3}></View>
                          <View style={styles.line4}></View>
                          <View style={styles.line5}></View>
                          <View style={styles.line6}></View>
                          <View style={styles.line7}></View>
                          <View style={styles.line6}></View>
                          <View style={styles.line7}></View>
                          <View style={styles.line8}></View>
                          <View style={styles.line9}></View>
                          <View style={styles.line10}></View>
                          <View style={styles.line11}></View>
                          <View style={styles.line12}></View>
                          <View style={styles.line13}></View>
                          <View style={styles.line14}></View>
                          <View style={styles.line15}></View>
                          <View style={styles.line14}></View>
                          <View style={styles.line15}></View>
                          <View style={styles.line14}></View>
                          <View style={styles.line13}></View>
                          <View style={styles.line14}></View>
                          <View style={styles.line11}></View>
                          <View style={styles.line14}></View>
                          <View style={styles.line9}></View>
                          <View style={styles.line14}></View>
                          <View style={styles.line7}></View>
                          <View style={styles.line14}></View>
                          <View style={styles.line7}></View>
                          <View style={styles.line14}></View>
                          <View style={styles.line5}></View>
                          <View style={styles.line14}></View>
                          <View style={styles.line3}></View>
                          <View style={styles.line14}></View>
                          <View style={styles.line1}></View>
                          <View style={styles.line14}></View>
                          <View style={styles.line16}></View>
                        </View>
                        <View style={styles.ratextrow}>
                          <Text style={styles.reatpritext}>0</Text>
                          <Text style={styles.reatpritext2}>1,000,000+</Text>
                        </View>

                      </View>
                      <View style={styles.flexrow}>
                        <View style={styles.viewround}></View>
                        <View style={styles.prolineview}></View>
                        <View style={styles.viewround}></View>
                      </View>
                    </View>


                  </>
                ) : null}
              </View>
             
              {/* <View style={styles.flextwobuttonrow}>
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
              </View> */}

              
              {/* </View> */}

              {/* <View style={styles.marbot} /> */}
            </ScrollView>
            <View style={styles.footerview}>
              <View style={styles.lineview}></View>
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
        {/* <ReactNativeModal
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
                  <Text style={styles.byproty}>By Price</Text>
                  <View style={styles.borwview}></View>
                  <Text style={styles.byproty}>By Year</Text>
                  <View style={styles.borwview}></View>
                  <Text style={styles.byproty}>By No of Owners</Text>
                  <View style={styles.borwview}></View>
                  <Text style={styles.byproty}>Change Sort</Text>
                </View>



              
              </View>
              <View style={styles.centerview}></View>
              <View style={styles.flextwobuttonrow}>
                <TouchableOpacity onPress={() => {
                  selectclearapplybutton2(1);
                  setModalVisible3(false)
                }} style={[styles.clearallbutton, {
                  backgroundColor: selectclearapply2 === 1 ? '#02487C' : '#fff',
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
        </ReactNativeModal> */}

           

      </ScrollView>
      {/* <TabbottomviewComponets
        selectedId={1} goBackToScreen={goBackToScreen} /> */}
    </View>
  )
}

export default Electronicslist

