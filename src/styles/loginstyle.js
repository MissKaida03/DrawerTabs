import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  loginContainer: {
    width: '90%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#ffb8d2',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginVertical: 5,
    color: '#fff',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#ffb8d2',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  passwordInput: {
    flex: 1,
    color: '#fff',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberText: {
    color: '#888',
  },
  forgotText: {
    color: '#888',
  },
  loginButton: {
    width: '90%',
    height: 43,
    backgroundColor: '#ffa4c2',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupText: {
    color: '#888',
    marginTop: 10,
    textAlign: 'center',
  },
  signupLink: {
    color: '#ffa4c2',
    fontWeight: 'bold',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 5,
    marginRight: 10,
  },
  logo: {
    width: 210, 
    height: 210, 
    resizeMode: 'contain',
    marginBottom: -10, 
  },
  welcomeText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#333',
  },
  signInText: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
});