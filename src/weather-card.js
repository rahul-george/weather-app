import "./weather-card.css";

class WeatherCard {
    constructor() {}

    updateCard({
        icon,
        condition,
        location,
        actual_temp,
        feels_like,
        wind_speed,
        humidity,
    }) {
        this.condition_img.src = icon;
        this.condition_text.textContent = condition;
        this.location.textContent = location;
        this.actual_temp.textContent = actual_temp;
        this.feels_like_temp.textContent = feels_like;
        this.wind_speed.textContent = wind_speed;
        this.humidity.textContent = humidity;
    }

    render() {
        this.card = document.createElement("div");
        this.card.classList.add("card");
        const condition_row = document.createElement("span");
        condition_row.classList.add("condition");
        this.condition_img = document.createElement("img");

        this.condition_text = document.createElement("p");
        condition_row.appendChild(this.condition_img);
        condition_row.appendChild(this.condition_text);

        this.card.appendChild(condition_row);

        this.location = document.createElement("p");
        this.location.classList.add("location");
        this.card.appendChild(this.location);

        // Actual temp card
        this.actual_temp = document.createElement("p");
        this.actual_temp.classList.add("actual_temp");
        this.card.appendChild(this.actual_temp);

        // Feels like row
        const feels_like_row = document.createElement("span");
        feels_like_row.classList.add("feels_like");
        const feels_like_label = document.createElement("p");
        feels_like_label.textContent = "Feels Like: ";
        this.feels_like_temp = document.createElement("p");
        feels_like_row.appendChild(feels_like_label);
        feels_like_row.appendChild(this.feels_like_temp);
        this.card.appendChild(feels_like_row);

        // Wind speed row
        const wind_speed_row = document.createElement("span");
        wind_speed_row.classList.add("windspeed");
        const wind_speed_label = document.createElement("p");
        wind_speed_label.textContent = "Wind speed: ";
        this.wind_speed = document.createElement("p");
        wind_speed_row.appendChild(wind_speed_label);
        wind_speed_row.appendChild(this.wind_speed);
        this.card.appendChild(wind_speed_row);

        // Humidity row
        const humidity_row = document.createElement("span");
        humidity_row.classList.add("humidity");
        const humidity_label = document.createElement("p");
        humidity_label.textContent = "Humidity: ";
        this.humidity = document.createElement("p");
        humidity_row.appendChild(humidity_label);
        humidity_row.appendChild(this.humidity);
        this.card.appendChild(humidity_row);

        return this.card;
    }
}

export { WeatherCard };
