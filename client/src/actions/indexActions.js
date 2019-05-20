export const INCREMENT_INDEX = 'INCREMENT_INDEX';
export const DECREMENT_INDEX = 'DECREMENT_INDEX';
export const RESET_INDEX = 'RESET_INDEX';

export const incrementIndex = () => {
    return {
        type: INCREMENT_INDEX
    };
};

export const decrementIndex = () => {
    return {
        type: DECREMENT_INDEX
    };
};

export const resetIndex = () => {
    return {
        type: RESET_INDEX
    };
};