import { _removeLoginUser, _saveLoginUser } from "../data/existingUsers";

const initialState = {
    isLoggedIn: false,
    loginInfo: {}
};

const authenReducer = (state = initialState, action) => {
    
    const userInfo = {
        id: "user",
        password: "pass",   
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

    const login = () => {
        if (action.payload.username === userInfo.id && action.payload.password === userInfo.password) {
            _saveLoginUser({
                id: userInfo.id,
                password: userInfo.password,
            })
            return true
        } else {
            return false
        }
    }

    const logout = (id) => {
        _removeLoginUser(id)
        return true
    }

    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isLoggedIn: login(), // TODO: verify username and password
                loginInfo: userInfo
            };
        case 'LOGOUT':
            return {
                ...state,
                isLoggedIn: !logout(),
                loginInfo: {}
            };
        default:
            return state;
    }
};

export default authenReducer;
