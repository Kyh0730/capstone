//시작화면
import { useRouter } from 'expo-router';
import * as React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={{ uri: 'https://www.kduniv.ac.kr/attach/IMAGE/mimban/TMPL00/2021/9/GfnCrGlJ8SfmAPFIgpT5.jpg' }}
      style={styles.background}
      blurRadius={2}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>KDUKIT</Text>
        <Text style={styles.subtitle}>보다 편리한 경동대학교 생활</Text>
        <Button
          mode="contained"
          style={styles.button}
          labelStyle={{ fontSize: 17, fontWeight: 'bold' }}
          buttonColor="#2E4D8A"
          textColor="#fff"
          onPress={() => {
            router.push('/(auth)/login');
          }}
        >
          로그인
        </Button>
        <Button
          mode="text"
          style={styles.signupButton}
          labelStyle={{ fontSize: 15 }}
          textColor="#2E4D8A"
          onPress={() => {
            router.push('/(auth)/SignupScreen');
          }}
        >
          회원가입
        </Button>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.75)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  title: {
    fontSize: 65,
    fontWeight: 'bold',
    color: '#2E4D8A',
    marginBottom: 3,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#333',
    marginBottom: 51,
    textAlign: 'center',
  },
  button: {
    width: '80%',
    paddingVertical: 8,
    borderRadius: 10,
    elevation: 2,
    marginBottom: 10,
  },
  signupButton: {
    marginTop: 5,
  },
});