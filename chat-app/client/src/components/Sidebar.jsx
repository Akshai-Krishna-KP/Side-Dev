// This is Client Side Sidebar Component
// Initiale thought of this to show the people that are active and in the network
// In App.jsx they will call a HTTP request every few second to check and rerender this component
// Maybe should have changed to useState instead of useConst

// This take three argument
// users : List -> this contain all the userslist
// activeUser : User -> single active user that reader has finally selected
// onUserSelect : Function -> change the activeUser in the App.jsx subsequentally affect the activeuser argumnet
function Sidebar({ users, activeUser, onUserSelect }) {
  return (
    // uses aside tag for sidebar
    <aside>
      {/* // Side bar header can be used to name the chat-app */}
      <div className="p-4 border-b">
        <h1 className="text-2xl font-bold">Samsaram</h1>
        <p className="text-sm text-gray-500">Conversations</p>
      </div>
      {/* // Show the content of the users List */}
      <div>
        {/* // work similar to for-each loop
        // if users is empty return a [] and thus no rendering */}
        {users.map((user) => {
          // used to highlight the activeUser
          const isActive = activeUser && activeUser.id === user.id;
          return (
            // every react component apparently need a unique ID for some reason :(
            <div key={user.id} onClick={() => onUserSelect(user)}>
              <div>
                <div className={isActive ? "font-semibold bg-[#6f554a]" : ""}>
                  {user.name}
                </div>
              </div>
            </div>
          );
        })}

        {/* If the above become false, this will be true
          therefore rener that No Active User */}
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
