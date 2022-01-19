
# Keyboard only navigation
- [Mozilla Accessibility](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility)  

- [w3 keyboard accessibility](https://www.w3.org/WAI/perspective-videos/keyboard/) 

- [accessibility navigation demo](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html) 

- [enabling tabbing in firefox/safari](https://www.webassign.net/manual/student_guide/t_a_osx_tab_config.htm) 


## Typical Users
When thinking about keyboard navigation, keep in mind the different types of users who require this feature most:

- People with physical disabilities who cannot use the mouse.
- People who are blind, and cannot see the mouse pointer on the screen.
- People with chronic conditions, such as repetitive stress injuries (RSI), who should limit or avoid use of a mouse.

Also remember however that abled people may still benefit under the right conditions e.g. people with temporary limitations, such as a broken arm or broken mouse.
For these people the difference between a site made keyboard accessible and one that has not can be night and day, so it's important to try and check our sites are keyboard accessible when possible.

## What Does Keyboard Navigation look like

The main way of navigation a page via keyboard is by using the Tab key to cycle through semantic html elements. Go to the below link for an example of this:

 https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html

If you want to test the above functionality, and are using Safari or Firefox make sure that you have tabbing enabled as these browsers do not have tabbing enabled by default.

Keep this in mind when styling custom elements to look and function like links/buttons but are not semantic html, as this will lead the default behaviour of tabbing through them, to not work as expected for a keyboard only user.
In general it's good to keep this in mind when designing your pages. For example if you have a page with a form that can be tabbed, it's not great if you have loads of buttons/links on the page in between the fields as this makes it hard to tab through.


## Tips to improve UX
you can control how your focusable elements look when focused, using the `:focus` pseudo-class. It is a good idea to double up focus and hover styles, so your users get that visual clue that a control will do something when activated, whether they are using mouse or keyboard:
```
a:hover, input:hover, button:hover, select:hover,
a:focus, input:focus, button:focus, select:focus {
  font-weight: bold;
}
```
If you want to make an element that isn't a button, link or form field highlightable then the suggested way of doing it is by setting `tabindex` equal to 0. It might be tempting to use `tabindex` to force your own semnatic order for your page by assigning `tabindex` values greater than 0 which in turn changes the priority of elements when the tab key is pressed.
However because it's better for user experience to be universal, it's best to avoid assigning `tabindex` values greater than 0 as it will force an unexpected tab order upon users, who will be accustomed to navigating most pages via the same order/structure.
A better solution is to simply restructure your page so that users can tab through it in a logical order.


Consider also not only using `onClick` events but potentially adding in `onkeydown` events to enable enhanced functionality for keyboard only users. Keep in mind that the functionality should not enhance a users experience, but should be the same as if the user had clicked instead.

## Checklist for keyboard accessibility
- focusable elements should highlight when focused
- Interactable elements should be focusable using keyboard input
- Elements that are focusable should have styling that highlights when these elements have been focused