import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  registerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  registerImage: {
    width: 230,
    height: 230,
    resizeMode: 'contain',
    marginBottom: -10,
    marginTop: -20,
  },
  registerTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#333',
  },
  registerSubtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
  input: {
    width: '90%',
    height: 50,
    backgroundColor: '#ffb8d2',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginVertical: 8,
    color: '#fff',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height: 50,
    backgroundColor: '#ffb8d2',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginVertical: 8,
  },
  passwordInput: {
    flex: 1,
    color: '#fff',
  },
  registerButton: {
    width: '60%',
    height: 43,
    backgroundColor: '#ffa4c2',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    marginBottom: 2,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginRedirectText: {
    color: '#888',
    marginTop: 10,
    textAlign: 'center',
  },
  loginRedirectLink: {
    color: '#ffa4c2',
    fontWeight: 'bold',
  },
});