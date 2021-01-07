import React from "react";
import "./styles.css";
import { Jumbotron } from "react-bootstrap";
import BrettsCaurosel from "./BrettsCaurosel";

import distAlarmImage from "./img/aerial.JPG";
import oneUpOneDownImage from "./img/float.jpg";
import catchImage from "./img/parrots.jpg";
import kelpImage from "./img/kelp.jpg";

let distAlarm = {
  img: distAlarmImage,
  alt: "Distance Alarm",
  heading: "Distance Alarm",
  paragraph: "Monitor Partner Distance"
};

let oneUpOneDown = {
  img: oneUpOneDownImage,
  alt: "One-Up One-Down",
  heading: "One-Up One-Down",
  paragraph: "Monitor One-Up One-Down"
};

let parrots = {
  img: catchImage,
  alt: "The catch",
  heading: "The catch",
  paragraph: "Look at all those parrot fish"
};

let kelp = {
  img: kelpImage,
  alt: "The kelp",
  heading: "The kelp",
  paragraph: "Look at all those senoritas"
};

const data = [distAlarm, oneUpOneDown, parrots, kelp];
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Jumbotron>
          <h1>
            Bootstrap<b>Carousel</b>
          </h1>
        </Jumbotron>
        <BrettsCaurosel data={data} />
      </div>
    );
  }
}
