import { requireNativeComponent, ViewProps } from 'react-native';

type AirPlayButtonProps = ViewProps & {
  activeTintColor?: string;
  tintColor?: string;
  prioritizesVideoDevices?: boolean;
  style?: React.CSSProperties;
};

const AirPlayButton = requireNativeComponent<AirPlayButtonProps>(
  'RNAirPlayButton'
);

export default AirPlayButton;
