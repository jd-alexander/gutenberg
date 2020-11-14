/**
 * External dependencies
 */
import { v4 as uuid } from 'uuid';

/**
 * WordPress dependencies
 */
import RNReactNativeGutenbergBridge from '@wordpress/react-native-bridge';

export * from './actions.js';

/**
 * Returns an action object that enables or disables post title selection.
 *
 * @param {boolean} [isSelected=true] Whether post title is currently selected.
 *
 * @return {Object} Action object.
 */
export function togglePostTitleSelection( isSelected = true ) {
	return {
		type: 'TOGGLE_POST_TITLE_SELECTION',
		isSelected,
	};
}

/**
 * Action generator used in signalling that the post should autosave.
 */
export function* autosave() {
	RNReactNativeGutenbergBridge.editorDidAutosave();
}

/**
 * Returns an action object to set the clipboard data.
 *
 * @param {Object} clipboard Stored clipboard data.
 *
 * @return {Object} Action object.
 */
export function updateClipboard( clipboard ) {
	return {
		type: 'UPDATE_CLIPBOARD',
		clipboard,
	};
}

/**
 * Returns an action object to create an info notice.
 *
 * @param {Object} message The displayed message of the notice.
 *
 * @return {Object} Action object.
 */
export function createInfoNotice( message ) {
	const notice = { status: 'info', content: message, id: uuid() };
	return {
		type: 'CREATE_NOTICE',
		notice,
	};
}

/**
 * Returns an action object to remove all notices.
 *
 * @return {Object} Action object.
 */
export function removeAllNotices() {
	return {
		type: 'REMOVE_ALL_NOTICES',
	};
}

/**
 * Returns an action object to remove a notice by id.
 *
 * @param {Object} id The id of the notice to remove.
 *
 * @return {Object} Action object.
 */
export function removeNotice( id ) {
	return {
		type: 'REMOVE_NOTICE',
		id,
	};
}

/**
 * Returns an action object to track the last block that was inserted.
 *
 * @param {Object} clientId The client id of the block.
 *
 * @return {Object} Action object.
 */
export function addLastBlockInserted( clientId ) {
	return {
		type: 'ADD_LAST_BLOCK_INSERTED',
		clientId,
	};
}

/**
 * Returns an action object to clear the last block that was inserted.
 *
 * @param {Object} clientId The id of the block to remove.
 *
 * @return {Object} Action object.
 */
export function clearLastBlockInserted( clientId ) {
	return {
		type: 'CLEAR_LAST_BLOCK_INSERTED',
		clientId,
	};
}
