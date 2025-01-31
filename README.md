# notes_app

That’s a great project to learn HTML, CSS, and JavaScript! I’ll guide you through building a simple notes web app step by step. Along the way, I’ll explain the necessary syntax and concepts so you can learn while you build.

### Project Breakdown:
We’ll be building a basic notes app where you can:
1. Add new notes.
2. Display existing notes.
3. Delete notes.
4. Edit notes.

### Step 1: Basic HTML Structure

We’ll start by creating the basic structure of the HTML page. This is where we'll set up the user interface.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Notes App</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="app-container">
    <h1>My Notes</h1>
    
    <!-- Add Note Section -->
    <div class="note-input">
      <textarea id="noteText" placeholder="Type your note here..."></textarea>
      <button id="addNoteBtn">Add Note</button>
    </div>

    <!-- Display Notes Section -->
    <div id="notesContainer"></div>
  </div>

  <script src="app.js"></script>
</body>
</html>
```

### Explanation:
- **`<!DOCTYPE html>`**: This is the doctype declaration, telling the browser that this document is an HTML5 document.
- **`<html lang="en">`**: This is the root element of the HTML document. `lang="en"` specifies that the document is in English.
- **`<head>`**: Contains meta-information like character set, title, and links to external stylesheets or scripts.
- **`<meta charset="UTF-8">`**: Specifies the character encoding to ensure special characters display correctly.
- **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`**: This ensures the page is responsive on mobile devices.
- **`<title>`**: The title of the webpage, shown in the browser tab.
- **`<link rel="stylesheet" href="styles.css">`**: Link to the external CSS file.
- **`<body>`**: The body contains all visible content on the page.
- **`<script src="app.js"></script>`**: Link to the external JavaScript file that will handle functionality.

### Step 2: CSS for Styling

Now, let’s add some CSS to style the app and make it visually appealing. We’ll create a file called `styles.css`.

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
}

.app-container {
  width: 50%;
  margin: 20px auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
}

.note-input {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

#noteText {
  width: 80%;
  height: 100px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  font-size: 16px;
}

#addNoteBtn {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

#addNoteBtn:hover {
  background-color: #45a049;
}

#notesContainer {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.note {
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button.deleteBtn {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

button.deleteBtn:hover {
  background-color: #e53935;
}
```

### Explanation:
- **Selectors and Properties**:
  - **`body`**: Styles the whole page, giving it a background color and applying a font.
  - **`.app-container`**: Applies a white background to the main container, with padding, rounded corners, and a shadow for a card-like effect.
  - **`#noteText`**: Styles the text area where users input their notes. It defines width, height, padding, and font size.
  - **`#addNoteBtn`**: Styles the "Add Note" button, including color, padding, and a hover effect.
  - **`.note`**: Styles the notes displayed on the page, giving them a background, padding, and a shadow.
  - **`.deleteBtn`**: Styles the delete button inside each note with a red background and hover effect.

### Step 3: JavaScript for Functionality

Now let’s add functionality using JavaScript. We’ll create the file `app.js` to handle the interaction with the page.

```javascript
// Accessing the DOM elements
const addNoteBtn = document.getElementById('addNoteBtn');
const noteText = document.getElementById('noteText');
const notesContainer = document.getElementById('notesContainer');

// Function to add a new note
function addNote() {
  const noteContent = noteText.value.trim(); // Get the text from the textarea

  // Check if the textarea is empty
  if (noteContent === '') {
    alert('Please write something before adding a note!');
    return;
  }

  // Create a new note element
  const note = document.createElement('div');
  note.classList.add('note');

  // Add the note content
  note.innerHTML = `
    <p>${noteContent}</p>
    <button class="deleteBtn" onclick="deleteNote(event)">Delete</button>
  `;

  // Append the new note to the notes container
  notesContainer.appendChild(note);

  // Clear the textarea
  noteText.value = '';
}

// Function to delete a note
function deleteNote(event) {
  const noteToDelete = event.target.parentElement; // Get the parent note element
  notesContainer.removeChild(noteToDelete); // Remove the note from the DOM
}

// Event listener for the "Add Note" button
addNoteBtn.addEventListener('click', addNote);

// Optionally, you can also use the 'Enter' key to add a note
noteText.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    addNote();
  }
});
```

### Explanation:
- **Accessing DOM Elements**:
  - **`document.getElementById('id')`**: This method allows you to access elements in the HTML by their ID. We use it to get the "Add Note" button, the textarea for note input, and the container for the notes.
  
- **`addNote()`**:
  - **`noteText.value`**: This gets the content of the textarea (what the user types).
  - **`trim()`**: Removes any extra spaces before or after the input text.
  - We check if the text area is empty, and if it is, we alert the user to enter some text.
  - **`createElement('div')`**: Creates a new `div` element for the note.
  - **`innerHTML`**: This property allows you to insert HTML inside an element. Here, we add a `<p>` for the note text and a "Delete" button.
  - **`appendChild()`**: Appends the newly created note to the notes container.

- **`deleteNote(event)`**:
  - **`event.target`**: This refers to the element that triggered the event (in this case, the "Delete" button).
  - We then access the parent element (`parentElement`), which is the note `div`, and remove it using `removeChild()`.

- **Event Listeners**:
  - **`addEventListener('click', addNote)`**: This listens for a click on the "Add Note" button and calls the `addNote()` function when clicked.
  - **`keydown` event**: We also add functionality to let users press "Enter" to add a note.

### Step 4: Final Touches and Learning Review

- **HTML** provides the structure (text areas, buttons, etc.).
- **CSS** adds styling to make the app look better.
- **JavaScript** provides functionality (adding and deleting notes, interaction handling).

### Enhancements You Can Try:
- Store the notes in `localStorage` so that the notes persist even after refreshing the page.
- Add an "Edit" button to modify existing notes.
- Add input validation for note content.

Let me know if you'd like to dive deeper into any specific part of this app or if you want to explore more advanced features!

Yes, absolutely! You can run this app in your local browser. Here's how to do it:

### Steps to Run the Notes App Locally:

1. **Create the Project Files:**
   - Create a folder on your computer where you'll store the files for your app (e.g., `notes-app`).
   
2. **Create the HTML File:**
   - Inside the folder, create a file called `index.html` and paste the HTML code I provided earlier.

3. **Create the CSS File:**
   - In the same folder, create a file named `styles.css` and paste the CSS code into it.

4. **Create the JavaScript File:**
   - Similarly, create a file named `app.js` in the same folder and paste the JavaScript code into it.

5. **Open the App in Your Browser:**
   - Double-click on the `index.html` file, and it should open in your default web browser. You’ll be able to interact with the app directly.

### Folder Structure:

```
notes-app/
  ├── index.html
  ├── styles.css
  └── app.js
```

When you open the `index.html` file in your browser, the app will be displayed, and everything (HTML, CSS, and JavaScript) will work together to provide the functionality and styling.

---

Let me know if you run into any issues or need further clarification. Enjoy building your app!
