const authCheck = (req, res, next) => {
    if (!req.user) {
        // if user false redirect if hit protected routes or show something else

    } else {
        // if logged in go to the next middleware
        next()
    }
}

module.exports = (passport, db) => {
    // not sure if we are using passport or not
    return {
    register: (req, res) => {

    },
    login: (req, res) => { 

    },
    logout: (req, res) => {
// delete cookies
// also need to delete state that will be done on the front end
//  also need to redirect
        req.logout()
    },
    updateUser: (req, res) => {

    },
    confirmAuth: (req, res) => {

    },
    deleteUser: (req, res) => {
        
    }
    }
}