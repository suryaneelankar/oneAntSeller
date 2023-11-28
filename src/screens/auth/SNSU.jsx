import {
    Alert,
    Button,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, {useState} from 'react';
  import TransparentModalWrapper from '../../components/wrappers/TransparentModalWrapper';
  import SVGIcon from '../../components/common/SvgIcon';
  import {COLORS} from '../../constants/Colors';
  import PhoneInput from '../../components/auth/PhoneInput';
  import PrimaryButton from '../../components/common/buttons/PrimaryButton';
  import auth, {firebase} from '@react-native-firebase/auth';
  import OtpVerification from '../../components/auth/OtpVerification';
  import FinishSignUp from '../../components/auth/FinishSignUp';
  import useAppStore from '../../utils/zustand/useAppStore';
  import ModalHeaders from '../../components/common/headers/ModalHeaders';
  
  const SNSU = ({navigation}) => {
    const [phone, setPhone] = useState('');
    const [confirm, setConfirm] = useState(null);
    const [step, setStep] = useState(0);
    const [code, setCode] = useState(Array(6).fill(''));
    const [form, setForm] = useState({
      FName: '',
      LName: '',
    });
    const [accept, setAccept] = useState(false);
  
    async function sendOtp() {
        setStep(1);

    //   useAppStore.getState().setIsLoading(true);
    //   try {
    //     const confirmation = await auth().signInWithPhoneNumber(`+91${phone}`);
    //     setConfirm(confirmation);
    //     if (confirmation) {
    //       setStep(1);
    //     }
    //     // console.log(confirmation);
    //   } catch (error) {
    //     console.log(error);
    //     Alert.alert('Something went wrong');
    //   }
  
    //   useAppStore.getState().setIsLoading(false);
    }
  
    async function confirmCode() {
                  setStep(2);

    //   useAppStore.getState().setIsLoading(true);
    //   try {
    //     const res = await confirm.confirm(code.join(''));
  
    //     if (res?.additionalUserInfo?.isNewUser) {
    //       setStep(2);
    //     } else {
    //       navigation.replace('BottomTabs');
    //     }
    //   } catch (error) {
    //     Alert.alert('Invalid code.');
    //   }
  
    //   useAppStore.getState().setIsLoading(false);
    }
  
    //updating user
    const updateData = {
      displayName: `${form.FName} ${form.LName}`,
    };
  
    async function updateUser() {
        navigation.replace('PickInterests')

    //   useAppStore.getState().setIsLoading(true);
    //   await firebase
    //     .auth()
    //     .currentUser.updateProfile(updateData)
    //     .then(() => navigation.replace('PickInterests'))
    //     .catch(e => console.log(e));
    //   useAppStore.getState().setIsLoading(false);
    }
  
    return (
      <TransparentModalWrapper upperHeight={step == 2 ? '29%' : '57%'}>
        <ModalHeaders label={'Sign in or Sign up'} />
  
        <View style={styles.container}>
          {step == 0 ? (
            <PhoneInput value={phone} setValue={e => setPhone(e)} />
          ) : step == 1 ? (
            <OtpVerification
              code={code}
              setCode={setCode}
              phone={phone}
              handleResend={sendOtp}
            />
          ) : step == 2 ? (
            <FinishSignUp
              phone={phone}
              form={form}
              setForm={setForm}
              accept={accept}
              setAccept={setAccept}
            />
          ) : null}
  
          <View style={{marginTop: 24}}>
            <PrimaryButton
              label={step == 2 ? 'Get Started' : 'Continue'}
              onPress={
                step == 0
                  ? sendOtp
                  : step == 1
                  ? confirmCode
                  : step == 2
                  ? updateUser
                  : null
              }
            />
          </View>
  
          {step == 2 && (
            <Text
              onPress={() => navigation.replace('BottomTabs')}
              style={{
                fontWeight: '400',
                fontSize: 14,
                color: COLORS.primary,
                textDecorationLine: 'underline',
                textAlign: 'center',
                marginTop: 20,
              }}>
              I’ll do it later
            </Text>
          )}
          <View style={{marginBottom: 300}} />
        </View>
      </TransparentModalWrapper>
    );
  };
  
  export default SNSU;
  
  const styles = StyleSheet.create({
    container: {marginTop: 30, marginHorizontal: 10},
  });
  