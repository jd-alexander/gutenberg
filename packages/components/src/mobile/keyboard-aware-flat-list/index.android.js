/**
 * External dependencies
 */
import { FlatList } from 'react-native';
/**
 * Internal dependencies
 */
import KeyboardAvoidingView from '../keyboard-avoiding-view';

export const KeyboardAwareFlatList = ( { listRef, props } ) => {
	return (
		<KeyboardAvoidingView style={ { flex: 1 } }>
			<FlatList ref={ listRef } { ...props } />
		</KeyboardAvoidingView>
	);
};

KeyboardAwareFlatList.handleCaretVerticalPositionChange = () => {
	//no need to handle on Android, it is system managed
};

export default KeyboardAwareFlatList;
