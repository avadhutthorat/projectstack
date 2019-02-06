import React from "react";
import moment from "moment";

const Notifications = props => {
  const { notifications } = props;
  return (
    <div className="section">
      <div className="card">
        <div className="card-content">
          <div className="card-title">Notifications</div>
          <ul>
            {notifications &&
              notifications.map(item => {
                return (
                  <li key={item.id}>
                    <span className="pink-text">{item.user} </span>
                    <span>{item.content}</span>
                    <div className="gray-text note-date">
                      {moment(item.time.toDate()).fromNow()}
                    </div>
                    <hr />
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
