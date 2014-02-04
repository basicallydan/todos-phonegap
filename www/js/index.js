var app = app || {};

function populateLocalstorage() {
    if (window.localStorage.getItem('to-do-items')) {
        return;
    }
    addToDoItem('Build a PhoneGap App');
    addToDoItem('Deploy it to iOS');
}

function addToDoItem (title) {
    var existingItems = window.localStorage.getItem('to-do-items');
    if (!existingItems) {
        existingItems = [
            {
                title:title,
                done: false
            }
        ];
    } else {
        existingItems = JSON.parse(existingItems);
        existingItems.push({
            title: title,
            done: false
        });
    }
    window.localStorage.setItem('to-do-items', JSON.stringify(existingItems));
}

function getToDoItems () {
    return JSON.parse(window.localStorage.getItem('to-do-items'));
}

var listView;
app.initialize = function() {
    this.bindEvents();
};
app.addToDoItem = addToDoItem;
app.getToDoItems = getToDoItems;
app.bindEvents = function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
};
app.onDeviceReady = function() {
    populateLocalstorage();
    listView = new app.ToDosView();
};
