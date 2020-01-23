import React from 'react';
import CartContainer from './CartContainer';
import ResultItem from './ResultItem';
import FoodCard from './FoodCard';
import './App.css';

//image
import Food1 from './img/salad.jpg';
import Food2 from './img/cover-chinese-combo-min.jpg';
import Food3 from './img/nasi-kucing.jpg'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCart: 'none',
      displaySearch: false,
      searchValue: '',
      displayResult: false
    }
  }

  renderCart = () => {
    this.setState({ displayCart: 'flex' });
  }
  renderSearch = () => {
    this.setState({ displaySearch: true });
  }
  closeSearch = () => {
    this.setState({ displaySearch: false });
  }
  handleChange(event) {
    this.setState({ searchValue: event.target.value }, () => {
      this.state.searchValue.length >= 3 ? this.setState({ displayResult: true }) : this.setState({ displayResult: false });
    });
  }
  render() {
    return (
      <main>
        <div className="header">
          <div className="address-container">
            <div className="back-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M20 11H6.83l2.88-2.88c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L3.71 11.3c-.39.39-.39 1.02 0 1.41L8.3 17.3c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L6.83 13H20c.55 0 1-.45 1-1s-.45-1-1-1z" /></svg>
            </div>
            <div>
              <p>Alamat Pengiriman</p>
              <button className="address-button" onClick={this.renderSearch}>
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
                  <p className="day">SEN</p>
                  <p>10</p>
                </button>
              </li>
              <li>
                <button className="btn-active">
                  <p className="day">SEL</p>
                  <p>11</p>
                </button>
              </li>
              <li>
                <button>
                  <p className="day">SEL</p>
                  <p>11</p>
                </button>
              </li>
              <li>
                <button>
                  <p className="day">SEL</p>
                  <p>11</p>
                </button>
              </li>
              <li>
                <button>
                  <p className="day">SEL</p>
                  <p>11</p>
                </button>
              </li>
              <li>
                <button>
                  <p className="day">SEL</p>
                  <p>11</p>
                </button>
              </li>
              <li>
                <button>
                  <p className="day">SEL</p>
                  <p>11</p>
                </button>
              </li>
              <li>
                <button>
                  <p className="day">SEL</p>
                  <p>11</p>
                </button>
              </li>
              <li>
                <button>
                  <p className="day">SEL</p>
                  <p>11</p>
                </button>
              </li>
              <li>
                <button>
                  <p className="day">SEL</p>
                  <p>11</p>
                </button>
              </li>
              <li>
                <button>
                  <p className="day">SEL</p>
                  <p>11</p>
                </button>
              </li>
              <li>
                <button>
                  <p className="day">SEL</p>
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
          <div>
            <FoodCard title="Roasted Chicken with Scramble Egg" by="Kulina"
              location="Uptown Lunch" price="35,000" imageLink={Food1}
              addToCart={this.renderCart}></FoodCard>
            <FoodCard title="Combo Chinese Lunch + Sari Kedondong" by="Kulina"
              location="Uptown Lunch" price="30,000" imageLink={Food2}
              addToCart={this.renderCart}></FoodCard>
            <FoodCard title="Nasi Kucing" by="Kulina"
              location="Kucink Oren" price="15,000" imageLink={Food3}
              addToCart={this.renderCart}></FoodCard>
            <FoodCard title="Roasted Chicken with Scramble Egg" by="Kulina"
              location="Uptown Lunch" price="35,000" imageLink={Food1}
              addToCart={this.renderCart}></FoodCard>
          </div>
        </div>
        <CartContainer display={this.state.displayCart}></CartContainer>
        <div className="search-container" style={{ display: this.state.displaySearch ? 'block' : 'none' }}>
          <div className="search-wrapper">
            <div className="close-div">
              <svg onClick={this.closeSearch} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" /></svg>
            </div>
            <p className="search-title">Cek makanan yang tersedia dilokasi kamu!</p>
            <div className="search-input-wrapper">
              <div className="search-svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M12 2C8.13 2 5 5.13 5 9c0 4.17 4.42 9.92 6.24 12.11.4.48 1.13.48 1.53 0C14.58 18.92 19 13.17 19 9c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
              </div>
              <input className="search-input" type="text" value={this.state.searchValue} onChange={this.handleChange.bind(this)} />
            </div>
            <div style={{ display: this.state.displayResult ? 'block' : 'none' }}>
              <ResultItem></ResultItem>
              <ResultItem></ResultItem>
              <ResultItem></ResultItem>
            </div>
          </div>
        </div>
      </main >
    );
  }
}

export default App;
