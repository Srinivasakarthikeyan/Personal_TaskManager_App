
import { CREATE_LIST, DELETE_LIST,CREATE_CARD,DELETE_CARD,ADD_COMMENT } from '../constants';

export function createList() {
    return { type: CREATE_LIST };
}

export function deleteList(listId) {
    return { type: DELETE_LIST, listId };
}

export function createCard(listId,cardDesc) {
    return { type: CREATE_CARD, listId,cardDesc };
}

export function deleteCard(listId,cardId) {
    return { type: DELETE_CARD, listId,cardId };
}

export function addComment(cmtDesc,cmtdDate,cardId,listId) {
    return { type: ADD_COMMENT, cmtDesc,cmtdDate,cardId,listId };
}
