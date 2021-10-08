# web-accessibility-101 :sparkles:
## To support developers using React in building accessible software under WCAG 2.1 AA guidelines.
In this repository you will find some information on web accessibility, split into sections and with code examples. Try and complete the quick fire checklist below to see whether there is any that are missing from your product. 

---
## Contents:
1. [Colour Contrast](1-colour-contrast/README.md)
2. Page Structure and Semantic HTML
3. ARIA attributes
4. Visual Content
5. Keyboard Only
6. Forms 
7. Tables
8. Common Accessibility issues with Material UI component library
9. Testing resources
    * CI/CD Tools
    * Automated Testing
    * Manual Testing

---

## Quick fire checklist:
- [ ] Is the lang attribute set to the correct language? 
- [ ] Does the design have accessible colours? If not, have the colours been checked? (1)
- [ ] Is there only one H1 Heading present on each page? (2)
- [ ] Are the Heading tags in a logical order matching the structure? §2)
- [ ] Is semantic HTML used where possible? (2)
- [ ] Are ARIA attributes used if semantic HTML is not possible? (3)
- [ ] Do all images have descriptive alt text? (4)
- [ ] Does any visual/audio content have the option to pause? (4)
- [ ] If you have a navigation header, is a 'skip to main content' link present? (5)
- [ ] Are interactive attributes focusable, with obvious visible styling on focus? (5)

- [ ] Does your codebase have documentation in a README and comments where necessary?

---

### Bibliography/Useful Resources:
* [WCAG Quick Reference Guide](https://www.w3.org/WAI/WCAG21/quickref/)
* [Web Accessibility in Mind](https://webaim.org/)
* [Google Developers Accessibility Guide](https://developers.google.com/web/fundamentals/accessibility)
* [Mozilla Developers Accessibility Guide](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
* [React Accessibility Docs](https://reactjs.org/docs/accessibility.html)
* [Web Accessibility for Developers (WUHCAG) Checklist](https://www.wuhcag.com/wcag-checklist/)
* [a11y Project checklist](https://www.a11yproject.com/checklist/)
