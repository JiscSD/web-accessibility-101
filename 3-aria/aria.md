# Accessible Rich Internet Applications (ARIA)

ARIA attributes have been designed as a tool to make web content and applications more accessible to end users with disabilities. They provide information that can be used by assistive technology (such as screen-readers) and are often seen prefixed in HTML with `aria-` or describe a `role` for an element. In short: ARIA helps to fill any gaps that Semantic HTML doesn't fill implicitly.

The information assistive technologies need about the meaning and purpose of user interface elements is called "accessibility semantics".

The W3C Working Group have created [a set of authoring best practice notes](https://www.w3.org/TR/wai-aria-practices-1.1/) to help guide developers. ARIA is a pretty extensive area to explore, and something you'll use on a regular basis. In this guide we'll cover some of the key areas to be aware of.

--- 

## Types of ARIA component

ARIA consists of three component types: **Roles, states, and properties**. States and properties ([often collectively just referred to as "attributes"](https://www.w3.org/TR/wai-aria-1.0/states_and_properties)) exist to help define roles in more detail.

### Roles

This is a static description of what an element does (so it doesn't change). For example `<a role="button">Order pizza</a>`.

### States

States describe the current condition of an element on the page, and can change (either with or without user interaction). Examples of states are `aria-checked` and `aria-disabled`.

### Properties

Properties describe what an element is, and are less likely to change once set. Examples of properties are `aria-label` and `aria-describedby`.

---

## Principles

Poorly implemented ARIA can be detrimental to assistive technology users. W3C specify two key principles to help developers:

### **Principle 1:** A `role` is a promise that an action will take place, where it would otherwise not be obvious to a browser.

For example the following `div` being used as a call to action. This would not usually appear as a button.

```
<button role="tab">Tab</button>
```

###  **Principle 2:** ARIA attributes can both cloak and enhance information.

While ARIA attributes can improve experience for assistive technology users, incorrect attributes or values can achieve the opposite. Some examples of this in practice:

```
<a role="menuitem">Assistive tech users perceive this element as an item in a menu, not a link.</a>
```

```
<a aria-label="Assistive tech users can only perceive the contents of this aria-label, not the link text">Link Text</a>
```

```
<table role="log">
    <!--
    Table that assistive technology users will not perceive as a table.
    The log role tells browser this is a log, not a table.
    -->
</table>
```

Conversely, when used correctly ARIA can provide essential context to a component:

```
<button aria-pressed="false">Mute</button>
```

You should therefore avoid overriding default roles or adding redundant roles, and be cautious of potential side effects.

---

## Device support

As you would expect from any web technology, device or software support can't be considered to be universal. Different operating systems, browsers, and even versions of the assistive technologies themselves can contribute to partial or complete lack of support.

For this reason, while emulated/automated testing is beneficial at a development level, it's important to test ARIA with actual assistive technology before release.

**Useful resource:** [a11support.io](https://a11ysupport.io/) allows you to search by ARIA attribute or HTML element and see support across different assistive technologies and browsers.

---

## Some useful attributes

Below are a few commonly used attributes and what they achieve. You can view a more comprehensive list [here](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques).

### [button role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role)
> The button role is for clickable elements that trigger a response when activated by the user. Adding `role="button"` tells the screen reader the element is a button, but provides no button functionality. Use `<button>` or `<input>` with `type="button"` instead.
```
<div tabindex="0" role="button" aria-pressed="false">Send message</div>
```

### [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute)
> The `aria-label` attribute is used to define a string that labels the current element. Use it in cases where a text label is not visible on the screen. If there is visible text labeling the element, use `aria-labelledby` instead. 
```
<button aria-label="Close" onclick="myDialog.close()">X</button>
```

### [aria-labelledby](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute)
> The `aria-labelledby` attribute establishes relationships between objects and their label(s), and its value should be one or more element IDs, which refer to elements that have the text needed for labeling.
```
<div role="dialog" aria-labelledby="dialogheader">
    <h2 id="dialogheader">Choose a File</h2>
    ... Dialog contents
</div>
```

### [aria-hidden](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-hidden_attribute)
> Adding `aria-hidden="true"` to an element removes that element and all of its children from the accessibility tree.

This is especially useful for decorative content, or offscreen content such as modals or menus. It's worth noting that `aria-hidden="false"` however [can perform inconsistently across browsers](https://www.w3.org/TR/wai-aria-1.1/#aria-hidden).

---

## Allowed attributes for HTML elements
W3C provide [a helpful table](https://www.w3.org/TR/html-aria/#docconformance) of HTML elements, their implicit ARIA semantics, and their allowed roles.

---

## Further Reading

### An overview of ARIA support
https://www.a11yproject.com/posts/2020-05-13-aria-has-perfect-support/

### Screen reader compatibility
https://www.powermapper.com/tests/screen-readers/aria/

### Using ARIA: Roles, states, and properties
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques

### What the Heck is ARIA? A Beginner's Guide to ARIA for Accessibility
https://www.lullabot.com/articles/what-heck-aria-beginners-guide-aria-accessibility

### Global States and Properties
https://www.w3.org/TR/wai-aria/#global_states 
