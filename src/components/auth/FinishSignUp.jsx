import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import InputBox from '../common/inputs/InputBox';
import {IMAGES} from '../../assets/images';
import {COLORS} from '../../constants/Colors';
import SwitchButton from '../common/buttons/SwitchButton';

const FinishSignUp = ({accept, setAccept, form, setForm}) => {
  return (
    <View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={IMAGES.ProfilePicPicker}
          style={{height: 140, width: 140}}
          resizeMode="cover"
        />
        <Text
          style={{
            fontWeight: '500',
            fontSize: 16,
            marginBottom: 20,
            color: COLORS.primary,
          }}>
          Upload your photo
        </Text>
      </View>

      <InputBox
        placeholder="First name"
        value={form.FName}
        setValue={e =>
          setForm({
            FName: e,
            LName: form?.LName || '',
          })
        }
      />

      <View style={{marginTop: 24}}>
        <InputBox
          placeholder="Last name"
          value={form.LName}
          setValue={e =>
            setForm({
              FName: form?.FName || '',
              LName: e,
            })
          }
        />
      </View>

      <View style={{marginTop: 24, flexDirection: 'row', columnGap: 12}}>
        <SwitchButton setAccept={setAccept} isTrue={accept} />

        <Text style={{fontWeight: '400', fontSize: 14, color: COLORS.primary}}>
          I accept T&C & Privacy Policy
        </Text>
      </View>
    </View>
  );
};

export default FinishSignUp;
