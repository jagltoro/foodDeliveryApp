import * as React from 'react';
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {
  homeActiveIcon,
  homeInactiveIcon,
  profileActiveIcon,
  profileInactiveIcon,
  cartActiveIcon,
  cartInactiveIcon,
  chatActiveIcon,
  chatInactiveIcon,
} from '@src/Assets';
import {useMainNavigationStyle} from './MainNavigation.styles';

export function MyTabBar({state, descriptors, navigation}: BottomTabBarProps) {
  const styles = useMainNavigationStyle();
  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;
        const label = route.name;

        const icon = (): ImageSourcePropType => {
          switch (label) {
            case 'Home':
              return isFocused ? homeActiveIcon : homeInactiveIcon;
            case 'Profile':
              return isFocused ? profileActiveIcon : profileInactiveIcon;
            case 'Cart':
              return isFocused ? cartActiveIcon : cartInactiveIcon;
            case 'Chat':
              return isFocused ? chatActiveIcon : chatInactiveIcon;
            default:
              return isFocused ? homeActiveIcon : homeInactiveIcon;
          }
        };

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              styles.tabBarItem,
              isFocused ? styles.tabBarItemActive : {},
            ]}>
            <Image
              source={icon()}
              style={[
                styles.tabBarItemIcon,
                isFocused ? styles.tabBarItemIconActive : {},
              ]}
            />
            {isFocused && <Text style={styles.tabBarItemText}>{label}</Text>}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
