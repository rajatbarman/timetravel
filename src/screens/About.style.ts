import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#000',
    paddingHorizontal: 24,
  },

  note: {
    marginTop: 60,
    alignItems: 'center',
  },

  whiteColor: {
    fontSize: 18,
    color: '#fff',
  },

  suggestions: {
    marginTop: 20,
    alignItems: 'center',
  },

  suggestion: {
    paddingVertical: 12,
    color: '#fff',
    fontSize: 18,
    textDecorationLine: 'underline',
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
    backgroundColor: '#fff',
    borderWidth: 4,
    borderColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: '#fff',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
