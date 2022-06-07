# web-accessibility-101 :sparkles:

## To support developers using React in building accessible software under WCAG 2.1 AA guidelines.

In this repository you will find some information on web accessibility, split into sections and with code examples.  
Try and complete the [quick fire checklist](#quick-fire-checklist) below to see whether there are any missing from your product.

---

## Contents:

1. [Colour](1-colour/README.md)
    - [Introduction](1-colour/README.md#introduction)
    - [Use of colour](1-colour/README.md#use-of-colour)
    - [Contrast ratio](1-colour/README.md#contrast-ratio)
2. [Page Structure and Semantic HTML](2-page-structure/README.md)
3. [ARIA attributes](3-aria/README.md)
    - [Introduction](3-aria/README.md#introduction)
    - [Types of ARIA](3-aria/README.md#types-of-aria)
    - [Principles](3-aria/README.md#principles)
    - [Examples](3-aria/README.md#examples)
4. [Visual Content](4-visual-content/README.md)
    - [Introduction](4-visual-content/README.md#introduction)
    - [Images](4-visual-content/README.md#images)
    - [Videos](4-visual-content/README.md#videos)
5. [Keyboard Only](5-keyboard-only/README.md)
    - [Introduction](5-keyboard-only/README.md#introduction)
    - [Tips to improve](5-keyboard-only/README.md#tips-to-improve)
    - [Checklist for keyboard accessibility](5-keyboard-only/README.md#checklist-for-keyboard-accessibility)
6. [Forms](6-forms/README.md)
    - [Introduction](6-forms/README.md#introduction)
    - [Accessible forms](6-forms/README.md#accessible-forms)
7. [Tables](7-tables/README.md)
    - [Introduction](7-tables/README.md#introduction)
    - [Best Practices](7-tables/README.md#best-practices)
    - [Examples](7-tables/README.md#examples)
8. [Common Accessibility issues/Examples with UI libraries](8-UI-libraries/README.md)
9. [Testing resources](9-testing-resources/README.md)
    - [CI/CD Tools](9-testing-resources/README.md#CI/CD)
    - [Automated Testing](9-testing-resources/README.md#Automated)
    - [Manual Testing](9-testing-resources/README.md#Manual)
    - [Lighthouse CI setup](9-testing-resources/lighthouse-ci/README.md)

---

## Quick fire checklist:

-   [ ] Is the lang attribute set to the correct language?
-   [ ] Does your codebase have documentation in a README and comments where necessary?
-   [ ] Is the HTML valid? (You can [check with this W3 validator](https://validator.w3.org/))

---

-   [ ] Does the design have accessible colours? If not, have the colours been checked?
-   [ ] Can you still navigate your site if it was in black and white?  
         **If no - read through the [colour](1-colour/README.md) section.**

---

-   [ ] Do all of your pages have unique and descriptive `title` tags?
-   [ ] Is there only one `h1` heading present on each page?
-   [ ] Are the `h` tags in a logical order matching the structure?
-   [ ] Is semantic HTML used where possible?  
         **If no, read through the [page-structure](2-page-structure/README.md) section.**

---

-   [ ] Are ARIA attributes used if semantic HTML is not possible?  
         **If no, read through the [aria](3-aria/README.md) section.**

---

-   [ ] Do all images have descriptive alt text?
-   [ ] Does any visual/audio content have the option to pause?
-   [ ] Can you resize your website to 200% and still use it?  
         **If no, read through the [visual-content](4-visual-content/README.md) section.**

---

-   [ ] If you have a navigation header, is a 'skip to main content' link present?
-   [ ] Are interactive attributes focusable, with obvious visible styling on focus?
-   [ ] Can you tab through your website in a logical order without using your mouse?  
         **If no, read through the [keyboard-only](5-keyboard-only/README.md) section.**

---

-   [ ] Do your forms use clear labels and alternative text if needed?
-   [ ] Do your forms provide guidance to the user upon error?
-   [ ] Are all required fields marked?
-   [ ] Do all of your input fields have a purpose specified? e.g. `input type="email"`  
         **If no, read through the [forms](6-forms/README.md) section.**

---

-   [ ] Does your table have headers with listed scope of 'col' or 'row'?
-   [ ] Does your table include a Caption?  
         **If no, read through the [tables](7-tables/README.md) section.**

---

### Contributing:

Want to contribute to this repository? Please do!  
You can do this by...

1. Creating an issue - if it is a minor addition or if it is a complicated accessibility issue that everyone can input into.
2. Opening a Pull Request - if there is a particular area you would like to add a chunk of information or some examples to.

---

### Bibliography/Useful Resources:

-   [WCAG Quick Reference Guide](https://www.w3.org/WAI/WCAG21/quickref/)
-   [Web Accessibility in Mind](https://webaim.org/)
-   [Google Developers Accessibility Guide](https://developers.google.com/web/fundamentals/accessibility)
-   [Mozilla Developers Accessibility Guide](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
-   [React Accessibility Docs](https://reactjs.org/docs/accessibility.html)
-   [Web Accessibility for Developers (WUHCAG) Checklist](https://www.wuhcag.com/wcag-checklist/)
-   [a11y Project checklist](https://www.a11yproject.com/checklist/)
