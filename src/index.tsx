import { requireNativeComponent, ViewProps } from 'react-native';

// type AirPlayCastType = {
// };

// const { AirPlayCast } = NativeModules;

type AirPlayButtonProps = ViewProps & {
  activeTintColor?: string;
  tintColor?: string;
  style?: React.CSSProperties;
};

export const AirPlayButton = requireNativeComponent<AirPlayButtonProps>(
  'RNAirPlayButton'
);

// export default AirPlayCast as AirPlayCastType;
