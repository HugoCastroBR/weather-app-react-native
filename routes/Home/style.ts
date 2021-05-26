import { Platform, StyleSheet } from "react-native";





export const styles = StyleSheet.create({
	pageContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-start",
		overflow: 'scroll',
		minHeight: '140%',
	
	},

	reloadIcon: {
		position: "absolute",
		...Platform.select({
			ios: {
				top: -30,
			},
			android: {
				top: 56,
			},
		}),
		right: -40,
		height: 50,
		width: 100,
	},
});
