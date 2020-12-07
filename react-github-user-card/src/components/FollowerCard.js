import React from 'react';

const FollowerCard = (props) => {

    return (
        <div className="follower-div">
            {props.followers.map((follower, index) => {
                return (
                    <div key={index} className="follower-card">
                        <div className="img-div">
                            <img src={follower.avatar_url} alt={follower.login} />
                        </div>
                        <div className="card-text">
                            <h2>{follower.login}</h2>
                            <a href={follower.html_url}>{follower.html_url}</a>
                            <p>Followers: {follower.followers_url.length}</p>
                            <p>Following: {follower.following_url.length}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default FollowerCard;