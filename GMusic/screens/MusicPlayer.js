import React, { useEffect, useRef, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
    Animated,
    Dimensions,
    Image,
    SafeAreaView,
    StyleSheet, 
    Text,
    TouchableOpacity, 
    View 
} from 'react-native'
import Slider from '@react-native-community/slider'
import{ Ionicons } from '@expo/vector-icons'
import songs from '../model/data'

const { width, height } = Dimensions.get('window');

const MusicPlayer = () => {

    const MusicPlayer = () => {
        const scrollX = useRef(new Animated.Value(0)). current;

        useEffect(() => {
            scrollX.addListener(({vakue}) => {
                console.log();
                const index = Math.round(value / width);
                console.log(`ScrollX : ${value} - Música: ${index}`);
            });
        }, []);
    }

    const renderSongs = ({ item, index }) => {
        return (
            <Animated.View style={styles.mainImageWrapper}>
                <View style={[styles.imageWrapper, styles.Elevation]}>
                    <Image source={item.artwork} style={styles.musicImage} />
                </View>
            </Animated.View>
        )
    }

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.main}>

        <Animated.FlatList
         renderItem={renderSongs}
         data={songs}
         keyExtractor={item => item.id}
         horizontal
         pagingEnabled
         showsHorizontalScrollIndicator={false}
         scrollEventThrottle={16}
         onScroll={Animated.event(
            [
                {
                    nativeEvent: {
                        contentOffset: {x: scrollX},
                    },
                },
            ],
            {useNativeDriver: true},
         )}
        />

        <View>
            <Text style={[styles.songContent, styles.songTitle]}>
                Titulo da Musica
            </Text>
            <Text style={[styles.songContent, styles.songArtist]}>
                Autor da Musica
            </Text>
        </View>

        <View>
            <Slider
                style={styçes.progressBar}
                value={10}
                minimumValue={0}
                maximumValue={100}
                thumbTintColor='#FFD369'
                minmumTrackTintColor='#FFD369'
                maxmumTrackTintColor='#FFF'
                onSlidingComplete={() => { }}
            />
            <View style={styles.progressLevelDuration}>
                <Text style={styles.progressLabelText}> 00:00</Text>
                <Text style={styles.progressLabelText}> 00:00</Text>
            </View>
        </View>

        <View style={styles.musicControlsContainer}>
            <TouchableOpacity onPress={() => { }}>
                <Ionicons name='play-skip-back-outline' size={35} color="FFD369" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }}>
                <Ionicons name='pause-circle' size={75} color="FFD369" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }}>
                <Ionicons name='play-skip-forward-outline' size={35} color="#FFD369" />
            </TouchableOpacity>
        </View>

    </View>
    <View style={styles.footer}>
    <View Style={StyleSheet.Wrapper}>
      <TouchableOpacity>
          <Ionicons name='heart-outline' size={30} color="#888888" />
      </TouchableOpacity>
      <TouchableOpacity>
          <Ionicons name='repeat' size={30} color="#888888" />
      </TouchableOpacity>
      <TouchableOpacity>
          <Ionicons name='share-outline' size={30} color="#888888" />
      </TouchableOpacity>
      <TouchableOpacity>
          <Ionicons name='ellipsis-horizontal' size={30} color="#888888" />
      </TouchableOpacity>
    </View>
    </View>

    <StatusBar style="light" />

  </SafeAreaView>
  )
}

export default MusicPlayer

    const styles = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: '#222831',
    },

    main:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },

    mainImageWrapper: {
        width: width,
        justify: 'center',
        alignItems: 'center'
    },

    musicImage: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
    },

    songContent: {
        textAlign: 'center',
        color: '#EEEEEE'
    },

    songTitle: {
       fontSize: 18,
       fontWeight: '600',
    },

    songArtist: {
        fontSize: 16,
        fontWeight: '300',
    },

    progressBar: {
        width: 340,
        height: 40,
        marginTop: 20,
        flexDirection: 'row'
    },

    progressLevelDuration: {
        width: 340,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '60%',
        marginTop: 10,

    },

    footer:{
        width: width,
        alignItems: 'center',
        paddingVertical: 15,
        borderColor: '#393E45',
        borderWidth: 1
    },

    iconWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%'
    },

    elevation: {
        elevation: 5,
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84
    }
})