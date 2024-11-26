import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: -10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#ffb8d2',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginVertical: 10,
    color: '#333',
  },
  button: {
    width: '60%',
    height: 43,
    backgroundColor: '#ffa4c2',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backToLogin: {
    fontSize: 16,
    color: '#888',
  },
  loginLink: {
    color: '#ffa4c2',
    fontWeight: 'bold',
  },
});