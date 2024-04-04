// js/dashboard_main.js

import $ from 'jquery';
import _ from 'lodash';

// Function to update counter
function updateCounter() {
    let count = 0;
    return function() {
        count++;
        $('#count').text(`${count} clicks on the button`);
    };
}

// Debounced updateCounter function
const debouncedUpdateCounter = _.debounce(updateCounter(), 300);

$(document).ready(function() {
    // Adding elements to the page
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button id="clickBtn">Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - Holberton School</p>');

    // Event listener for button click
    $('#clickBtn').click(debouncedUpdateCounter);
});

