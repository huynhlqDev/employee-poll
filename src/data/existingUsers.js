
let existingUsers = [];

var redirecPath = "";

const _saveRedirecPath = (path) => {
    redirecPath = path;
}

const _getRedirecPath = () => {
    return redirecPath;
}

const _saveLoginUser = (newUser) => {
    if (!existingUsers.find(user => user.id === newUser.id)) {
        existingUsers = [...existingUsers, newUser];
    }
};

const _getExistingUsers = () => {
    return existingUsers;
};

const _removeLoginUser = (userId) => {
    const updateUsers = existingUsers.filter(user => user.id !== userId);
    existingUsers = updateUsers
};

export { _saveLoginUser, _getExistingUsers, _removeLoginUser, _saveRedirecPath, _getRedirecPath };
