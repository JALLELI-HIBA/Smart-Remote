import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Animated, Easing } from 'react-native';
import { hp, wp } from 'react-native-responsive-screen';
import Background from './Background';
import Btn from './Btn';
import { darkGreen } from './Constants';

const Home = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateYAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true
      }
    ).start();
    
    Animated.loop(
      Animated.sequence([
        Animated.timing(
          translateYAnim,
          {
            toValue: -3,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true
          }
        ),
        Animated.timing(
          translateYAnim,
          {
            toValue: 3,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true
          }
        )
      ])
    ).start();
  }, [fadeAnim, translateYAnim]);

  return (
    <Background>
      <View style={styles.container}>
        <Animated.Text style={[styles.header, styles.marginBottom, { opacity: fadeAnim, transform: [{ translateY: translateYAnim }] }]}>
          Welcome
        </Animated.Text>
        <Btn bgColor={darkGreen} textColor='white' btnLabel="SignIn" Press={() => props.navigation.navigate("SignIn")} />
        <Btn bgColor='white' textColor={darkGreen} btnLabel="Signup" Press={() => props.navigation.navigate("Signup")} />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp('10%'),
    marginVertical: hp('10%'),
  },
  header: {
    color: 'white',
    fontSize: hp('5%'),
    textAlign: 'center',
    marginTop: hp('10%'),
    marginBottom: hp('1%'),
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: wp('-0.25%'), height: hp('0.1%') },
    textShadowRadius: hp('1%')
  },
  marginBottom: {
    marginBottom: hp('5%'),
  },
});

export default Home;
