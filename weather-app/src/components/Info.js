import { WiSunset } from "react-icons/wi";
import { WeatherContext } from "../context/WeatherContext";
import { useContext } from "react";
function Info({state}) {

  const {dailyWeather} = useContext(WeatherContext)

  console.log(dailyWeather);
  return (
    <div>
      
        <div className="info">
          <p id="şehir">
          {dailyWeather.name}
          </p>{" "}
          {/*çektiğimiz url den  {dailyWeather.name} yaparsak inputa yazdığımız şehirindata içerisinden name adını vericektir */}
          <div className="genelDeger">
            <p id="sicaklik">
              {/*çektiğimiz url den  {dailyWeather.main.temp} yaparsak inputa yazdığımız şehirindata içerisinden name adını vericektir */}
              {dailyWeather.main.temp} Derece</p>
            <WiSunset className="fa-c" />
          </div>
          <div className="his">
            <br></br>
            <br></br>
            {/*çektiğimiz url den  {dailyWeather.main.feels_like} yaparsak inputa yazdığımız şehirindata içerisinden name adını vericektir */}
            <p id="hissedilen"> Hissedilen Sıcaklık {dailyWeather.main.feels_like} Derece</p>
            <WiSunset className="fa-c" />
          </div>
        </div>
    </div>
  );
}

export default Info;