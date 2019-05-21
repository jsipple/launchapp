export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';


export const removeFavorite = (idx) => {
    return {
        type: REMOVE_FAVORITE,
        idx
    };
};