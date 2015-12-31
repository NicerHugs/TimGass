import React from 'react';
import $ from "jquery";

class Home extends React.Component {
  render () {
    $("body").css("background-image", "linear-gradient(rgba(0, 0, 0, .3),  rgba(0, 0, 0, .3)), url(../assets/Main.jpg)");
    $("body").css("background-position", "top");
    $("#title").css("display", "block");
    $("#name").css("margin-bottom", "0px");
    $("#name").css("padding-top", "60px");
    $("#home").replaceWith("<a href=#About id=about>About</a>");
    return (
      <div className="wrapper">
        <p>
          <strong>Hello, </strong>
          my name is Timothy Gass. I'm a junior web developer in the Nashville area! The picture above is a picture of me
          and my brother. I'm the guy with brown hair on the right in case you were wondering (and my favorite color is green,
          you'll see it a lot!). Anyway, this is a little site about who I am and what I do, so feel
          free to look around and learn whatever you want about me! Thanks for visting!
        </p>
    </div>
    );
  }
}

export default Home;
