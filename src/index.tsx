import { NativeModules } from 'react-native';

type AirplayCastType = {
  multiply(a: number, b: number): Promise<number>;
};

const { AirplayCast } = NativeModules;

export default AirplayCast as AirplayCastType;
