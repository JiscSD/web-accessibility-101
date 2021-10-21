# Visual content

Working with media content on the web can be very difficult in general, but we have great set of tools to help make that content more accessible. The below will go over the two most common types of media content, images & video and what we can do to enhace them.

### Images

When working with images, whether that be a .png, .jpg, .svg, .ico and so on, you likely / it is common to simply throw in an `img` element, set the source & some back up alt text and call it a day. This approach is _generally_ ok, there is a whole lot more we can do.

```html
<img src="my-image.png" alt="This is my image" />
```

The below example is one of the best setups we can do for images, not only to make it more accessible to users, but also to the browser it's self.

```html
<figure>
    <picture>
        <source
            srcset="image-big.png"
            type="image/png"
            media="(min-width:1920px)"
        />
        <source
            srcset="image-med.png"
            type="image/png"
            media="(min-width:1200px)"
        />
        <source
            srcset="image-small.png"
            type="image/png"
            media="(min-width:700px)"
        />
        <img
            src="backup.png"
            alt="This is my image"
            longdesc="my-image-long-description.html"
        />
    </picture>
    <figcaption>This is my image!</figcaption>
</figure>
```

As you can see from the above, there is quite a lot more going on than a simple `img` element.
I will try & break down what is happening:

```html
<figure>
    <!-- Media content here -->
    <figcaption><!-- Media caption content --></figcaption>
</figure>
```

The above element is a figure, which is a block level element, i.e it **should** contain other block or inline block level elements.
Generally the figure element is see as a way to simply as a semantic caption [(example here)](https://en.wikibooks.org/wiki/LaTeX/Floats,_Figures_and_Captions#/media/File:Latex_caption_example.png).

However, try to think of other ways that this caption could be used for the users benefit, possibly a hovered tool tip?
Not only will screen readers pick up the alt & long description, but also will notice that this is a figure & here is it's caption, giving more context to the content over a simple one line description of what the image is.

```html
<picture>
    <!-- Different types of picture source -->
    <source srcset="" type="" media="" />
    <!--  -->
    <img src="" alt="" longdesc="" />
</picture>
```

&nbsp;

### Videos

```html

```
