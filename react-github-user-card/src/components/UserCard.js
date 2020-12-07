import React from 'react';

const UserCard = (props) => {

    return (
        <div className="user-div">
            <div className="user-card">
                <div className="img-div">
                    <img src={props.user.avatar_url} alt={props.user.name} id="userImg" />
                </div>
                <div className="card-text">
                    <h1>{props.user.name}</h1>
                    <h2>{props.user.login}</h2>
                    <a href={props.user.html_url}>{props.user.html_url}</a>
                    <p>Location: {props.user.location}</p>
                    <p>Followers: {props.user.followers}</p>
                    <p>Following: {props.user.following}</p>
                    <p>Bio: {props.user.bio === null ? 'null' : (props.user.bio)}</p>
                </div>
            </div>
        </div>
    )
}

export default UserCard;