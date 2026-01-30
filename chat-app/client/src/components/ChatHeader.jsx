/**
 * @brief
 * This give the header, Chat-app name, icon.
 * Show the activeUser.
 *
 * @param {*} param0
 * @returns
 */
function ChatHeader({ activeUser }) {
  return (
    <header className="border-b bg-white px-4 px-3">
      {/* Show the chat-app name and icon */}
      <div className="flex items-center gap-2 mb-2">
        <img
          src="/icon.png"
          alt="Chat App Icon"
          className="h-6 w-6 object-contain"
        />
        <h1 className="text-lg font-semibold text-gray-800">Samsaram</h1>
      </div>

      {/* Display different things if user selected or not */}
      {activeUser ? (
        <h2 className="text-sm font-medium text-gray-700">{activeUser.name}</h2>
      ) : (
        <p className="text-sm text-gray-500">Select a user to start chatting</p>
      )}
    </header>
  );
}

export default ChatHeader;
