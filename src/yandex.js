import ymaps         from 'ymaps';
import ymapsSettings from './yandexSettings';

class YandexMap {
  init() {
    ymaps
      .load()
      .then(maps => {
        const map = new maps.Map('ymaps', ymapsSettings);
      })
      .catch(error => console.log('Failed to load Yandex Maps', error));
  }

  merge() {

  }
}

export default new YandexMap();