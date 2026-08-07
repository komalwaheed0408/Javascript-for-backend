document.getElementById('images').addEventListener('click', function() {
    console.log('clicked inside ul');
})

document.getElementById('owl').addEventListener('click', function(e) {
    console.log('clicked on owl');
    e.stopPropagation(); // Prevents the event from bubbling up to parent elements, otherwise the event applied on id images will also be triggered when clicking on the owl image.
}, false); //it is gonna be false by default, but I like to be explicit about it.

document.getElementById('google').addEventListener('click', function(e) {
    
    e.preventDefault(); // Prevents the default action of the event from being triggered. In this case, it prevents the browser from navigating to the Google website when the link is clicked.
    e.stopPropagation(); // Prevents the event from bubbling up to parent elements, otherwise the event applied on id images will also be triggered when clicking on the google link.
    console.log('clicked google');
}, false);

    
// Event delegation: Instead of adding event listeners to each individual image, we add a single event listener to the parent element (the ul with id 'images'). When an image is clicked, the event bubbles up to the parent, and we can check if the target of the event is an image. If it is, we remove its parent li element from the DOM:

    // document.querySelector('#images').addEventListener('click', function(e){
    //     console.log(e.target.tagName);
    //     if (e.target.tagName === 'IMG') {
    //         console.log(e.target.id);
    //         let removeIt = e.target.parentNode
    //         removeIt.remove()
    //     }
    
        
    // })