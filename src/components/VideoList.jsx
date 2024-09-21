import React from 'react';
import { Button } from '@mui/material';

const VideoList = ({ items, handlerWatchLogs, violationItems }) => {
  const [vilationsIsVisible, setVilationsIsVisible] = React.useState(false);
  return (
    <ul className="screen-list">
      <h2>Видеозаписи</h2>
      {items.map((item) => {
        return (
          <li className="screen-item" key={item.videoId}>
            <h3>Запись: {item.videoName}</h3>
            {vilationsIsVisible &&
              violationItems.map((item) => {
                return (
                  <li className="log__item" key={item.violation_type}>
                    <div className="item__info">
                      <p>Нарушение: {item.violation_type}</p>
                      <p>Время: {item.violation_time}</p>
                      <Button onClick={() => handlerWatchLogs(item.videoId)}>
                        Посмотреть фотофиксацию
                      </Button>
                    </div>

                    <img src={testImg} alt="" />
                  </li>
                );
              })}
            <Button
              onClick={() => {
                handlerWatchLogs(item.videoId);
                setVilationsIsVisible(true);
              }}>
              Посмотреть логи
            </Button>
          </li>
        );
      })}
    </ul>
  );
};

export default VideoList;
