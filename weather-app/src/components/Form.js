import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { WeatherContext } from "../context/WeatherContext";

function Form() {
  // inputta yazdığımız değerleri tutuyoruz
  const [inputValue, setInputValue] = useState("")
  const {city,setCity} = useContext(WeatherContext)
  console.log(city)
  // setCity onSubmit içerisinde setCity(inputValue) submit tıklayınca yazdığımız veriler geliyor.
  function changeCity(e) {
    setInputValue(e.target.value)
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setCity(inputValue)
        }}
      >
        {/* formu yenilememek için e.preventDefault */}
        <div className="form">
          <input
            value={inputValue}
            onChange={changeCity}
            className="inputText"
            type="text"
            placeholder="Şehir Giriniz"
          />
        </div>
        <div className="btnDiv">
          <button type="submit" className="btn">
            Hava Durumunu Göster
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;