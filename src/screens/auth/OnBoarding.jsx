import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Alert,
    Platform,
  } from 'react-native';
  import React, {useEffect} from 'react';
  import AppSlider from '../../components/common/AppSlider';
  import {IMAGES} from '../../assets/images';
  import SVGIcon from '../../components/common/SvgIcon';
  import PrimaryButton from '../../components/common/buttons/PrimaryButton';
  import {COLORS} from '../../constants/Colors';
  import PrimaryButtonWithIcon from '../../components/common/buttons/PrimaryButtonWithIcon';
  import {GoogleSignin} from '@react-native-google-signin/google-signin';
  import auth from '@react-native-firebase/auth';
  import useAppStore from '../../utils/zustand/useAppStore';
  
  const {width, height} = Dimensions.get('screen');
  
  const OnBoarding = ({navigation}) => {
    useEffect(() => {
      GoogleSignin.configure({
        webClientId:
          '845601842250-g78kbea3gvd3novpnsgkc6d6r6iskstt.apps.googleusercontent.com',
        // offlineAccess: true,
      });
    }, []);
  
    async function onGoogleButtonPress() {
      useAppStore.getState().setIsLoading(true);
      try {
        await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
        const {idToken} = await GoogleSignin.signIn();
  
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
        if (googleCredential?.token) {
          navigation.navigate('BottomTabs');
        }
        // console.log(googleCredential?.token);
        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
      } catch (error) {
        console.log(error);
        Alert.alert('something went wrong!');
      }
      useAppStore.getState().setIsLoading(false);
    }
  
    const renderItem = () => {
      return (
        <ImageBackground source={IMAGES.onboarding1} style={styles.bgImage}>
          <View style={styles.content}>
            <SVGIcon name="antWhiteLogo" height={50} width={120} />
            <Text style={styles.label}>
              Sign in to unlock group shopping experience with great deals!
            </Text>
          </View>
        </ImageBackground>
      );
    };
  
    return (
      <View style={styles.container}>
        <AppSlider
          data={[1, 2, 3]}
          renderItem={renderItem}
          dotSize={50}
          dotsContainerStyle={styles.dotsContainerStyle}
        />
  
        <View style={styles.CtaContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              label="Continue with Phone Number"
              onPress={() => navigation.navigate('SNSU')}
            />
          </View>
  
          <OrDevider />
  
          <PrimaryButtonWithIcon
            iconName="google"
            label="Continue with Google"
            onPress={onGoogleButtonPress}
          />
          <View style={{marginTop: 12}}>
            <PrimaryButtonWithIcon
              iconName="facebook"
              label="Continue with Facebook"
            />
          </View>
        </View>
      </View>
    );
  };
  
  export default OnBoarding;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    dotsContainerStyle: {
      position: 'absolute',
      left: 8,
      bottom: '37%',
      zIndex: 10,
    },
    bgImage: {height: height, width: width},
    label: {
      fontSize: 18,
      fontWeight: '500',
      color: '#fff',
      marginTop: 12,
    },
    content: {
      marginTop: height * 0.42,
      marginHorizontal: 14,
    },
    buttonContainer: {marginTop: '12%'},
    orContainer: {
      height: 40,
      alignSelf: 'center',
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 10,
      marginVertical: 16,
    },
    border: {
      borderTopWidth: 1,
      width: '42%',
      borderColor: COLORS.gray800,
      marginTop: -4,
    },
    CtaContainer: {
      position: 'absolute',
      bottom: '6%',
      width: '94%',
      alignSelf: 'center',
    },
  });
  
  const OrDevider = () => {
    return (
      <View style={styles.orContainer}>
        <View style={styles.border} />
        <Text
          style={{
            fontSize: 12,
            fontWeight: '600',
            borderRadius: 24,
            paddingVertical: 4,
            paddingHorizontal: 14,
            backgroundColor: COLORS.primary,
            color: '#fff',
          }}>
          OR
        </Text>
        <View style={styles.border} />
      </View>
    );
  };
  