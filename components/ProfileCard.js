import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Platform, Alert } from 'react-native';

// ProfileCard bileşeni, name, role ve imageSource prop'larını almalıdır [cite: 57]
const ProfileCard = ({ name, role, imageSource }) => { 
  
  // Bölüm 4: Etkileşim Ekleme adımı için şimdiden handlePress fonksiyonunu ekleyelim [cite: 104, 111]
  const handlePress = () => {
    // Alert.alert() ile mesaj gösterilmelidir [cite: 112]
    Alert.alert("Profil Dokunuldu", `${name}'in profiline dokundunuz.`); 
  };

  return (
    // Kartın tüm View'ini TouchableOpacity içine sarıyoruz [cite: 110]
    // onPress prop'una handlePress fonksiyonunu geçirin [cite: 113]
    <TouchableOpacity onPress={handlePress} style={styles.card}> 
        
        {/* Avatar için Image bileşeni [cite: 59] */}
        <Image 
          source={imageSource} 
          style={styles.avatar} 
          resizeMode="cover"
        />
        
        {/* İsim için Text bileşeni [cite: 59] */}
        <Text style={styles.name}>{name}</Text>
        
        {/* Rol için Text bileşeni [cite: 60] */}
        <Text style={styles.role}>{role}</Text>
    </TouchableOpacity>
  );
};

// StyleSheet.create kullanarak stiller tanımlandı [cite: 62]
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white', // Beyaz arka plan [cite: 63]
    padding: 20, // Padding [cite: 63]
    borderRadius: 10, // Köşeleri yumuşatmak için [cite: 63]
    alignItems: 'center', // İçeriği yatay olarak ortalamak için [cite: 63]
    marginVertical: 10, // Kartlar arasında boşluk [cite: 64]
    
    // Gölge stilleri (Platform-özel stil) [cite: 69]
    ...Platform.select({
      ios: {
        shadowColor: '#000', // [cite: 73]
        shadowOffset: { width: 0, height: 2 }, // [cite: 74]
        shadowOpacity: 0.1, // [cite: 75]
        shadowRadius: 4, // [cite: 76]
      },
      android: {
        elevation: 3, // Bu Android için [cite: 77]
      },
    }),
  },
  avatar: {
    width: 100, // Genişlik [cite: 65]
    height: 100, // Yükseklik [cite: 65]
    borderRadius: 50, // width/height'in yarısı (100/2) dairesel yapmak için [cite: 65]
    marginBottom: 15, // Alt boşluk [cite: 65]
  },
  name: {
    fontSize: 20, // Daha büyük yazı tipi [cite: 66]
    fontWeight: 'bold', // Kalın yazı tipi [cite: 66]
    marginBottom: 5,
  },
  role: {
    fontSize: 14, // Biraz daha küçük yazı tipi [cite: 67]
    color: 'gray', // Gri renk [cite: 67]
  },
});

export default ProfileCard;