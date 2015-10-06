// ToggleButton - a more abstract example of an object type
// that interacts with the DOM. 
function ToggleButton(btnSelector) {
  var buttonState = "not clicked";
  this.jQueryButton = $(btnSelector);
  console.log('jquery button in constructor: ', this.jQueryButton)

  this.handleClick = function() {
    //console.log('this in handleClick: ', this);
    console.log(buttonState);
    if (buttonState === "not clicked") {
      this.toggleOn();
    } else if (buttonState === "clicked") {
      this.toggleOff();
    }
  };

  this.toggleOn = function() {
    console.log("unclicked button was clicked");
    buttonState = "clicked";
    // clicked is a class that changes the button's CSS
    this.jQueryButton.addClass("clicked");
    this.jQueryButton.text("Unclick me!");
  }

  this.toggleOff = function() {
    console.log("clicked button was unclicked");
    buttonState = "not clicked";
    // clicked is a class that changes the button's CSS
    this.jQueryButton.removeClass("clicked");
    this.jQueryButton.text("Click me!");
  }
}

$(document).ready(function() {
  // when the document is ready
  // Make an instance of a ToggleButton
  var myButton = new ToggleButton('#my-button');
  console.log(myButton);
  // and attach this event listener to it
  $('#my-button').on('click', myButton.handleClick.bind(myButton));
  // passing the button's click handling function as a callback
});