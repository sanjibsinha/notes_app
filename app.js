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
