import React from "react";

export default function Card(props) {
  const { name, svn_url, stargazers_count: stars_count, forks, open_issues, owner } = props.data;
  return (
    <>
        <div class="card-content card-small top-content user-card">
          <div className="user-image-container image-container-small">
            <a className="white" href={svn_url}>
              <img
                src={owner.avatar_url}
                alt=""
                className="user-image img-small"
              />
            </a>
          </div>
          <div className="user-info">
            <h2 className="name mb-medium">
              <a href={svn_url}>{name}</a>
            </h2>
          </div>
          <div className="git-info">
            <ul>
              <li className="followers">
                <div className="followers-count medium">{stars_count}</div>
                <span className="followers-text small">
                  <img className="color-star" src="/img/starfilled.png" />
                </span>
              </li>
              <li className="stars">
                <div className="stars-count medium">{forks}</div>
                <span className="forked-text small">
                  <img className="color-forked" src="/img/forked.svg" />
                </span>
              </li>
              <li className="forked">
                <div className="forked-count medium">{open_issues}</div>
                <span className="stars-text small">
                  <img className="color-issues" src="/img/alert.svg" />
                </span>
              </li>
            </ul>
          </div>
        </div>
    </>
  );
}
