const apikey = "5b6459a290c39602d8d8aa7c481de1ab";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.getElementById("input-city");
const searchbtn = document.getElementById("search");

    async function checkweather(city) {
        var response  = await fetch(apiurl + city + `&appid=${apikey}`)
        var data = await response.json();
        
        console.log(data)

        try{

            document.getElementById("city").innerHTML = data.name;
            document.getElementById("temp").innerHTML = Math.round(data.main.temp) +"°C";
            document.getElementById("humidity").innerHTML = data.main.humidity + "%";
            document.getElementById("wind").innerHTML = data.wind.speed + " km/h";
        }
        catch(error){
            console.log(`Error : Enter correct City Name`)
            document.getElementById("city").innerHTML = "Incorrect City";

            
        }
     
        
        
    }
      
          

                searchbtn.addEventListener("click",()=>{
                    
                    checkweather(searchbox.value);
                    
                })
          
            
      
           
           
               
   
            
  
