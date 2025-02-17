import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import LottieView from 'lottie-react-native';
import {getSecureItem, setSecureItem} from '../utils';
import {getInsights, getMenstruationDays, getProfile, login} from '../api';
import {setToken} from '../store/auth_slice.ts';
import {splashAnimation} from '../assets/anims';

const SplashScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const animationRef = useRef<LottieView>(null);
  const [animationCount, setAnimationCount] = useState(0);
  const [apiFinished, setApiFinished] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const initializeApp = async () => {
      try {
          let token = await getSecureItem('token');
        if (!token) {
            console.log('Token not found, logging in');
          const loginResponse = await login('salar@beije.co', 'beijeApp');
          token = loginResponse.data.token;
          await setSecureItem('token', token!);
        }
        console.log('Token found, setting token');
        console.log('Token: ', token);

        dispatch(setToken(token!));

        /*const [profile, menstruation, insights] = await Promise.all([
          getProfile(token!),
          getMenstruationDays(token!),
          getInsights(token!),
        ]);*/

        /*dispatch(setProfile(profile));
        dispatch(setMenstruationDays(menstruation));
        dispatch(setInsights(insights));*/

        setApiFinished(true);
      } catch (error) {
        console.error('Error during initialization:', error);
      }
    };

    initializeApp();
  }, [dispatch]);

  useEffect(() => {
    if (animationCount >= 3 && apiFinished) {
        console.log('Navigating to Home');
    }
  }, [animationCount, apiFinished, navigation]);

  const onAnimationFinish = () => {
    setAnimationCount(animationCount + 1);
    animationRef.current?.play();
  };

  return (
    <View style={styles.container}>
      <LottieView
        ref={animationRef}
        source={splashAnimation}
        autoPlay
        loop={false}
        style={styles.animation}
        onAnimationFinish={onAnimationFinish}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    animation: {
        width: 300,
        height: 300,
    },
});

export default SplashScreen;
