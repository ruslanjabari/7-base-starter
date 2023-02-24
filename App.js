import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { Button, Input } from 'react-native-elements';

export default function App() {
  const [fetchedSongs, setFetchedSongs] = useState([]);
  const [songName, setSongName] = useState(''); // song we are going to add
  const [artistName, setArtistName] = useState(''); // artist we are going to add

  const addSong = async () => {
  }

  const getSongs = async () => {
  }

  return (
    <View style={styles.container}>
      {fetchedSongs.map((song) => (
        <Text key={song.id}>{song.title} by {song.artist}</Text>
      ))}
      <Input placeholder="Song Title" onChange={setSongName} value={songName} />
      <Input placeholder="Song Artist" onChange={setArtistName} value={artistName} />
      <Button title="Add Song" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
