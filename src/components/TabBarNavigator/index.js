import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import posed from 'react-native-pose';

const { width: windowWidth } = Dimensions.get('window');

const IconWrapper = posed.View({
	active: { y: -29, scale: 1.5 },
	inactive: { y: 0, scale: 1 }
});

const tabBarStyle = StyleSheet.create({
	container: {
		flexDirection: 'row',
		height: 60
	},
	circleInner: { width: 58, height: 58, borderRadius: 50, top: -29, borderWidth: 4, borderColor: '#fff' },
	tabButton: { flex: 1 },
	tabText: {
		position: 'absolute',
		fontSize: 8
	},
	iconWrapper: { flex: 1, alignItems: 'center', justifyContent: 'center' }
});

class TabBarNavigator extends React.Component {
	constructor(props) {
		super(props);
		const { navigation: { state: { routes } }, tabColors } = props;
		const tabWidth = windowWidth / routes.length;
		console.log(routes);
		const poses = routes.reduce((poses, pose, index) => {
			return { ...poses, [`route-${index}`]: { x: tabWidth * index } };
		}, {});

		const styles = StyleSheet.create({
			circle: {
				width: tabWidth,
				justifyContent: 'center',
				alignItems: 'center'
			}
		});

		this.Circle = posed.View(poses);
		this.circleStyle = styles.circle;

		this.CircleInner = posed.View({
			passive: {
				backgroundColor: [
					'x',
					{
						inputRange: routes.map((route, index) => index * tabWidth),
						outputRange: tabColors
					},
					true
				]
			}
		});
	}

	render() {
		const { renderIcon, activeTintColor, inactiveTintColor, onTabPress, navigation, tabColors } = this.props;
		const { routes, index: activeRouteIndex } = navigation.state;
		const { Circle, CircleInner, circleStyle } = this;

		return (
			<View style={tabBarStyle.container}>
				<View style={StyleSheet.absoluteFillObject}>
					<Circle style={circleStyle} pose={`route-${activeRouteIndex}`}>
						<CircleInner style={tabBarStyle.circleInner} />
					</Circle>
				</View>

				{routes.map((route, routeIndex) => {
					const isRouteActive = routeIndex === activeRouteIndex;
					const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;

					return (
						<TouchableOpacity
							key={routeIndex}
							style={tabBarStyle.tabButton}
							activeOpacity={1}
							onPress={() => {
								onTabPress({ route });
							}}
						>
							<IconWrapper pose={isRouteActive ? 'active' : 'inactive'} style={tabBarStyle.iconWrapper}>
								{renderIcon({ route, focused: isRouteActive, tintColor })}
								<Text
									style={[
										tabBarStyle.tabText,
										{
											opacity: isRouteActive ? 1 : 0,
											top: isRouteActive ? 50 : 80,
											color: tabColors[activeRouteIndex]
										}
									]}
								>
									{route.routeName}
								</Text>
							</IconWrapper>
						</TouchableOpacity>
					);
				})}
			</View>
		);
	}
}

export default TabBarNavigator;
