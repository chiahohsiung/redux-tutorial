import { ADD_ARTICLE } from '../constants/action-types.js'


export function addArticle(payload) {
	// return an action
	return {type:ADD_ARTICLE, payload};
}
