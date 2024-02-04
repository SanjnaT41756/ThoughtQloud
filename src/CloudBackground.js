// BackgroundPage.js
import React from "react";
import CloudButton from "./Cloud";
import { Link } from "react-router-dom";
import "./CloudBackground.css";
import { useNavigate } from "react-router-dom";

const CloudBackground = ({ numberOfClouds, type }) => {
    let bubbleTitles = new Array();
    let header;
    if (type == "dummy") {
        bubbleTitles.push("CHANGE ME");
    }

    if (type == "initial") {
        header = "Why are you here?";
        bubbleTitles.push("Just to learn");
        bubbleTitles.push(
            "My child has expressed interest in a non-normalized relationship"
        );
    } else if (type == "queer") {
        header = "What happened?";
        bubbleTitles.push("Are you suspicious of their queer identity?");
        bubbleTitles.push("Did you find out in an argument?");
        bubbleTitles.push("Did they tell you?");
    } else if (type == "why") {
        header = "Because of what?";
        bubbleTitles.push("Ashamed");
        bubbleTitles.push("Religion");
        bubbleTitles.push("Deceit");
        bubbleTitles.push("Dissapointment");
    } else if (type == "ashamed") {
        header = "What are you thinking?";
        bubbleTitles.push("I failed as a parent");
        bubbleTitles.push("What will other people think?");
        bubbleTitles.push("I don't want to be different");
    } else if (type == "religion") {
        header = "What are you thinking?";
        bubbleTitles.push("It is against all my beliefs");
        bubbleTitles.push("This is unnatural");
        bubbleTitles.push("This challenges everything I once thought I knew");
    } else if (type == "deceit") {
        header = "What are you thinking?";
        bubbleTitles.push("How could I not have known");
        bubbleTitles.push("I feel as if I don't know them anymore");
        bubbleTitles.push("I feel like they lied to me");
    } else if (type == "dissapointment") {
        header = "What are you thinking?";
        bubbleTitles.push(
            "Everything that I thought for my child will no longer happen."
        );
        bubbleTitles.push(
            "I don't want them to go through the hardships of being queer."
        );
    } else if (type == "queerKnowledge") {
        header = "Do you understand what it means to be Queer?";
        bubbleTitles.push("Yes");
        bubbleTitles.push("No");
    } else if (type == "yes") {
        header = "Do you understand what it means to be Queer?";
        bubbleTitles.push("sure?");
    } else if (type == "no") {
        header = "Do you understand what it means to be Queer?";
        bubbleTitles.push("wanna learn more?");
    } else if (type == "middleFace") {
        header = "Do you understand what it means to be Queer?";
        bubbleTitles.push("Do you know what being queer is?");
        bubbleTitles.push("How did i not see the signs");
        bubbleTitles.push("They dont seem gay to me");
    } else if (type == "sure") {
        header =
            "Queer is an umbrella term that includes a variety of sexual orientations and gender identities beyond the traditional categories of straight and cisgender.";
        bubbleTitles.push("ok");
    } else if (type == "notSure") {
        header =
            "Queer is an umbrella term that includes a variety of sexual orientations and gender identities beyond the traditional categories of straight and cisgender.";
        bubbleTitles.push("learn more");
    }
};

const renderClouds = () => {
    const clouds = [];
    for (let i = 0; i < numberOfClouds; i++) {
        clouds.push(<CloudButton label={bubbleTitles[i]} />);
    }

    return (
        <div className="background-page">
            <h2>{header}</h2>
            <div className="cloud-container">{renderClouds()}</div>
        </div>
    );
};

export default CloudBackground;
