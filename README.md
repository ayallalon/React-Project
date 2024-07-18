
#React Project 

This project utilizes server data provided by:

Users
Posts
Todos
The goal is to manage a client-side database initialized with the server data and provide various functionalities through the UI.

#Technologies Used
React
Axios (for API requests)
CSS (for styling)

#Functionalities
Case 1: Application Starts
The UI displays all users' data ordered by user ID.
Users with uncompleted tasks (todos) are marked with a red border.
Users with all tasks completed are marked with a green border.
Case 2: Search
A search text box allows filtering the users' list.
Users whose name or email contains the search text will be displayed.
Case 3: Other Data
Hovering over the "Other Data" section reveals more user data.
Clicking on the "Mouse Over" section closes the additional data view.
Case 4: Update/Delete Data
Editing user data and pressing "Update" updates the user's information.
Pressing "Delete" removes all the user's data.
Case 5: Selecting User
Clicking on the ID label colors the user's region in orange.
Displays the user's posts and todos.
Uncompleted todos show a "Mark Completed" button to complete the task.
Case 6: Add New ToDo
Pressing "Add" above the "ToDo" list provides a form to add a new todo.
Pressing "Cancel" returns to the "ToDo" list.
Case 7: Add New Post
Pressing "Add" above the "Posts" list provides a form to add a new post.
Pressing "Cancel" returns to the "Posts" list.
Case 8: Add New User
Pressing "Add" above the "Users" list navigates to a new user creation screen.
"Other data" for users can only be provided during updates, not during creation.
