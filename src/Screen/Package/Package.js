import { Animated, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { styles } from './styles'
import HeaderUserName from '../../Componets/HeaderUserName/HeaderUserName'
import SearchComponest from '../../Componets/SearchComponets/SearchComponest'
import { icons } from '../../Helper/icons'
import { string } from '../../Helper/string'
import Swiper from 'react-native-swiper';
const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);
const Package = ({ navigation }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const scrollViewRef = useRef(null);
  const [scrollX, setScrollX] = useState(new Animated.Value(0));
  const [rotations] = useState([new Animated.Value(0), new Animated.Value(0), new Animated.Value(0)]);

  const scaleValue = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    const id = 1;
    setSelectedCard(id);
  }, []);
  useEffect(() => {
    const rotate = (index) => {
      Animated.timing(rotations[index], {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        // Reset rotation after animation
        rotations[index].setValue(0);
      });
    };

    if (selectedCard === 1) {
      rotate(0);
    } else if (selectedCard === 2) {
      rotate(1);
    } else if (selectedCard === 3) {
      rotate(2);
    }
  }, [selectedCard, rotations]);
  // const rotateStyle = (index) => {
  //   const rotate = scrollX.interpolate({
  //     inputRange: [(index - 1) * 300, index * 300, (index + 1) * 300],
  //     outputRange: ['-45deg', '0deg', '45deg'],
  //     extrapolate: 'clamp',
  //   });
  //   return {
  //     transform: [{ rotate }],
  //   };
  // };

  const rotateStyle = (index) => {
    const rotate = scrollX.interpolate({
      inputRange: [(index - 1) * 300, index * 300, (index + 1) * 300],
      outputRange: ['-45deg', '0deg', '45deg'],
      extrapolate: 'clamp',
    });
  
    // Continuously loop the rotation animation
    Animated.loop(
      Animated.timing(rotations[index], {
        toValue: 1,
        duration: 10000, // Adjust duration as needed for slower or faster rotation
        useNativeDriver: true,
      })
    ).start();
  
    return {
      transform: [{ rotate }],
    };
  };
  

  const scrollToNext = () => {
    if (selectedCard < 3) {
      setSelectedCard(selectedCard + 1);
      scrollViewRef.current.scrollTo({ x: selectedCard * CARD_WIDTH, animated: true });
      stopRotation(); // Stop rotation animation when scrolling
    }
  };

  const scrollToPrevious = () => {
    if (selectedCard > 1) {
      setSelectedCard(selectedCard - 1);
      scrollViewRef.current.scrollTo({ x: (selectedCard - 2) * CARD_WIDTH, animated: true });
      stopRotation(); // Stop rotation animation when scrolling
    }
  };





  return (
    <View style={styles.container}>
      <ScrollView>
        <HeaderUserName
          onPress={() => { navigation.navigate('Notification') }}
        />
        <SearchComponest
 
          onPress={() => {
            // setModalVisible(true)
          }}
        />
        <Image source={icons.pakageicon} style={styles.pakageimg} />
        <Text style={styles.make}>{string.Maksubscription}</Text>




        <View>
          <ScrollView
            // // horizontal
            // pagingEnabled
            // showsHorizontalScrollIndicator={false}
            // onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            //   useNativeDriver: false,
            // })}
            // scrollEventThrottle={16}
            ref={scrollViewRef}
            // horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            // contentContainerStyle={{ flexDirection: 'row' }}
            onScroll={(event) => {
              const offsetX = event.nativeEvent.contentOffset.x;
              const newIndex = Math.round(offsetX / CARD_WIDTH) + 1;
              setSelectedCard(newIndex);
            }}
           
            >
            <View>
              <View style={styles.sliderview}>

                <TouchableOpacity onPress={() => setSelectedCard(1)}
                  style={[
                    selectedCard === 1 ? styles.selectsilde : styles.sliderscreenview,
                    // rotateStyle(0)
                  ]}
                >
                  <Image source={icons.baiceimges} style={styles.imges}></Image>
                  <Text style={styles.textstyles}>{string.Basic}</Text>
                  <Text style={styles.textstyles3}>{string.PERMONTH}</Text>
                  <Text style={styles.textstylesrupe}> ₹ 500</Text>
                  <View style={styles.flexdrerowthree}>
                    <TouchableOpacity style={[styles.rightview]}>
                      <Image source={icons.check} style={styles.check}></Image>
                    </TouchableOpacity>
                    <Text style={styles.longestablishedfact}>{string.longestablishedfact}</Text>
                  </View>
                  <View style={[styles.flexdrerowthree, styles.flexdrerowthreere]}>
                    <TouchableOpacity style={styles.rightview}>
                      <Image source={icons.check} style={styles.check}></Image>
                    </TouchableOpacity>
                    <Text style={styles.longestablishedfact}>{string.opposedtousing}</Text>
                  </View>
                  <View style={[styles.flexdrerowthree, styles.flexdrerowthreere]}>
                    <TouchableOpacity style={styles.rightview}>
                      <Image source={icons.check} style={styles.check}></Image>
                    </TouchableOpacity>
                    <Text style={styles.longestablishedfact}>{string.webpageeditors}</Text>
                  </View>
                  <View style={[styles.flexdrerowthree, styles.flexdrerowthreere3]}>
                    <TouchableOpacity style={styles.rightview}>
                      <Image source={icons.check} style={styles.check}></Image>
                    </TouchableOpacity>
                    <Text style={styles.longestablishedfact}>{string.onlyfivecenturies}</Text>
                  </View>
                  <View style={styles.sunbutton}>
                    <Text style={styles.Subscribe}>{string.Subscribe}</Text>
                  </View>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => setSelectedCard(2)}
                  style={[
                    selectedCard === 2 ? styles.selectsilde2 : styles.sliderscreenview2,
                    // rotateStyle(1) 
                  ]}
                >
                  <Image source={icons.prumimg} style={styles.imges2}></Image>
                  <Text style={styles.textstyles2}>{string.Premium2}</Text>
                  <Text style={styles.textstyles4}>{string.PERMONTH}</Text>
                  <Text style={[styles.textstylesrupe,styles.textstylesrugreen]}> ₹ 500</Text>
                  <View style={styles.flexdrerowthree}>
                    <TouchableOpacity style={[styles.rightview, styles.rightview2]}>
                      <Image source={icons.check} style={styles.check}></Image>
                    </TouchableOpacity>
                    <Text style={styles.longestablishedfact}>{string.longestablishedfact}</Text>
                  </View>
                  <View style={[styles.flexdrerowthree, styles.flexdrerowthreere]}>
                    <TouchableOpacity style={[styles.rightview, styles.rightview2]}>
                      <Image source={icons.check} style={styles.check}></Image>
                    </TouchableOpacity>
                    <Text style={styles.longestablishedfact}>{string.opposedtousing}</Text>
                  </View>
                  <View style={[styles.flexdrerowthree, styles.flexdrerowthreere]}>
                    <TouchableOpacity style={[styles.rightview, styles.rightview2]}>
                      <Image source={icons.check} style={styles.check}></Image>
                    </TouchableOpacity>
                    <Text style={styles.longestablishedfact}>{string.webpageeditors}</Text>
                  </View>
                  <View style={[styles.flexdrerowthree, styles.flexdrerowthreere3]}>
                    <TouchableOpacity style={[styles.rightview, styles.rightview2]}>
                      <Image source={icons.check} style={styles.check}></Image>
                    </TouchableOpacity>
                    <Text style={styles.longestablishedfact}>{string.onlyfivecenturies}</Text>
                  </View>
                  <View style={[styles.sunbutton, styles.sunbutton2]}>
                    <Text style={styles.Subscribe}>{string.Subscribe}</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedCard(3)}
                  style={[
                    selectedCard === 3 ? styles.selectsilde3 : styles.sliderscreenview3,
                    // rotateStyle(2)
                  ]}
                >
                  <Image source={icons.prumimg} style={styles.imges2}></Image>
                  <Text style={[styles.textstyles2, styles.textstylesadd]}>{string.addvance}</Text>
                  <Text style={[styles.textstyles4, styles.textstylesadd]}>{string.PERMONTH}</Text>
                  <Text style={[styles.textstylesrupe,styles.textstylesrublue]}> ₹ 500</Text>

                  <View style={styles.flexdrerowthree}>
                    <TouchableOpacity style={[styles.rightview, styles.rightviewadd]}>
                      <Image source={icons.check} style={styles.check}></Image>
                    </TouchableOpacity>
                    <Text style={styles.longestablishedfact}>{string.longestablishedfact}</Text>
                  </View>
                  <View style={[styles.flexdrerowthree, styles.flexdrerowthreere]}>
                    <TouchableOpacity style={[styles.rightview, styles.rightviewadd]}>
                      <Image source={icons.check} style={styles.check}></Image>
                    </TouchableOpacity>
                    <Text style={styles.longestablishedfact}>{string.opposedtousing}</Text>
                  </View>
                  <View style={[styles.flexdrerowthree, styles.flexdrerowthreere]}>
                    <TouchableOpacity style={[styles.rightview, styles.rightviewadd]}>
                      <Image source={icons.check} style={styles.check}></Image>
                    </TouchableOpacity>
                    <Text style={styles.longestablishedfact}>{string.webpageeditors}</Text>
                  </View>
                  <View style={[styles.flexdrerowthree, styles.flexdrerowthreere3]}>
                    <TouchableOpacity style={[styles.rightview, styles.rightviewadd]}>
                      <Image source={icons.check} style={styles.check}></Image>
                    </TouchableOpacity>
                    <Text style={styles.longestablishedfact}>{string.onlyfivecenturies}</Text>
                  </View>
                  <View style={[styles.sunbutton, styles.textstylesaddbac]}>
                    <Text style={styles.Subscribe}>{string.Subscribe}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* <View style={{height:200, width:'95%', alignSelf:"center", backgroundColor:"red", justifyContent:"center"}}>
          <View style={{flexDirection:"row", alignSelf:"center"}}>
          <View style={{height:150, width:50, backgroundColor:'yellow', alignSelf:"center"}}></View>
          <View style={{height:150, width:50, backgroundColor:'pink', alignSelf:"center"}}></View>
          <View style={{height:150, width:50, backgroundColor:'green', alignSelf:"center", position:'absolute', top:0, right:20}}></View>
        </View>
        </View> */}
        <View style={styles.marbo} />
      </ScrollView>

    </View>
  )
}

export default Package

