
1.What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Ans :If we want to get single element from DOM we set id and bring it getElement by id.If we want to get multiple element from DOM we set same class name in many teg and bring it getElement by class name.but we get single element by using queryselector with tag name for multiple by querySelectorAll.

2. How do you **create and insert a new element into the DOM**?

Ans : firsrtly i bring a oldelement from dom.Than

I create a new element by using :  let newEle = document.createElement('div');

insert  : Oldelement.appendChild(makeNewhis);

3. What is **Event Bubbling** and how does it work?
Ans : Event bubbling  handle target event .it’s work like network in DOM or html code.

it go child to parent by bubbling.

4. What is **Event Delegation** in JavaScript? Why is it useful?

Ans : Event delegation is a type of event bulling which is directly target the event and act.

it’s most useful and easier way of event handeling.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

Ans:  preventDefault() prevents the default behavior of an element from acting.on the otherhand , stopPropagation() prevents an event from bubbling up the event chain.