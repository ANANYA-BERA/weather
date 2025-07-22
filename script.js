//http://api.weatherapi.com/v1/current.json?key=44cfa78ab87648f1867144752253103&q=Mumbai&aqi=no

const temperatureField = document.querySelector(".temp");
const locationField = document.querySelector(".time_location p");
const dateandtimeField = document.querySelector(".time_location span");
const conditionField = document.querySelector(".condition p");
const searchField = document.querySelector(".search-area");
const form = document.querySelector("form");

form.addEventListener("submit" , searchForLocation)

let Target = 'Kolkata'
const fetchResults = async (TargetLocation) =>{
    let url = `http://api.weatherapi.com/v1/current.json?key=44cfa78ab87648f1867144752253103&q=${TargetLocation}&aqi=no`
    
    const res = await fetch(url)

    const data = await res.json()
    console.log(data)

    let LocationName = data.location.name
    let time = data.location.localtime
    let temp = data.current.temp_c
    let condition = data.current.condition.text

    updateDetails(temp , LocationName , time , condition)
}

function updateDetails(temp , LocationName , time , condition){


    let splitDate = time.split(' ')[0]
    let splitTime = time.split(' ')[1]

    let currentDay = getDayName(new Date(splitDate).getDay())


    temperatureField.innerText = temp;
    locationField.innerText = LocationName;
    dateandtimeField.innerText = `${splitDate} ${currentDay} ${splitTime}`;
    conditionField.innerText = condition;

}

function searchForLocation(e){
    e.preventDefault()

    Target = searchField.value

    fetchResults(Target)
}

fetchResults(Target)


function getDayName(number){
    switch (number) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "friday";
      case 6:
        return "Saturday";
    }
}