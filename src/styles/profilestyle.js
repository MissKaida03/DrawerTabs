import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    padding: 10,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 170,
    height: 170,
    borderRadius: 95,
    borderWidth: 3,
    borderColor: '#f4a7c5',
    marginBottom: 15,
  },
  profileName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#D81B60',
    textShadowColor: "rgba(0, 0, 0, 0.6)",  
    textShadowOffset: { width: 1.5, height: 1.8},
    textShadowRadius: 2,
  
  },
  profileTitle: {
    fontSize: 16,
    color: 'black',
    fontWeight: '480',
    textShadowColor: "rgba(0, 0, 0, 0.4)",  
    textShadowOffset: { width: 1, height: 1.5 },
    textShadowRadius: 2,
  },
  inputName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f4a7c5',
    textAlign: 'center',
  },
  inputTitle: {
    fontWeight: '500',
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
  section: {
    marginHorizontal: 20,
    backgroundColor: '#fdfdfd',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#f4a7c5',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 14,
    color: '#444',
    marginBottom: 5,
    
  },
  textInput: {
    fontSize: 14,
    color: '#444',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 10,
  },
  skillItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  skillItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bullet: {
    fontSize: 18,
    marginRight: 10,
  },
  deleteButton: {
    fontSize: 16,
    color: '#f4a7c5',
  },
  addButton: {
    backgroundColor: '#f4a7c5',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '500',
  },
  footer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: '#F06292',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default styles;