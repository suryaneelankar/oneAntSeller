import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {IMAGES} from '../../assets/images';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const checkUserLogin = async () => {
      try {
        const user = auth().currentUser;
        // const user = false;
        if (user) {
          // User is signed in, you can access user information
          // console.log('User Info:', user);
        //   navigation.replace('BottomTabs');
        } else {
          // User is not signed in
          // Check if the user has signed in using Google
          await GoogleSignin.configure({
            webClientId:
              '845601842250-g78kbea3gvd3novpnsgkc6d6r6iskstt.apps.googleusercontent.com',
          });
          const isGoogleUser = await GoogleSignin.isSignedIn();

          if (isGoogleUser) {
            // User is signed in with Google, you can access Google user information
            const googleUserInfo = await GoogleSignin.signInSilently();
            // console.log('Google User Info:', googleUserInfo);
            // navigation.replace('BottomTabs');
          } else {
            // User is not signed in with Google or phone number
            navigation.replace('OnBoarding');
          }
        }
      } catch (error) {
        console.error('Error checking user login:', error);
        // Handle errors
      }
    };

    checkUserLogin();
  }, [navigation]);

  return (
    <View style={{flex: 1}}>
      <Image source={IMAGES.Splash} style={{height: '100%', width: '100%'}} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
