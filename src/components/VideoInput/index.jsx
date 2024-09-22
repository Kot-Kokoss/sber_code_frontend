import React from 'react';
import axios from 'axios';
import styles from './VideoInput.module.scss';

import Context from '../../main';

export const VideoInput = () => {
  const { setValue } = React.useContext(Context);
  const [videoFile, setVideoFile] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setVideoFile(file);
  };

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('video', file);

    try {
      setIsLoading(true);
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Успех:', response.data);
      setValue(response.data);
    } catch (error) {
      console.error('Ошибка:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleButtonClick = () => {
    if (videoFile) {
      uploadFile(videoFile);
    } else {
      document.getElementById('videoUpload').click();
    }
  };

  return (
    <div className={styles.form}>
      <h3>Загрузите видео для проверки</h3>
      <label htmlFor="videoUpload" style={{ display: 'none' }}>
        Загрузите видео для проверки
      </label>
      <input
        type="file"
        id="videoUpload"
        accept="video/*"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <button className={styles.button} onClick={handleButtonClick} disabled={isLoading}>
        {isLoading ? 'Загрузка' : videoFile ? 'Отправить видео' : 'Выбрать видео'}
      </button>
      {isLoading && <div className={styles.spinner}></div>}
    </div>
  );
};
