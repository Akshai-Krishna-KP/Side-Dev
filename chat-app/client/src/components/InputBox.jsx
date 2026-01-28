import { useState, useRef } from "react";
import { Send } from "lucide-react";

function InputBox({ onSendMessage, disabled }) {
  // react hooks
  const [message, setMessage] = useState("");
  const editorRef = useRef(null);

  /**
   * @brief Handles the submission of the message form
   * @param {*} e
   */
  const handleSubmit = (e) => {
    // get the message from the content editable div
    setMessage(editorRef.current.innerText);

    e.preventDefault(); // stop the browser from reloading the page
    if (message?.trim() && onSendMessage) {
      onSendMessage(message.trim()); // send the message to App.jsx
      editorRef.current.innerText = ""; // clear the input box
      setMessage("");
    }
  };

  /**
   * @brief Handles key down events for the input box
   * @param {*} e
   */
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="border-2 border-purple-400 rounded-full px-4 py-2 flex items-end gap-2">
      {/* used the div instead of textarea to allow whatsapp like style */}
      <div
        ref={editorRef}
        contentEditable={!disabled}
        role="textbox"
        spellCheck
        className="flex-1 outline-none bg-transparent max-h-40 overflow-y-auto whitespace-pre-wrap break-words"
        placeholder="Type a message"
        onKeyDown={handleKeyDown}
        data-placeholder={!disabled ? "Type a message..." : ""}
        suppressContentEditableWarning
      />

      <button
        onClick={handleSubmit}
        disabled={disabled}
        className="p-2 hover:bg-gray-100 rounded-full disabled:opacity-50"
        title="Send message"
      >
        <Send />
      </button>
    </div>
  );
}

export default InputBox;
