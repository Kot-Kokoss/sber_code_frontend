import React from 'react';
import axios from 'axios';
import styles from './VideoInput.module.scss';

export const VideoInput = () => {
  const [videoFile, setVideoFile] = React.useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setVideoFile(file);
  };

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('video', file);

    try {
      const response = await axios.post('URL_ВАШЕГО_БЭКЕНДА/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Успех:', response.data);
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  const handleButtonClick = () => {
    if (videoFile) {
      alert('файл отправлены');
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
      <button className={styles.button} onClick={handleButtonClick}>
        {videoFile ? 'Отправить видео' : 'Выбрать видео'}
      </button>
    </div>
  );
};
