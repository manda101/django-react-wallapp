// UserInfo to display on home page upon login
function UserInfo({ user }) {
    return (
        <div>
            <h1>Welcome, {user.username}!</h1>
        </div>
    );
}

export default UserInfo;
