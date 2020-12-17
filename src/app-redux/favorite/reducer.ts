import ActionType from './types';

const initialState: any = [];

const Favorite = (state: any = initialState, action: any): any => {
    switch (action.type) {
        case ActionType.UPDATE_FAVORITE:
            return action.data;
        default:
            return state;
    }
};

export default Favorite;
