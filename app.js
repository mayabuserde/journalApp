const journalEntries = [
    {
        date: '2019-10-10',
        title: 'This is the first one in the array',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat blanditiis earum similique a id alias qui ab voluptatum voluptatem corrupti! Expedita repellat veniam iusto fugiat recusandae quam illo ipsa adipisci?Quia, aliquam ab incidunt cum eligendi facere beatae, perspiciatis recusandae mollitia veniam natus quod quas nulla praesentium consectetur enim sit eaque quasi laudantium sed amet expedita, est similique ipsum! Temporibus.'
    },
    {
        date: '2020-3-25',
        title: 'This is the second one in the array',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat blanditiis earum similique a id alias qui ab voluptatum voluptatem corrupti! Expedita repellat veniam iusto fugiat recusandae quam illo ipsa adipisci?'
    },
    {
        date: '2020-12-11',
        title: 'This is the third one in the array',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat blanditiis earum similique a id alias qui ab voluptatum voluptatem corrupti! Expedita repellat veniam iusto fugiat recusandae quam illo ipsa adipisci?Quia, aliquam ab incidunt cum eligendi facere beatae, perspiciatis recusandae mollitia veniam natus quod quas nulla praesentium consectetur enim sit eaque quasi laudantium sed amet expedita, est similique ipsum! Temporibus.'
    }
]
const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

//break down the date into year, month, day
//split date into the 3 parts

let renderJournal = function (journalEntries) {
    let main = document.querySelector('main');
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
    renderJournal(journalEntries);
    console.log(journalEntries);
})