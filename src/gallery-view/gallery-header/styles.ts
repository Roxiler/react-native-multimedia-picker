import { StyleSheet } from 'react-native';
import { scale } from '../../utils/common';

export const styles = StyleSheet.create({
  title: {
    color: 'black',
    marginLeft: scale(16),
    alignSelf: 'center',
  },
  header: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(10),
    paddingVertical: scale(6),
  },
  closeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scale(11),
    paddingVertical: scale(10),
  },
  cameraButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scale(15),
    paddingVertical: scale(10),
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  imageContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
