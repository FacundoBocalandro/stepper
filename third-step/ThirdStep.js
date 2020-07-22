import React, {useEffect, useState} from 'react';
import {Text} from 'native-base';
import MapView from 'react-native-maps';
import {StyleSheet, Dimensions} from 'react-native';

export default function ThirdStep() {
    const [info, setInfo] = useState({})
    const [fetched, setFetched] = useState(false);

    useEffect(() => {
        console.log(info);
        if (!fetched) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const location = JSON.stringify(position);
                    setFetched(true);
                    setInfo(location);
                },
                error => Alert.alert(error.message),
                // {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
            );
        }
    })

    return (
        fetched?
            <MapView
                style={styles.mapStyle}
                region={{
                    latitude: info.coords.latitude,
                    longitude: info.coords.longitude,
                    latitudeDelta: 0,
                    longitudeDelta: 0,
                }}
            />
            :
            <></>
    )
}

const styles = StyleSheet.create({
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});
