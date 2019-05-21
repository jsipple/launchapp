export const ADD_AGENCY = 'ADD_AGENCY';


export const addAgency = (agency, abbv) => {
    return {
        type: ADD_AGENCY,
        agency,
        abbv
    };
};