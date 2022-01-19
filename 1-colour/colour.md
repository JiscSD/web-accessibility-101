# Introduction

Colour and contrast use is vital to accessibility. All users, including those with visual disabilities must be able to percieve content on the web page. The official guidelines for WCAG 2.1 AA can quickly become quite confusing and overwhelming. This readme aims to simplify and easily explain the standards we are required to meet.

In summary, It is better to have a website that is accessible to all users, than aesthetically pleasing to a subset of users but unaccessible to others due to colour and contrast choices.

There are multiple ways to define colours, ordinarily at Jisc we tend to use the "hexadecimal" format. For example, #E85E12. Where the red/green/blue values are made up of a combination of 6 numbers or letters. This is probably the most common format used across the web. Other formats include rgb and hsl.

---

# Use of colour

WCAG 2 does not prohibit any specific colour or combination, such as green and red. What is important is that these colours pass the contrast requirement. There is an important rule that states:

> Colour is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.

To summarise the rule above, we should not just rely on colours to inform our users.
Here is a good example to represent this on the [webaim site](https://webaim.org/articles/contrast/#sc141).

For example, let's say we have a table of todos and the status of the todo can be one of the following: todo, in progress, completed. We cannot just rely on background colours to signify the status of the todo (e.g. green for completed). We would also need to include another column for status, so that it's clear to all users, some of which may be colour blind.

Another example could be displaying form errors. It's not accessibile to just highlight a form input with a red border if validation fails. We would need to include and icon with some hidden text, or an error message next to the form input along with the red border.

We can still use colours to aesthetically improve the look and feel of our web pages, however we must make sure page content is not portrayed by only colour. If the designs dictate it, we must put other measures in place to ensure we meet accessibility standards.

Link text is a major issue; when the underline is removed, then the link is only recognisable through colour.

This is also true when conveying information through visual representations such as pie charts or graphs. Ensure clear labelling is present as well.

Check for issues by viewing your website in black and white. Are there any instructions you can’t follow or is there information you can’t understand?

---

# Contrast ratio

By definition in WCAG 2:

> Contrast is a measure of the difference in perceived "luminance" or brightness between two colours (the phrase "colour contrast" is never used). This brightness difference is expressed as a ratio ranging from 1:1 (e.g. white on white) to 21:1 (e.g., black on a white).

When designing and building our web pages, we need to be concious about colour and background choices. For example, we wouldn't place white text on a light grey background as it's obvious this is going to result in a bad contrast ratio. That being said, it's surprising how many websites still fail when it comes to accessible contrast ratios. Still, many designers and developers are in the mindest that if the contrast is fine for themselves, it would be fine for someone else, which clearly isn't the case.

The minimum requirement we need to adhere to has a contrast ratio of at least 4.5:1, except for the following:

-   Large text (24 px or bold 19px) - Must have a contrast ratio of at least 3:1.
-   Incidental - Text or images that are pure decoration or not visible to anyone.
-   Logotypes - Text that is part of a logo or brand name has no contrast requirement.

**Note: If text and background colours are swapped, the contrast ratio remains the same**

---

## Useful Tools:

[Web aim contrast checker](https://webaim.org/resources/contrastchecker/)

This tool can be used to quickly test different combinations of colours for contrast.

![web aim contrast checker image](https://i.ibb.co/BPLqNFD/Screenshot-2021-11-08-at-11-57-20.png)

---

## Bibliography:

[WUHCAG Checklist Use of Colour](https://www.wuhcag.com/use-of-colour/)
