import "./styles.css";
import { WeatherCard } from "./weather-card";

class App {
    constructor() {
        this.unitElement = document.querySelector("#unit-input");
        this.weatherContainer = document.querySelector(
            "#weather-card-container"
        );
        this.citySearch = document.querySelector("#city-search-text");
        this.error = document.querySelector("#error-message");
        this.initializeUnitSelect();
        this.initializeCityInput();

        this.unit = "C";
        this.city = "Munich, Germany";
        this.weather_card = new WeatherCard();
        this.weatherContainer.appendChild(this.weather_card.render());
    }

    setUnit(unit) {
        this.unit = unit;
    }

    async getWeatherData() {
        return await fetch(
            `https://api.weatherapi.com/v1/forecast.json?key=1986480656ec490d950204923202611&q=${this.city}`
        );
    }

    async parseWeatherResponse(response) {
        const data = await response.json();
        if (response.status >= 200 && response.status < 300) {
            const current_weather = data["current"];
            return {
                icon: current_weather["condition"]["icon"],
                condition: current_weather["condition"]["text"],
                location: `${data["location"]["name"]}, ${data["location"]["country"]}`,
                actual_temp:
                    this.unit === "C"
                        ? ` ${current_weather["temp_c"]} C`
                        : ` ${current_weather["temp_f"]} F`,
                feels_like:
                    this.unit === "C"
                        ? ` ${current_weather["feelslike_c"]} C`
                        : ` ${current_weather["feelslike_f"]} F`,
                wind_speed: `${current_weather["wind_kph"]} KPH`,
                humidity: ` ${current_weather["humidity"]}`,
            };
        } else {
            throw new Error(data["error"]["message"]);
        }
    }

    setError(message) {
        this.error.textContent = message;
        this.error.classList.remove("hidden");
    }

    resetError() {
        this.error.textContent = "";
        this.error.classList.add("hidden");
    }
    updateWeather(data) {
        this.weather_card.updateCard(data);
    }
    setCity(city) {
        this.city = city;
    }

    initializeUnitSelect() {
        this.unitElement.addEventListener("change", (e) => {
            this.setUnit(e.target.checked ? "C" : "F");
            this.setCity("");
        });
    }

    resetCitySelect() {
        this.citySearch.value = "";
    }

    initializeCityInput() {
        this.citySearch.addEventListener("keydown", async (e) => {
            if (e.key !== "Enter") return;
            if (e.target.value === "" || e.target.value === this.city) return;
            this.setCity(e.target.value);
            this.resetCitySelect();
            this.resetError();

            await this.getWeatherData()
                .then(this.parseWeatherResponse.bind(this))
                .then((data) => this.updateWeather(data))
                .catch((err) => this.setError(err));
        });
    }
}

const app = new App();
