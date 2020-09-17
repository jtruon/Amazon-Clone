import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/TV/BRND/BRND_MTH20_00000_GWBleedingHero_3000x1200_Final_en-US_PVD5529_B._CB406173267_.jpg"
          alt=""
        ></img>

        <div className="home__row">
          <Product
            id="1"
            title=" Govee Smart WiFi LED Strip Lights Works with Alexa 16.4ft"
            price={25.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71613gvJT3L._AC_SL1000_.jpg"
            rating={5}
          />
          <Product
            id="2"
            title=" Nanoleaf Rhythm Edition Smarter Kit - NL28-2003TW-9PK"
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/519b9L%2BdDNL._AC_SL1000_.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="3"
            title=" All-new Ring Video Doorbell – newest generation, 2020 release – 1080p HD video, improved motion detection, easy installation – Satin Nickel"
            price={99.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71mlE7vPglL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="4"
            title=" 
            Google Nest Learning Thermostat - Programmable Smart Thermostat for Home - 3rd Generation Nest Thermostat - Works with Alexa - [Stainless Steel]"
            price={219.0}
            image="https://images-na.ssl-images-amazon.com/images/I/51NU5qMMuYL._AC_SL1000_.jpg"
            rating={5}
          />
          <Product
            id="5"
            title=" Sony Noise Cancelling Headphones WHCH710N: Wireless Bluetooth Over the Ear Headset with Mic for Phone-Call, Black"
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51OF7sr7e6L._AC_SL1200_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="6"
            title="KitchenAid KSM180QHGSD Queen of Hearts Stand Mixer, 5 Qt, Passion Red"
            price={346.07}
            image="https://images-na.ssl-images-amazon.com/images/I/71V2DtObsPL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="7"
            title="Dyson V11 Animal Cordless Vacuum Cleaner, Purple"
            price={599.0}
            image="https://images-na.ssl-images-amazon.com/images/I/51rrZSW00aL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="8"
            title=" LG OLED55CXPUA Alexa Built-In CX 55 4K Smart OLED TV (2020)"
            price={(1, 596.99)}
            image="https://images-na.ssl-images-amazon.com/images/I/818ywvvXAML._AC_SL1200_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
