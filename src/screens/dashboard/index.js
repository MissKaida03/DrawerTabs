import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, ImageBackground, Image } from 'react-native';  
import styles from '../../styles/homestyle'; 

const Dashboard = () => {
  const [diaryEntries, setDiaryEntries] = useState([
    { id: 1, date: 'Nov 20, 2024', title: 'A Fresh Start', content: 'Feeling excited!' },
    { id: 2, date: 'Nov 21, 2024', title: 'Lab Exam Day!', content: 'Feeling Nervous :<' },
  ]);

  const [editingEntry, setEditingEntry] = useState(null); 
  const [newContent, setNewContent] = useState(''); 
  const [newTitle, setNewTitle] = useState('');
  const [newDate, setNewDate] = useState(''); 
  const [newEntryContent, setNewEntryContent] = useState(''); 

  const handleEdit = (entry) => {
    setEditingEntry(entry);
    setNewContent(entry.content);
    setNewTitle(entry.title);
    setNewDate(entry.date);
  };

  const handleSave = () => {
    setDiaryEntries((prevEntries) =>
      prevEntries.map((entry) =>
        entry.id === editingEntry.id
          ? { ...entry, content: newContent, title: newTitle, date: newDate }
          : entry
      )
    );
    setEditingEntry(null);
  };

  const handleAddEntry = () => {
    if (newTitle && newEntryContent) {
      const newEntry = {
        id: diaryEntries.length + 1,
        date: new Date().toLocaleDateString(),
        title: newTitle,
        content: newEntryContent,
      };
      setDiaryEntries([newEntry, ...diaryEntries]);
      setNewTitle('');
      setNewEntryContent('');
    }
  };

  const handleDelete = (id) => {
    setDiaryEntries((prevEntries) => prevEntries.filter((entry) => entry.id !== id));
  };

  return (
    <ImageBackground
      source={require('../../assets/home-bg.jpg')}
      style={styles.dashboardContainer} 
      resizeMode="cover"
    >
      <View style={styles.dashboardContainer}>
        <Text style={styles.dashboardTitle}>My Diary</Text>

        {/* Add New Entry */}
        <View style={styles.newEntryContainer}>
          <TextInput
            style={styles.newEntryTitle}
            placeholder="Title"
            value={newTitle}
            onChangeText={setNewTitle}
          />
          <TextInput
            style={styles.newEntryDate}
            placeholder="Date"
            value={newDate}
            onChangeText={setNewDate}
          />
          <TextInput
            style={styles.newEntryContent}
            placeholder="Write your diary entry..."
            multiline
            value={newEntryContent}
            onChangeText={setNewEntryContent}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddEntry}>
            <Text style={styles.buttonText}>Add Entry</Text>
          </TouchableOpacity>
        </View>

        {/* Diary Entries */}
        <ScrollView contentContainerStyle={styles.diaryContainer}>
          {diaryEntries.map((entry) => (
            <View key={entry.id} style={styles.diaryEntry}>
              <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2917/2917242.png' }}
                style={styles.roseIcon}
              />
              <View style={styles.entryContentContainer}>
                <Text style={styles.entryDate}>{entry.date}</Text>
                <Text style={styles.entryTitle}>{entry.title}</Text>
                <Text style={styles.entryContent}>{entry.content}</Text>
              </View>
              <View style={styles.entryButtons}>
                <TouchableOpacity onPress={() => handleEdit(entry)}>
                  <Text style={styles.editButton}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDelete(entry.id)}>
                  <Text style={styles.deleteButton}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Editable Section */}
        {editingEntry && (
          <View style={styles.editContainer}>
            <Text style={styles.editTitle}>Editing "{editingEntry.title}"</Text>
            <TextInput
              style={styles.editInput}
              value={newTitle}
              onChangeText={setNewTitle}
            />
            <TextInput
              style={styles.editInput}
              value={newDate}
              onChangeText={setNewDate}
            />
            <TextInput
              style={styles.editInput}
              multiline
              value={newContent}
              onChangeText={setNewContent}
            />
            <View style={styles.editButtons}>
              <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setEditingEntry(null)}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </ImageBackground>
  );
};

export default Dashboard;