import React from 'react';
import './App.css';

function App() {
  return (
    <main>
      <div className="header">
        <div className="address-container">
          <div className="back-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M20 11H6.83l2.88-2.88c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L3.71 11.3c-.39.39-.39 1.02 0 1.41L8.3 17.3c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L6.83 13H20c.55 0 1-.45 1-1s-.45-1-1-1z" /></svg>
          </div>
          <div>
            <p>Alamat Pengiriman</p>
            <button className="address-button">
              <p>Tokopedia Tower</p>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="down-arrow"><path opacity=".87" fill="none" d="M24 24H0V0h24v24z" /><path d="M15.88 9.29L12 13.17 8.12 9.29c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z" /></svg>
              </div>
            </button>
          </div>
        </div>
        <div className="date-container">
          <ul>
            <li>
              <button>
                <p>SEN</p>
                <p>10</p>
              </button>
            </li>
            <li>
              <button className="btn-active">
                <p>SEL</p>
                <p>11</p>
              </button>
            </li>
            <li>
              <button>
                <p>SEL</p>
                <p>11</p>
              </button>
            </li>
            <li>
              <button>
                <p>SEL</p>
                <p>11</p>
              </button>
            </li>
            <li>
              <button>
                <p>SEL</p>
                <p>11</p>
              </button>
            </li>
            <li>
              <button>
                <p>SEL</p>
                <p>11</p>
              </button>
            </li>
            <li>
              <button>
                <p>SEL</p>
                <p>11</p>
              </button>
            </li>
            <li>
              <button>
                <p>SEL</p>
                <p>11</p>
              </button>
            </li>
            <li>
              <button>
                <p>SEL</p>
                <p>11</p>
              </button>
            </li>
            <li>
              <button>
                <p>SEL</p>
                <p>11</p>
              </button>
            </li>
            <li>
              <button>
                <p>SEL</p>
                <p>11</p>
              </button>
            </li>
            <li>
              <button>
                <p>SEL</p>
                <p>11</p>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="time-selector">
        <button className="active">Lunch</button>
        <button>Dinner</button>
      </div>
      <div className="main-container">
        <div className="date">
          <p>Kamis. 13 Desember 2019</p>
        </div>
        <div className="food-list">
          <div className="food-card">
            <div className="food-picture"></div>
            <div className="food-content">
              <div className="rating-container">
                <p>4.5 </p>
                <div>
                  <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 16.8 6.36 4.6285714-2.4342857-7.4742857 6.36-4.52571427h-7.8l-2.4857143-7.71428572-2.48571429 7.71428572h-7.8l6.36 4.52571427-2.43428571 7.4742857z" ></path></svg>
                  <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 16.8 6.36 4.6285714-2.4342857-7.4742857 6.36-4.52571427h-7.8l-2.4857143-7.71428572-2.48571429 7.71428572h-7.8l6.36 4.52571427-2.43428571 7.4742857z" ></path></svg>
                  <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 16.8 6.36 4.6285714-2.4342857-7.4742857 6.36-4.52571427h-7.8l-2.4857143-7.71428572-2.48571429 7.71428572h-7.8l6.36 4.52571427-2.43428571 7.4742857z" ></path></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z" /><path d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" /></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" /></svg>
                </div>
              </div>
              <div>
                <h3>Roasted Chicken with Scramble Egg</h3>
                <p>by <span>Kulina</span> &bull; <span>Uptown Lunch</span></p>
              </div>
              <div className="price-container">
                <p>Rp <span>35,000</span></p>
                <button>
                  <p>ADD </p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cart-container">
        <button className="cart-button">
          <div>
            <p><span>5</span> items | Rp <span>125,000</span></p>
            <p>Termasuk ongkos kirim</p>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 3c0 .55.45 1 1 1h1l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.67-1.43c-.16-.35-.52-.57-.9-.57H2c-.55 0-1 .45-1 1zm16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" /></svg>
          </div>
        </button>
      </div>
      <div className="search-container">
        <div className="search-wrapper">
          <div className="close-div">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" /></svg>
          </div>
          <p className="search-title">Cek makanan yang tersedia dilokasi kamu!</p>
          <div className="search-input-wrapper">
            <div className="search-svg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M12 2C8.13 2 5 5.13 5 9c0 4.17 4.42 9.92 6.24 12.11.4.48 1.13.48 1.53 0C14.58 18.92 19 13.17 19 9c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
            </div>
            <input className="search-input" type="text" />
          </div>
          <div className="result-container">
            <div className="result-wrapper">
              <div className="result-svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M12 2C8.13 2 5 5.13 5 9c0 4.17 4.42 9.92 6.24 12.11.4.48 1.13.48 1.53 0C14.58 18.92 19 13.17 19 9c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
              </div>
              <div className="result-address">
                <p>Kulina</p>
                <p>Jl. Sudirman</p>
              </div>
            </div>
            <div className="result-wrapper">
              <div className="result-svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M12 2C8.13 2 5 5.13 5 9c0 4.17 4.42 9.92 6.24 12.11.4.48 1.13.48 1.53 0C14.58 18.92 19 13.17 19 9c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
              </div>
              <div className="result-address">
                <p>Kulina</p>
                <p>Jl. Sudirman</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
