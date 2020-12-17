import ActionType from './types';

export const updateFavorite = (data: any): any => {
    return {
        type: ActionType.UPDATE_FAVORITE,
        data,
    };
};

export const tempAction = null;
