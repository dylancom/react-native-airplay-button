# react-native-airplay-cast

Stream audio or video to AirPlay-enabled devices with a customizable AirPlay button.

## Installation

```sh
npm install react-native-airplay-cast --save

```

**React Native 0.60 and above**

Run `npx pod-install`. Linking is not required in React Native 0.60 and above.

**React Native 0.59 and below**

Run `react-native link react-native-airplay-cast` to link the react-native-airplay-cast library.

## Usage

```js
import { AirPlayButton } from "react-native-airplay-cast";

<AirPlayButton 
  activeTintColor="blue"
  tintColor="black"
  style={{ width: 30, height: 30 }}
/>
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
