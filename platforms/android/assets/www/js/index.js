/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var db;

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

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    addToDoItem: addToDoItem,
    getToDoItems: getToDoItems,
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        populateLocalstorage();
        listView = new ListView();

    }
};
