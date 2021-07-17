import React from 'react'
import { View, FlatList, Dimensions } from 'react-native';
import CarItem from '../CarItem';
import cars from '../../fixtures/cars';
import styles from './styles/CarsList';

const CarsList = props => {
  return (
    <View style={styles.container}>
      <FlatList 
        data={cars}
        renderItem={({item}) => <CarItem car={item} />}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default CarsList;
