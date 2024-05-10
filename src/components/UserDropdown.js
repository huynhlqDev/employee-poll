
const UserDropdown = ({ users, handleOnSelectUser }) => {

    const onSelectUser = (e) => {
        const user = JSON.parse(e.target.value)
        handleOnSelectUser(user)
    }
    
    return (
        <div className="user-dropdown">
            <select onChange={onSelectUser}>
                <option value="">Select User</option>
                {users.map((user) => (
                    <option key={user.id} value={JSON.stringify(user)}>{user.id}</option>
                ))}
            </select>
        </div >
    );
};

export default UserDropdown;
