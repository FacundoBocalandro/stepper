import React, {useEffect, useState} from 'react';
import MapView from 'react-native-maps';
import {StyleSheet, Dimensions, Alert} from 'react-native';

export default function ThirdStep() {
    const [info, setInfo] = useState({})
    const [fetched, setFetched] = useState(false);

    useEffect(() => {
        let mounted = true;
        navigator.geolocation.getCurrentPosition(
            position => {
                if (mounted) {
                    setInfo(position);
                }
            },
            error => Alert.alert(error.message),
        );
        return () => mounted = false;

    }, [])

    return (
        info.coords ?
            <MapView
                style={styles.mapStyle}
                region={{
                    latitude: info.coords.latitude,
                    longitude: info.coords.longitude,
                    latitudeDelta: 5,
                    longitudeDelta: 5,
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
