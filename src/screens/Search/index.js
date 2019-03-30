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

const Search = () => (
	<View style={[ styles.container, { backgroundColor: '#faa100' } ]}>
		<Text style={styles.text}>Search Screen</Text>
	</View>
);

export default Search;
