import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import images from '@/constants/images';
import icons from '@/constants/icons';

const SignIn = () => {
  const handelLogin = () => {
    console.log('Login');
  };
  return (
    <SafeAreaView className=" bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className=" w-full h-4/6"
          resizeMode="contain"
        />

        <View className=" px-10">
          <Text className="text-base text-center font-rubik uppercase text-black-200">
            Welcome to ReState
          </Text>
          <Text className="text-center mt-2 font-rubik-bold text-black-300 text-3xl">
            Let's Get You Closer to {'\n'}
            <Text className=" text-primary-300">Your Ideal Home</Text>
          </Text>

          <Text className=" mt-12 text-lg text-center text-black-200 font-rubik">
            Login to ReState with Google
          </Text>

          <TouchableOpacity
            onPress={handelLogin}
            className=" bg-white shadow-md shadow-zinc-300 rounded-full w-full py-3 mt-5"
          >
            <View className=" flex flex-row justify-center items-center">
              <Image
                source={icons.google}
                className=" w-5 h-5"
                resizeMode="contain"
              />
              <Text className="text-lg text-black-300 font-rubik-medium ml-2">
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
