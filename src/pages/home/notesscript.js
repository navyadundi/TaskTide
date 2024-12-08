$(document).ready(function(){

    let noteCount = 0;
    let activeNote = null;

    // Load notes from localStorage
    function loadNotes() {
        const notes = JSON.parse(localStorage.getItem('notes')) || {};
        $('#listed').empty();
        for (let noteId in notes) {
            let note = notes[noteId];
            $('#listed').append('<div id="' + noteId + '" style="background-color: ' + note.color + '"><div class="list-title">' + note.title + '</div> <div class="list-date">' + new Date(note.timestamp).toLocaleString("en-US") + '</div> <div class="list-text">' + note.body + '</div> </div>');
        }
        noteCount = Object.keys(notes).length;
    }

    // Save a note to localStorage
    function saveNoteToLocalStorage(noteId, note) {
        let notes = JSON.parse(localStorage.getItem('notes')) || {};
        notes[noteId] = note;
        localStorage.setItem('notes', JSON.stringify(notes));
    }

    // Delete a note from localStorage
    function deleteNoteFromLocalStorage(noteId) {
        let notes = JSON.parse(localStorage.getItem('notes')) || {};
        delete notes[noteId];
        localStorage.setItem('notes', JSON.stringify(notes));
    }

    // Initialize notes from localStorage
    loadNotes();

    $('.color-box').click(function(){
        let color = $(this).css('background-color');
        $('notepad').css('background-color', color);
        $('#title-field').css('background-color', color);
        $('#body-field').css('background-color', color);
    });

    $('#btn-save').click(function(){
        const title = $('#title-field').val();
        const body = $('#body-field').val();
        if (title === '' && body === '') {
            alert('Please add a title or body to your note.');
            return;
        }
        const color = $('notepad').css('background-color');
        const created = Date.now();

        if (activeNote) {
            // Edit existing note
            $('#' + activeNote)[0].children[0].innerHTML = title;
            $('#' + activeNote)[0].children[1].innerHTML = new Date(created).toLocaleString("en-US");
            $('#' + activeNote)[0].children[2].innerHTML = body;
            $('#' + activeNote)[0].style.backgroundColor = color;
            const note = { title, body, color, timestamp: created };
            saveNoteToLocalStorage(activeNote, note);
            activeNote = null;
            $('#edit-mode').removeClass('display').addClass('no-display');
        } else {
            // Create new note
            const id = 'note' + (noteCount + 1);
            const note = { title, body, color, timestamp: created };
            $('#listed').append('<div id="' + id + '" style="background-color: ' + color + '"><div class="list-title">' + title + '</div> <div class="list-date">' + new Date(created).toLocaleString("en-US") + '</div> <div class="list-text">' + body + '</div> </div>');
            saveNoteToLocalStorage(id, note);
            noteCount++;
        }
        $('#title-field').val('');
        $('#body-field').val('');
        $('notepad').css('background-color', 'white');
        $('#title-field').css('background-color', 'white');
        $('#body-field').css('background-color', 'white');
    });

    $('#btn-delete').click(function(){
        if (activeNote) {
            $('#' + activeNote).remove();
            deleteNoteFromLocalStorage(activeNote);
            activeNote = null;
            $('#edit-mode').removeClass('display').addClass('no-display');
        }
        $('#title-field').val('');
        $('#body-field').val('');
        $('notepad').css('background-color', 'white');
        $('#title-field').css('background-color', 'white');
        $('#body-field').css('background-color', 'white');
    });

    $('#listed').click(function(e){
        const id = e.target.parentElement.id;
        const color = e.target.parentElement.style.backgroundColor;
        activeNote = id;
        $('#edit-mode').removeClass('no-display').addClass('display');
        const titleSel = $('#' + id)[0].children[0].innerHTML;
        const bodySel = $('#' + id)[0].children[2].innerHTML;
        $('#title-field').val(titleSel);
        $('#body-field').val(bodySel);
        $('notepad').css('background-color', color);
        $('#title-field').css('background-color', color);
        $('#body-field').css('background-color', color);
    });
});
