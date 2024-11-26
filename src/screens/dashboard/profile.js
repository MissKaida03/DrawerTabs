import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import styles from '../../styles/profilestyle'; 

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileName, setProfileName] = useState('Kristal Angeline Sarsoza');
  const [profileTitle, setProfileTitle] = useState('Creative Designer & Developer');
  const [about, setAbout] = useState(
    'I am passionate about crafting visually stunning designs and building intuitive applications.'
  );
  const [skills, setSkills] = useState([
    'UI/UX Design',
    'Front-End Development',
    'Microsoft Office',
    'Digital design tools',
  ]);
  const [education, setEducation] = useState([
    'Bachelor of Science in Information Technology - University of Science and Technology of Southern Philippines (2022-Present)',
  ]);
  const [contact, setContact] = useState({
    email: 'sarsoza.kristal2003@gmai.com',
    phone: '0955-480-9007',
    location: 'Cagayan de Oro City, Philippines',
  });

  const handleAddSkill = () => setSkills([...skills, '']);
  const handleDeleteSkill = (index) => setSkills(skills.filter((_, i) => i !== index));

  return (
    <ImageBackground
      source={require('../../assets/bg-profile.jpg')} 
      style={styles.profileContainer} 
      resizeMode="cover" 
    >
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <TouchableOpacity onPress={() => console.log('Image upload triggered')}>
            <Image
              source={require('../../assets/profile-kristal.jpg')}
              style={styles.profileImage}
            />
          </TouchableOpacity>
          {isEditing ? (
            <TextInput
              style={styles.inputName}
              value={profileName}
              onChangeText={setProfileName}
            />
          ) : (
            <Text style={styles.profileName}>{profileName}</Text>
          )}
          {isEditing ? (
            <TextInput
              style={styles.inputTitle}
              value={profileTitle}
              onChangeText={setProfileTitle}
            />
          ) : (
            <Text style={styles.profileTitle}>{profileTitle}</Text>
          )}
        </View>

        {/* About Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Me</Text>
          {isEditing ? (
            <TextInput
              style={[styles.sectionContent, styles.textInput]}
              value={about}
              onChangeText={setAbout}
              multiline
            />
          ) : (
            <Text style={styles.sectionContent}>{about}</Text>
          )}
        </View>

        {/* Skills Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          {skills.map((skill, index) => (
            <View key={index} style={styles.skillItemContainer}>
              {isEditing ? (
                <TextInput
                  style={[styles.sectionContent, styles.textInput]}
                  value={skill}
                  onChangeText={(text) => {
                    const updatedSkills = [...skills];
                    updatedSkills[index] = text;
                    setSkills(updatedSkills);
                  }}
                />
              ) : (
                <View style={styles.skillItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.sectionContent}>{skill}</Text>
                </View>
              )}
              {isEditing && (
                <TouchableOpacity onPress={() => handleDeleteSkill(index)}>
                  <Text style={styles.deleteButton}>✖</Text>
                </TouchableOpacity>
              )}
            </View>
          ))}
          {isEditing && (
            <TouchableOpacity onPress={handleAddSkill} style={styles.addButton}>
              <Text style={styles.addButtonText}>+ Add Skill</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Education Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {education.map((edu, index) => (
            <Text key={index} style={styles.sectionContent}>
              {edu}
            </Text>
          ))}
        </View>

        {/* Contact Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact</Text>
          {isEditing ? (
            <>
              <TextInput
                style={[styles.sectionContent, styles.textInput]}
                value={contact.email}
                onChangeText={(text) => setContact({ ...contact, email: text })}
                placeholder="Email"
              />
              <TextInput
                style={[styles.sectionContent, styles.textInput]}
                value={contact.phone}
                onChangeText={(text) => setContact({ ...contact, phone: text })}
                placeholder="Phone"
              />
              <TextInput
                style={[styles.sectionContent, styles.textInput]}
                value={contact.location}
                onChangeText={(text) => setContact({ ...contact, location: text })}
                placeholder="Location"
              />
            </>
          ) : (
            <>
              <Text style={styles.sectionContent}>Email: {contact.email}</Text>
              <Text style={styles.sectionContent}>Phone: {contact.phone}</Text>
              <Text style={styles.sectionContent}>Location: {contact.location}</Text>
            </>
          )}
        </View>

        {/* Edit Button */}
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => setIsEditing(!isEditing)}
          >
            <Text style={styles.editButtonText}>{isEditing ? 'Save' : 'Edit Profile'}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}