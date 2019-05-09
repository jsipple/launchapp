export const REMOVE_LAUNCH = 'REMOVE_LAUNCH';

export const removeLaunch = (idx) => {
    return {
        type: REMOVE_LAUNCH,
        idx
    }
};