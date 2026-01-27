function Sidebar({ users, activeUser, onUserSelect }) {
    return (
        <aside className="border-2 border-black-200">
            <div className="p-4 border-b border-black-200">
                <h1 className="text-2xl font-bold">Samsaram</h1>
                <p className="text-sm text-gray-500">Conversations</p>
            </div>

            <div className="border-2 border-red-200">
                {users.map((user) => (
                    <div onClick={() => onUserSelect(user)}>
                        <div className="user-info">
                            <div className="user-name">{user.name}</div>
                        </div>
                    </div>
                ))}

                {users.length === 0 && (
                    <div className="p-4 text-center text-gray-500">
                        <p>No active users</p>
                    </div>
                )}
            </div>
        </aside>
    );
}

export default Sidebar;
