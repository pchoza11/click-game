import React from "react";

const FriendCard = props => (
    <div className="card">
        <img className="image" alt={props.name} src={props.image} onClick={() => props.scoreCount(props.id)}/>
    </div>
);

export default FriendCard;