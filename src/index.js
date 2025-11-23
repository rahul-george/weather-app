import "./styles.css";

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
    }

    setUnit(unit) {
        this.unit = unit;
    }

    setCity(city) {
        this.city = city;
    }

    initializeUnitSelect() {
        this.unitElement.addEventListener("change", (e) => {
            this.setUnit(e.target.checked ? "C" : "F");
        });
    }

    resetCitySelect() {
        this.citySearch.value = "";
    }

    initializeCityInput() {
        this.citySearch.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                if (e.target.value === "" || e.target.value === this.city)
                    ReadableStreamDefaultController;
                this.setCity(e.target.value);
                this.resetCitySelect();
            }
        });
    }
}

const app = new App();
