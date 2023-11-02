import * as React from 'react';
import {View} from 'react-native';
import {Formik} from 'formik';

import {ThemedText} from '@src/Config/Theme';
import {CreateAccountNavigationProps} from '@src/Routes/Partials';
import {BackButton, Button, Input} from '@src/Components';

import {useCreateAccountStyle} from './createAccount.styles';
import {ScreenContainer} from '@src/Screens';

export const PersonalData = ({
  navigation,
}: CreateAccountNavigationProps<'PersonalData'>) => {
  const styles = useCreateAccountStyle();

  return (
    <ScreenContainer isRotated>
      <BackButton onPress={() => navigation.goBack()} />
      <View style={styles.titleContainer}>
        <ThemedText variant="title" marginBottom="xl">
          Fill in your bio to get started
        </ThemedText>
        <ThemedText variant="subtitle" marginBottom="xl">
          This data will be displayed in your account profile for security
        </ThemedText>
      </View>
      <Formik
        initialValues={{username: '', email: '', password: ''}}
        onSubmit={() => navigation.navigate('PersonalData')}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            <View style={styles.form}>
              <Input
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
              />
              <Input
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <Input
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
              />
            </View>
            <View style={styles.buttonsContainer}>
              <Button
                buttonVariant="buttonPrimary"
                textVariant="buttonPrimary"
                label="Send verification code"
                onPress={handleSubmit}
              />
            </View>
          </View>
        )}
      </Formik>
    </ScreenContainer>
  );
};
