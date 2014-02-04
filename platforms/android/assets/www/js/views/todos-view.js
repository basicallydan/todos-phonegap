var app = app || {};

app.ToDosView = Backbone.View.extend({
    el: $('#to-do-list'),
    listEl: $('#to-do-items'),
    newButton: $('#add-item'),
    newItemTitle: $('#to-do-list input.new-item-title'),
    initialize: function () {
        _.bindAll(this, 'render', 'new');

        $(this.newButton).click(this.new);

        this.render();
    },
    new: function () {
        var newItemTitle = $(this.newItemTitle).val();
        app.addToDoItem(newItemTitle || 'New Item');
        $(this.newItemTitle).val('');
        this.render();
    },
    render: function () {
        var toDoItems = app.getToDoItems();
        $(this.listEl).html('');

        for (var i = toDoItems.length - 1; i >= 0; i--) {
            $(this.listEl).append('<li>' + toDoItems[i].title + '</li>');
        }
    }
});