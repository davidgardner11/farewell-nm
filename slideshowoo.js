function SlideShow(container, interval) {
  var i = 0,
      previous = false,
      timer = false,
      container_id = container || 'slideshow',
      slides = document.getElementById(container_id).getElementsByTagName('li'),
      interval = interval || 700;

  this.start = function() {
    this.hideAll(slides);
    this.stop();
    nextSlide();
  }

  this.stop = function() {
          clearTimeout(timer)
      }

  this.hideAll = function(items) {
    for (var i=0; i < items.length; i++) {
      items[i].style.display = "none";
    }
  }

  nextSlide = function() {
    // reset the count if it is at the end
    if(slides.length === i) {
      i = 0;
    }

    // hide the previous slide
    if(previous) {
      previous.style.display = "none";
    }

    // show the slide
    slides[i].style.display = "block";

    // set the previous var to the current slide
    previous = slides[i];

    // increment i
    i++;

    // trigger nextSlide after a set amount of time
    timer = setTimeout(nextSlide, interval);
  }
}

ss = new SlideShow('slideshow', 4500);
ss.start();
