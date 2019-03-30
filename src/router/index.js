import React from 'react';
import { Text } from 'react-native';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { fadeIn } from 'react-navigation-transitions';
import Icon from '../components/Icon';
import TabBarNavigator from '../components/TabBarNavigator';
import HomeScreen from '../screens/Home';
import SearchScreen from '../screens/Search';
import ReviewsScreen from '../screens/Reviews';
import NotificationsScreen from '../screens/Notifications';

const TabNavigator = createBottomTabNavigator(
	{
		Home: {
			screen: HomeScreen,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => <Icon name="home" color={tintColor} size={25} />
			}
		},
		Search: {
			screen: SearchScreen,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => <Icon name="search" color={tintColor} size={25} />
			}
		},
		Reviews: {
			screen: ReviewsScreen,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => <Icon name="layers" color={tintColor} size={25} />
			}
		},
		Notifications: {
			screen: NotificationsScreen,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => <Icon name="notifications" color={tintColor} size={25} />
			}
		}
	},
	{
		tabBarComponent: (props) => (
			<TabBarNavigator tabColors={[ '#339af9', '#faa100', '#f96038', '#30b1dc' ]} {...props} />
		),
		tabBarOptions: {
			activeTintColor: '#fff',
			inactiveTintColor: '#999'
		}
	}
);

export default createAppContainer(TabNavigator);
