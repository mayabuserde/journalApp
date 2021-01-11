
//save new entries to array - it does not yet display them as they are added

let mainForm = document.querySelector('.main_form');
let title = document.querySelector('#title');
let date = document.querySelector('#date');
let content = document.querySelector('#content');
const submit = document.querySelector('#submit');

submit.addEventListener('click', function (e) {
    e.preventDefault();
    journalEntries.unshift({
        date: date.value,
        title: title.value,
        content: content.value
    });
    saveEntries(journalEntries);
    renderJournal(journalEntries);
    console.log(journalEntries);
})