export const GET_CURRENT = 'GET_CURRENT';



export const getCurrentLaunch = (index) => {
    return {
        type: GET_CURRENT,
        index
    };
};

