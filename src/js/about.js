import React from 'react';
import $ from "jquery";

class About extends React.Component {
  render () {
    $("body").css("background-image", "url(../assets/Urumqi.jpg)");
    $("body").css("background-position", "top");
    $("#title").css("display", "none");
    $("#name").css("padding-top", "0px");
    $("#about").replaceWith("<a href=# id=home>Home</a>");
    return (
    <div className="wrapper">
      <p>
        A little bit about me, I have a deep appreciation for other cultures, because I grew up in Wulumuqi, or Urumqi, China.
        Also yes, that is the city in the picture you see above. I have been all over the world and many parts of Asia.
        I love a good adventure, and I love to be exposed to different things.
      </p>
    </div>
  );
  }
}

export default About;
