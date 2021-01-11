const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

function getSavedEntries() {
    const entriesJSON = localStorage.getItem('journalEntries');

    if (entriesJSON !== null) {
        return JSON.parse(entriesJSON);
    } else {
        return [];
    }
}
const journalEntries = getSavedEntries();

function saveEntries(journalEntries) {
    localStorage.setItem('journalEntries', JSON.stringify(journalEntries));
}

//break down the date into year, month, day
//split date into the 3 parts

let renderJournal = function (journalEntries) {
    let main = document.querySelector('.container');
    main.innerHTML = ''; //needed to clean displayed list of entries each time before rendering

    for (let i = 0; i < journalEntries.length; i++) {
        let dateArray = journalEntries[i].date.split('-');
        let year = dateArray[0];
        let day = dateArray[2];

        //convert the month from number to 3 letter format
        let monthNum = dateArray[1];
        let month = monthNames[parseInt(monthNum) - 1];

        let title = journalEntries[i].title;
        let content = journalEntries[i].content;

        //build the DOM elements from article down the tree and add classes and content foe viewing page


        const journalEntry = document.createElement('article');
        const journalHeader = document.createElement('header');
        const journalDate = document.createElement('div');
        journalDate.classList.add('date');
        const journalYear = document.createElement('div');
        journalYear.classList.add('year');
        journalYear.textContent = year;
        const journalMonth = document.createElement('div');
        journalMonth.classList.add('month');
        journalMonth.textContent = month;
        const journalDay = document.createElement('div');
        journalDay.classList.add('day');
        journalDay.textContent = day;
        const journalTitle = document.createElement('div');
        journalTitle.classList.add('titled');
        journalTitle.textContent = title;
        const journalContent = document.createElement('div');
        journalContent.classList.add('content');
        journalContent.textContent = content;

        journalDate.append(journalMonth, journalDay, journalYear);
        journalHeader.append(journalDate, journalTitle);
        journalEntry.append(journalHeader, journalContent);
        main.appendChild(journalEntry);
    }
}

renderJournal(journalEntries);

