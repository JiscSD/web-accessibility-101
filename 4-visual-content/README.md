# Visual content

Working with media content on the web can be very difficult in general, but we have great set of tools to help make that content more accessible. The below will go over the two most common types of media content, images & video and what we can do to enhace them.

### Images

When working with images, whether that be a .png, .jpg, .svg, .ico and so on, you likely / it is common to simply throw in an `img` element, set the source & some back up alt text and call it a day. This approach is _generally_ ok, although there is a whole lot more we can do for the user.

```html
<img src="my-image.png" alt="This is my image" />
```

The below example is one of the best setups we can do for images, not only to make it more accessible to users, but also to the browser.

```html
<figure aria-label="Description of the overall image" role="presentation">
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
<!-- Accepts a aria label & role -->
<figure aria-label="" role="">
    <!-- Media content here -->
    <figcaption><!-- Media caption content --></figcaption>
</figure>
```

The above element is a figure, which is a block level element, i.e it **should** contain other block or inline block level elements.
Generally the figure element is seen as a simply was to add a semantic caption [(example here)](https://en.wikibooks.org/wiki/LaTeX/Floats,_Figures_and_Captions#/media/File:Latex_caption_example.png).

However, try to think of other ways that this caption could be used for the users benefit, possibly a hovered tool tip?
Not only will screen readers pick up the alt & long description, but also will notice that this is a figure & here is it's caption, giving more context to the content over a simple one line description of what the image is.

```html
<picture>
    <!-- Different types of picture source -->
    <source srcset="" type="" media="" />
    <!-- A fallback image -->
    <img src="" alt="" longdesc="" />
</picture>
```

The above picture element is similar to the `figure` element, being that is block level, so should have at least one child node.
The picture elements purpose is to allow the develop to have much more precise control over the media they want to display.

When thinking about accessability, we often just think of screen readers, and although that is a huge part of it, we also have to considor the users device, their viewport and so on. This picture element allows us to put in an unlimited amount of `source` elements. The purpose of the source element is to provide a source set, i.e a set of different paths depending on a condition.

The most common use for this is window size or pixel density. For the purposes of this, will focus more on window size, although more informaiton about be found about pixel density [here](https://css-tricks.com/snippets/css/retina-display-media-query/). - Very useful if your intended user base use high resolution screens, think about Mac retina screens.

Looking at the below, I have a `source` element with three atrributes:

-   srcset - A list of one or more strings separated by commas indicating a set of possible images represented by the source for the browser to use.
-   type - The MIME media type of the resource, optionally with a codecs parameter.
-   media - Media query of the resource's intended media.

```html
<source srcset="image-big.png" type="image/png" media="(min-width:1920px)" />
```

More information on the above found [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source)

Remember that the picture element can take many of these source elements, so the user is served exatly the media you want them to see intended for their device, window size and more.

```html
<!-- 
    We assume the user is on a desktop,
    there for we can serve them the biggest, best quality image
-->
<source srcset="image-big.png" type="image/png" media="(min-width:1920px)" />

<!-- 
    We assume the user is on a desktop or laptop,
    there for we can serve them a medium sized image as their connection may not be strong
-->
<source srcset="image-med.png" type="image/png" media="(min-width:1200px)" />

<!-- 
    We assume the user is on a tablet or mobile device,
    there for we serve them a cut down image where quality isn't as important
-->
<source srcset="image-small.png" type="image/png" media="(min-width:700px)" />
```

Finally, you will notice there is still an `img` element. This will only be used a fall back if none of the above conditions are met.
Generally an edge case catch all. But be sure to supply the needed alt & long description if needed.

&nbsp;

### Videos

```html
<figure aria-label="" role="">
    <source src="/media/cc0-videos/flower.webm" type="video/webm" />
    <source src="/media/cc0-videos/flower.mp4" type="video/mp4" />
    Sorry, your browser doesn't support embedded videos.
    <figcaption>This is my video</figcaption>
</figure>
<video controls width="250"></video>
```

### Links

-   [Figure](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure)
-   [Captions](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption)
-   [Image](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
-   [Picture](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)
-   [Video](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
-   [Source](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source)
