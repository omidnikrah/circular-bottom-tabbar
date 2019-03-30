import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#bbbbbb',
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: { fontSize: 30, fontWeight: 'bold', color: '#fff', textAlign: 'center' }
});

const Reviews = () => (
	<View style={[ styles.container, { backgroundColor: '#f96038' } ]}>
		<Text style={styles.text}>Reviews Screen</Text>
	</View>
);

export default Reviews;
