import React from "react";
import ImageButton from "./ImageButton";
import EmojiButton from "./EmojiButton";
import { useNavigate } from 'react-router-dom';

const Faces = () => {
    const navigate = useNavigate();
    const handleEmojiClick = (emotion) => {
        if (emotion == "Angry" || emotion == "Sad"){
            navigate('../why')
        }
        else if (emotion == "Content" || emotion == "Proud"){
            navigate('../queerKnowledge')
        }
        else{
            navigate('../middleFace')
        }
        //alert(`You clicked for ${emotion}!`);
        // You can add logic based on the emotion clicked
    };

    const centerContainerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        topMargin: "15vh", // Make the container take the full height of the viewport
    };

    const titleStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30vh",
        fontSize: "50px", // Adjust spacing between the title and emojis
    };

    return (
        <div>
            <h1 style={titleStyle}>How do you feel?</h1>
            <div style={centerContainerStyle}>
                <EmojiButton
                    onClick={() => handleEmojiClick("Angry")}
                    emoji="😠"
                    label="Angry"
                />
                <EmojiButton
                    onClick={() => handleEmojiClick("Sad")}
                    emoji="😢"
                    label="Sad"
                />
                <EmojiButton
                    onClick={() => handleEmojiClick("Confused")}
                    emoji="😐"
                    label="Confused"
                />
                <EmojiButton
                    onClick={() => handleEmojiClick("Content")}
                    emoji="😊"
                    label="Content"
                />
                <EmojiButton
                    onClick={() => handleEmojiClick("Proud")}
                    emoji="😃"
                    label="Proud"
                />
            </div>
        </div>
    );
};

export default Faces;
