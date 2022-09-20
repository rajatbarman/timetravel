import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
  },

  inputGroup: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    paddingHorizontal: 20,
    alignItems: 'center',
  },

  dateInput: {
    marginTop: 20,
    color: '#000',
  },

  roundButtonContainer: {
    position: 'absolute',
    bottom: 120,
    left: 0,
    right: 0,
    alignItems: 'center',
  },

  roundButton: {
    width: 40,
    height: 40,
    backgroundColor: '#000000',
    borderWidth: 4,
    borderColor: '#fff',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    borderRadius: 50,
  },

  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
    left: 0,
    right: 0,
  },

  dateInputContainer: {
    borderTopWidth: 1,
    borderColor: '#fff',
  },
});
