import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const IconWrapper = ({ name, color, ...rest }) => <Icon name={name} color={color} {...rest} />;

export default IconWrapper;
