import ShowcaseAdvertisementItem from './components/ShowcaseAdvertisementItem';
import './App.css';

import home1 from './img/home1.jpg';
import home2 from './img/home2.jpg';
import home3 from './img/home3.jpg';
import home4 from './img/home4.jpg';
import userPhoto from './img/user.jpg';

const advertisementItems = [{title: '1-комн. квартира, 45,6 м²', photos: [home1, home2, home3, home4], location: 'Ростовская область, Ростов-на-Дону, р-н Советский, ул. Качинцев, 79В', userPhoto: userPhoto, userName: 'Лукманова Лилия', publishedDate: 'Сегодня', phone: {compressed: '+79001111111', expanded: '+7-900-111-11-11'}, catigories:['1 - комн.', '45,6 м²', '1/9 этаж',  'Лоджия',  'Кондиционер'], price: {total: '2 000 000 ₽', ForSqrM: '236 559 ₽'} },
                            {title: 'Дом, 31.7 м², 8.79 сот.', photos: [home1, home2, home3, home4], location: 'Ростовская область, Ростов-на-Дону, р-н Советский, ул. Качинцев, 79В', userPhoto: userPhoto, userName: 'Григорий Лепс', publishedDate: 'Сегодня', phone: {compressed: '+79001111111', expanded: '+7-900-111-11-11'}, catigories:['2-эт. дом', '320 м²', '8.79 сот.',  'Бассейн',  'Лоджия'], price: {total: '17 300 000 ₽', ForSqrM: '236 559 ₽'} }]

function App() {
  return (
    <div className="App">
      <div className="container">
        <section className='ShowcaseAdvertisement'>
          <div className="ShowcaseAdvertisement__list">

            {
              advertisementItems.map(advertisementItem => {
                return <ShowcaseAdvertisementItem {...advertisementItem}/>
              })
            }

          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
