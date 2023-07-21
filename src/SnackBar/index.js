import Snackbar from 'react-native-snackbar';
import { Colours } from '../Components/Colors';

export default function SnackBar(message, error, duration) {
  Snackbar.show({
    text: message,
    textColor: Colours.white,
    duration: duration == 'long' ? Snackbar.LENGTH_LONG : Snackbar.LENGTH_SHORT,
    backgroundColor: error ? Colours.lightgrey : Colours.blue,
  });
}