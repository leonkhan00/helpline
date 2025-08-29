What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: getElementById grabs a single element using its unique ID and is super fast. getElementsByClassName returns all elements with a specific class name as a live collection that updates with the DOM. querySelector finds the first element that matches any CSS-style selector, while querySelectorAll grabs all matching elements as a static list. For flexibility and complex selections, querySelector and querySelectorAll are usually the go-to tools.


How do you create and insert a new element into the DOM?
Ans: I can create a new element using document.createElement, set its content or attribute, and then insert it into the page using methods like appendChild.

What is Event Bubbling and how does it work?
Ans: Event bubbling means when you click on something inside a webpage—like a button inside a box—the click first affects the button, then “bubbles up” to the box, and then to the whole page. It’s like dropping a pebble in water and watching the ripples spread outward. This helps websites handle events in a smart way, like listening for clicks on a whole section instead of every single item inside it.

What is Event Delegation in JavaScript? Why is it useful?
Ans: Event delegation is a technique in JavaScript where you attach a single event listener to a parent element to handle events for its child elements. Instead of adding listeners to each child, the parent listens for events that bubble up and uses event.target to figure out which child was clicked.

What is the difference between preventDefault() and stopPropagation() methods?
Ans : preventDefault() stops the browser’s default behavior for an event and stopPropagation() stops the event from bubbling up to parent elements;

