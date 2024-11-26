import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  dashboardContainer: {
  flex: 1,
  padding: 20,
  justifyContent: 'center', 
},
dashboardTitle: {
  fontSize: 26,
  fontWeight: 'bold',
  color: '#D81B60',
  marginBottom: 20,
  textAlign: 'center',
  fontFamily: 'serif',
  backgroundColor: 'rgba(244, 167, 197, 0.1)',
  padding: 10,
},

  newEntryContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fce8f1', 
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D81B60', 
  },
  newEntryTitle: {
    fontSize: 18,
    borderBottomWidth: 1,
    borderColor: '#D81B60',
    marginBottom: 10,
    color: '#f4a7c5',
    fontFamily: 'serif',
  },
  newEntryDate: {
    fontSize: 14,
    borderBottomWidth: 1,
    borderColor: '#D81B60',
    marginBottom: 10,
    color: '#f4a7c5',
    fontFamily: 'serif',
  },
  newEntryContent: {
    fontSize: 14,
    color: '#444',
    textAlignVertical: 'top',
    height: 80,
    borderWidth: 1,
    borderColor: '#D81B60',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontFamily: 'serif',
  },
  addButton: {
    backgroundColor: '#F06292',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  diaryContainer: {
    flexGrow: 1,
  },
  diaryEntry: {
    backgroundColor: '#fce8f1', 
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D81B60', 
  },
  entryContentContainer: {
    flex: 1,
  },
  entryDate: {
    fontSize: 14,
    color: '#F06292', 
    marginBottom: 5,
    fontFamily: 'serif',
  },
  entryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F06292', 
    fontFamily: 'serif',
  },
  entryContent: {
    fontSize: 14,
    color: '#444',
    fontFamily: 'serif',
  },
  entryButtons: {
    flexDirection: 'row',
  },
  editButton: {
    color: '#ff85ad', 
    marginRight: 10,
    fontFamily: 'serif',
  },
  deleteButton: {
    color: '#d9534f',
    fontFamily: 'serif',
  },
  editContainer: {
    backgroundColor: '#f4a7c5',
    padding: 20,
    borderRadius: 10,
  },
  editTitle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#fff',
    fontFamily: 'serif',
  },
  editInput: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'serif',
    borderWidth: 1,
    borderColor: '#D81B60', 
  },
  editButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  saveButton: {
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 5,
  },
  cancelButton: {
    backgroundColor: '#d9534f',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default styles;