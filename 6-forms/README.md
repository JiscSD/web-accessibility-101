# Introduction

## Use Native HTML

The name, role, and state of the elements are exposed by default to all assistive technologies.

Try and use semantic elements within the `<form>`, such as:

```
<input>
<label>
<select>
<textarea>
<button>
<fieldset>
<legend>
<datalist>
<output>
<option>
<optgroup>
```

These are listed at [W3Schools Form Elements](https://www.w3schools.com/html/html_form_elements.asp).

If you are using an input element, make sure to set the type, for example `<input type="checkbox">`.
These are listed at [W3Schools Input Types](https://www.w3schools.com/html/html_form_input_types.asp).

Also make use of ARIA attributes, you can read more about ARIA in section 3 of this guide.

## List fields that are required :eight_pointed_black_star:

You can show that a field is required/mandatory by:

-   Providing the required text in the label.
-   Providing a graphic \* image in the label with appropriate alt text.
-   Providing a star (asterisk) symbol.

as well as also:

-   Using color to identify if a form control is required.
-   Providing HTML5 and ARIA required attributes.

More information on this can be found in this blog post on the Deque website - [The Anatomy of Accessible Forms: Required Form Fields](https://www.deque.com/blog/anatomy-of-accessible-forms-required-form-fields/)

## Provide a visible label that is descriptive

Using labels within forms allows the user to understand how they need to use your form.

Labels include:

-   Text to the left of dropdown lists and text inputs
-   Text to the right of checkboxes and radio buttons
-   Text inside buttons and tabs
-   Text below icons used as buttons

An example of descriptive labels for first and last name:

```
<label for=”firstName”>First Name</label>

<input type=”text” id=”firstName”>

<label for=”lastName”>Last Name</label>

<input type=”text” id=”lastName”>
```

## Provide a programmatic label

Using the example above, the programmatic label using `for=""` and `id=""`, creating an association between the label and the input.  
A question to ask would be - Does the visible label text generally match with the programmatic text?  
In the example above, this is true as the programmatic label and the visible label state either first name or last name for each input area.

Programmatic names can also include alt text, aria-label and aria-labelledby attributes.

## Grouping of form controls

There can be cases where several form controls need to be grouped together - for example when two or more radio buttons or checkboxes are used together.  
Assistive technology will read the overall label and will not associate this with the form controls, so this can be confusing - especially with generic answers such as 'yes' and 'no'.
When this is the case, you can use `<fieldset>` and `<legend>`.

The fieldset tags wrap all of the form controls and labels that are used by the overall label, and the legend becomes the overall label.
Here is an example:

```
<fieldset>

<legend>Do you like drinking tea?</legend>

<input type=”radio” id=”yesToTea”>

<label for=”yesToTea”>Yes</label>

<input type=radio” id=”noToTea”>

<label for=”noToTea”>No</label>

</fieldset>
```

## Things to remember

-   Highlight input element on focus!
-   Forms should be accessible through keyboard only, tabbing and all other user interactions such as typing and selecting options etc.
-   Keep placeholder text brief and relevant
-   Provide error messages that are descriptive and relevant

## Bibliography

-   [WebAIM accessible forms](https://webaim.org/techniques/forms/)
-   [Deque Accessible forms best practice](https://www.deque.com/blog/anatomy-of-accessible-forms-best-practices/)
-   [Mozilla accessible forms](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/forms)
-   [W3 form tutorials](https://www.w3.org/WAI/tutorials/forms/)
-   [a11y project, how to write accessible forms](https://www.a11yproject.com/posts/how-to-write-accessible-forms/)
