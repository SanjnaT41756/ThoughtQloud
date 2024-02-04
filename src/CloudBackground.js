// BackgroundPage.js
import React from 'react';
import CloudButton from './Cloud';
import { Link } from "react-router-dom";
import './CloudBackground.css'

const CloudBackground = ({ numberOfClouds, type }) => {
  let bubbleTitles = new Array();
  if (type == "dummy"){
    bubbleTitles.push("CHANGE ME")
  }

  if (type == "initial"){
    bubbleTitles.push("I want to learn more")
    bubbleTitles.push("My kid is queer")
  }
  else if (type == "queer"){
    bubbleTitles.push("Are you suspicious of their queer identity?")
    bubbleTitles.push("Did you find out in an argument?")
    bubbleTitles.push("Did they tell you?")
  }
  else if (type == "why"){
    bubbleTitles.push("Ashamed")
    bubbleTitles.push("Religion")
    bubbleTitles.push("Deceit")
    bubbleTitles.push("Dissapointment")

  }
  else if (type == "ashamed"){
    bubbleTitles.push("You failed as a parent")
    bubbleTitles.push("You didnt want to be different")
    bubbleTitles.push("they gross you out")

  }
  else if (type == "religion"){
    bubbleTitles.push("against beliefs")
    bubbleTitles.push("uuuu")
    bubbleTitles.push("challenge")

  }
  else if (type == "deceit"){
    bubbleTitles.push("how not have known")
    bubbleTitles.push("changes everyrhing")
    bubbleTitles.push("they liars")

  }
  else if (type == "dissapointment"){
    bubbleTitles.push("everything thought change")

  }
  else if (type == "queerKnowledge"){
    bubbleTitles.push("Yes")
    bubbleTitles.push("No")
  }
  else if (type == "yes"){
    bubbleTitles.push("sure?")

  }
  else if (type == "no"){
    bubbleTitles.push("wanna learn more?")
  }
  else if (type == "middleFace"){
    bubbleTitles.push("Do you know what being queer is?")
    bubbleTitles.push("How did i not see the signs")
    bubbleTitles.push("They dont seem gay to me")
  }
  else if (type == "sure"){
    bubbleTitles.push("ok")
  }
  else if (type == "notSure"){
    bubbleTitles.push("learn more")
  }




  const renderClouds = () => {
    const clouds = [];
    for (let i = 0; i < numberOfClouds; i++) {
      clouds.push(<CloudButton label={bubbleTitles[i]} />);
    }
    return clouds;
  };

  return (
    <div className="background-page">
      <div className="cloud-container">
        {renderClouds()} 
      </div>
    </div>
  );
};

export default CloudBackground;
