export const INCREMENT_INDEX = 'INCREMENT_INDEX';
export const DECREMENT_INDEX = 'DECREMENT_INDEX';


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