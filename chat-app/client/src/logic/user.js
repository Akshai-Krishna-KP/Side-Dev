async function getUserList() {
  try {
    const response = await fetch("http://localhost:8000/users");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("Got the user list:", data.length);
    return data;
  } catch (error) {
    console.error("Error fetching user list:", error);
  }
}
export { getUserList };
