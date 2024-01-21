Here the challenge was to implement a toaster--i.e. to conditionally show a hidden item when the mouse leaves the window. Going in, I knew this would require the use of a way to track where the cursor is on the screen, though this was new to me. The challenge also of course called for the implementation of a close button.

I surprised myself with how easy the `mouseleave` event listener is to work with, at least in this use case. As to the close button, there are two possible implementations from a UX perspective. Either (a) re-add the class that causes the element to re-disappear (thus causing the toaster to disappear), or (b) cause the element to be completely removed from the DOM.

I went with Option B. Removing it from the DOM seems like the better option, as it does not feel like a dark pattern. If the user has closed the toaster, they probably don't want to see it again. If they do, they can refresh the page.
