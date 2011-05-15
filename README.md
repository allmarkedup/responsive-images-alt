Responsive Images
==================

An variation on the Filament Group's [responsive images technique](https://github.com/filamentgroup/Responsive-Images) (the cookie-driven version).

The aim of this variation is to cut down the amount of JS required for both the situation where there is a naming convention in place to identify the larger size image *and* for when the larger file needs to be specified in the source. In fact in this approach, the JS simply sets a cookie identifying whether or not the larger image should be loaded, and the .htaccess file deals with the rest.

This is not a fork of their repo as this version requires a slightly different syntax to trigger the responsive image loading behaviour.

## Approach A
	
If your small and large image filenames are consistent and predictable (such as filename.jpg vs filename.large.jpg), then you only need to add a `?r` to the end of the image filename, and then a larger version will be dynamically loaded if the device screen resolution is larger than the breakpoint.

## Approach B

If your larger image is not predictably named then you can specify a path to the larger image by just appending it as a parameter to the query string, such as `?r=img/kitteh.large.jpg`. This image will then be loaded for screen resolutions larger than the breakpoint.

Demo here: [http://responsive-images.allmarkedup.com/demo.html](http://responsive-images.allmarkedup.com/demo.html)