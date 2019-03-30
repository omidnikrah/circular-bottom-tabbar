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

const Notifications = () => (
	<View style={[ styles.container, { backgroundColor: '#30b1dc' } ]}>
		<Text style={styles.text}>Notifications Screen</Text>
	</View>
);

export default Notifications;
