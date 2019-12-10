
This lesson is based on the Astuteo [Mobile Dropdown Conversion](https://www.astuteo.com/mobilemenu) project.

This is the navigation you want to use for your website.  However, it will break in some browsers on some devices.

- It works on iPhone 4 Safari (June 2010).
- It work in Chrome on same phone.
- It doesn't work on iPad 1 Safari (Jan. 2010).
  This can be fixed by changing all "rem" units to "em" units.
- It doesn't work in Chrome on iPad 1 either.  It works better if
  you change rem to em or pixels although it still has problems
  positioning the hamburger menu image.
- It works on Edge 15.  It works on IE 10, 11.
- The JavaScript doesn't work on IE 9.  The click action doesn't work.

Advantages to this technique:
- You can get up to 25 items on small phones and even more on larger ones.
- It's easy to change the colors.
- It's light-weight because it doesn't require the bloated jQuery library.
