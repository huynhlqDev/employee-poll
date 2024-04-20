const initialState = {
    isLoggedIn: false,
    loginInfo: {}
};

const authenReducer = (state = initialState, action) => {
    let userInfo = {}

    const login = () => {
        if (action.payload.username === "user" && action.payload.password === "pass") {
            userInfo = {
                id: 'sarahedo',
                password: 'password123',
                name: 'Sarah Edo',
                avatarURL: null,
                answers: {
                    "8xf0y6ziyjabvozdd253nd": 'optionOne',
                    "6ni6ok3ym7mf1p33lnez": 'optionOne',
                    "am8ehyc8byjqgar0jgpub9": 'optionTwo',
                    "loxhs1bqm25b708cmbf3g": 'optionTwo'
                },
                questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
            }
            console.log("loggedIn");
            return true
        } else {
            console.log("NOT loggedIn");
            return false
        }
    }

    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isLoggedIn: login(), // TODO: verify username and password
                loginInfo: userInfo
            };
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
};

export default authenReducer;
