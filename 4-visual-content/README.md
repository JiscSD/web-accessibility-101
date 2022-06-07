# Introduction

Working with media content on the web can be very difficult in general, but we have a great set of tools to help make that content more accessible. The below will go over the two most common types of media content, images & video and what we can do to enhance them for accessibility purposes.

---

**Contents**

1. [Images](#images)
2. [Videos](#videos)
3. [Bibliography](##bibliography)

---

# Images

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
Let's break down what is happening:

## Figure element

```html
<!-- Accepts a aria label & role -->
<figure aria-label="" role="">
    <!-- Media content here -->
    <figcaption><!-- Media caption content --></figcaption>
</figure>
```

The above element is a figure, which is a block level element, i.e it **should** contain other block or inline block level elements.
Generally the figure element is seen as a simple way to add a semantic caption [(example here)](https://en.wikibooks.org/wiki/LaTeX/Floats,_Figures_and_Captions#/media/File:Latex_caption_example.png).

However, try to think of other ways that this caption could be used for the users benefit, possibly a hovered tool tip?
Screen readers will pick up the alt text and the long description, but in this figure a screen reader will also pick up the caption, giving more context to the content over a simple one line description of what the image is.

## Picture element

```html
<picture>
    <!-- Different types of picture source -->
    <source srcset="" type="" media="" />
    <!-- A fallback image -->
    <img src="" alt="" longdesc="" />
</picture>
```

The above picture element is similar to the `figure` element, being that is block level, so should have at least one child node.
The purpose of the picture element is to allow the developer to have much more precise control over the media they want to display.

When thinking about accessibility, we often just think of screen readers, and although that is a huge part of it, we also have to considor the user's device, viewport, and so on. This picture element allows us to put in an unlimited amount of `source` elements. The purpose of the source element is to provide a source set, i.e a set of different paths depending on a condition.

Looking at the below, I have a `source` element with three attributes:

-   srcset - A list of one or more strings separated by commas indicating a set of possible images represented by the source for the browser to use.
-   type - The MIME media type of the resource, optionally with a codecs parameter.
-   media - Media query of the resource's intended media.

```html
<source srcset="image-big.png" type="image/png" media="(min-width:1920px)" />
```

More information on the above can be found [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source)
Remember that the picture element can take many of these source elements, so the user is served exatly the media you want them to see intended for their device, window size and more.

```html
<!-- 
    We assume the user is on a desktop,
    therefore we can serve them the biggest, best quality image
-->
<source srcset="image-big.png" type="image/png" media="(min-width:1920px)" />

<!-- 
    We assume the user is on a desktop or laptop,
    therefore we can serve them a medium sized image as their connection may not be strong
-->
<source srcset="image-med.png" type="image/png" media="(min-width:1200px)" />

<!-- 
    We assume the user is on a tablet or mobile device,
    therefore we serve them a cut down image where quality isn't as important
-->
<source srcset="image-small.png" type="image/png" media="(min-width:700px)" />
```

Finally, you will notice there is still an `img` element. This will only be used as a fall back if none of the above conditions are met.
Generally an edge case catch all. But be sure to supply the needed alt & long description if needed.

---

# Videos

Video content is very similar to image media, however can be a litle more tricky as different browsers render & interact with video content in their own way.  
Before looking into the semantics of video content, it is important to first think about what you are trying to do when using video. Has the client/PO asked for a video to be shown simply as backing content? Or is this video there for the user to play, pause, full screen, adjust volume and so on.  
There are a few guided rules when it comes to this:

1. Does the client want the video to automatically start playing when the user hits the page?
    - If so, keep in mind that due to the old school pop-ups, **most** browsers will enforce a muted video if autoplay is enabled.
    - Autoplay is generally something to avoid if possible.
2. Does the client want this to be used as a background content?
    - Considor using a .gif instead that is produced from the original video content.
3. Is the intention for this video to be more commonly viewed on a mobile device or a desktop device?
    - Video content can be very heavy in terms of its file size, video formats as very important when thinking about the user
4. Does the video content **have** to be hosted locally with the site, or can it be delegated off to a third party (S3, YouTube, Vimeo)
    - Using video content off-site can be both good & bad, so if the file is else where, think about using a service which it's intention is to provide a better solution.

```html
<!-- 
    Just like the img & picture elements, we can wrap our video content in a
    figure wich allows more details atrributes
-->
<figure aria-label="" role="">
    <!--
        The video element has a large amount of possible attributes ranging from
        default frames to picture in pucture mode.
        Please see the below video link to see what each of these attributes provide
    -->
    <video controls width="250">
        <!--
            Unlike the picture element, the source elements here do not use media query conditionals.
            The order of render is top to bottom, i.e the webm (prefered) video will first try to
            render. If the browser does not support webm, then the next source will try.
            Generally mp4 if used as the fall back as most browsers support it, however is usually 
            the heaviest format. Also There are complications with Safari.
        -->
        <source src="/media/cc0-videos/flower.webm" type="video/webm" />
        <source src="/media/cc0-videos/flower.mp4" type="video/mp4" />
    </video>
    <!-- Fall back text if the users browser can not render either of the above media types -->
    Sorry, your browser doesn't support embedded videos.
    <figcaption>This is my video</figcaption>
</figure>
```

---

## Bibliography

-   [Figure](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure)
-   [Captions](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption)
-   [Image](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
-   [Picture](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)
-   [Video](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
-   [Source](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source)
