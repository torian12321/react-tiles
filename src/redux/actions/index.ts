import { ADD_ARTICLE} from './action.types';

export const addArticle = (payload: any) => ({
  type: ADD_ARTICLE,
  payload,
});
