var signs = ["Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "INVALID DATE"];
var horoscopes = [
    "2020 will be a year filled with new experiences! Stay open to new possibilities and don't limit yourself, because you can do anything!",
    "sometimes you tend to put too much stress on yourself and get overwhelmed, but not this year! Take time to relax and enjoy the good times coming in 2020. Things will work out!",
    "take a hint from the fish that symbolizes your sign, and go with the flow! Whether you encounter calm or stormy seas, remember to just keep swimming!",
    "this year, remember your value as a person and that you can do anything! 2020 is a year to explore, adventure, and not doubt yourself!.",
    "whether you feel lost right now or know exactly what you want in life, there is nothing wrong with experimenting. You will figure it out.",
    "In 2020, don't forget that you are one of a kind! Even under the sign of the twin, there is no one exactly like you.",
    "2020 will be your year to build trust and confide in your friends and family. Although it doesn't always feel like it, talking things out always helps.",
    "as the sign of the lion, don't be afraid to let others hear your powerful roar. In 2020, great things are coming your way",
    "communication and trust should take center stage this year. Spend your time around supportive people who you can count on, and a great year is sure to come your way. You deserve it!",
    "2020 is a year to focus on friendships and being the kind of person you want to be! Focus on the good and leave the rest.",
    "Like the scorpion, you are strong and can handle anything! 2020 will bring adventures and new experiences!",
    "When you encounter problems this year, take a deep breath and remember you can solve anything you put your mind to.",
    "Invalid date, try again"
];
var images = ["images/capricorn.png", "images/aquarius.png", "images/pisces.png", "images/aries.png",
    "images/taurus.png", "images/gemini.png", "images/cancer.png", "images/leo.png",
    "images/virgo.png", "images/libra.png", "images/scorpio.png", "images/sag.png", "background.png"];

function determineSign(userMonth, userDay){

    if(userMonth == 0){
        if(userDay >= 20){
            return signs[1]
        }
        if(userDay <= 19){
            return signs[0];
        }
    }

    if(userMonth == 1){
        if(userDay >= 19 && userDay <= 28) {
            return signs[2];
        }
        if(userDay <= 18){
            return signs[1];
        }
        if(userDay > 28){
            return signs[12];
        }
    }

    if(userMonth == 2){
        if(userDay <= 20){
            return signs[2];
        }
        if(userDay >= 21){
            return signs[3];
        }
    }

    if(userMonth == 3){
        if(userDay <= 19){
            return signs[3];
        }
        if(userDay >= 20 && userDay <= 30){
            return signs[4];
        }
        if(userDay > 30){
            return signs[12];
        }
    }

    if(userMonth == 4){
        if(userDay <= 20){
            return signs[4];
        }
        if(userDay >= 21){
            return signs[5];
        }
    }

    if(userMonth == 5){
        if(userDay <= 20){
            return signs[5];
        }
        if(userDay >= 21 && userDay <= 30){
            return signs[6];
        }
        if(userDay > 30){
            return signs[12];
        }
    }

    if(userMonth == 6){
        if(userDay <= 22){
            return signs[6];
        }
        if(userDay >= 23){
            return signs[7];
        }
    }

    if(userMonth == 7){
        if(userDay <= 22){
            return signs[7];
        }
        if(userDay >= 23){
            return signs[8];
        }
    }

    if(userMonth == 8){
        if(userDay <= 22){
            return signs[8];
        }
        if(userDay >= 23 && userDay <= 30){
            return signs[9];
        }
        if(userDay > 30){
            return signs[12];
        }
    }

    if(userMonth == 9){
        if(userDay <= 22){
            return signs[9];
        }
        if(userDay >= 23){
            return signs[10];
        }
    }

    if(userMonth == 10){
        if(userDay <= 21){
            return signs[10];
        }
        if(userDay >= 22 && userDay <= 30){
            return signs[11];
        }
        if(userDay > 30){
            return signs[12];
        }
    }

    if(userMonth == 11){
        if(userDay <= 21){
            return signs[11];
        }
        if(userDay >= 22){
            return signs[0];
        }
    }
}

function determineHoroscope(sign){
    if(sign == "Capricorn"){
        return horoscopes[0];
    }

    if(sign == "Aquarius"){
        return horoscopes[1];
    }

    if(sign == "Pisces"){
        return horoscopes[2];
    }

    if(sign == "Aries"){
        return horoscopes[3];
    }

    if(sign == "Taurus"){
        return horoscopes[4];
    }

    if(sign == "Gemini"){
        return horoscopes[5];
    }

    if(sign == "Cancer"){
        return horoscopes[6];
    }

    if(sign == "Leo"){
        return horoscopes[7];
    }

    if(sign == "Virgo"){
        return horoscopes[8];
    }

    if(sign == "Libra"){
        return horoscopes[9];
    }

    if(sign == "Scorpio"){
        return horoscopes[10];
    }

    if(sign =="Sagittarius"){
        return horoscopes[11];
    }

    if(sign == "INVALID DATE"){
        return horoscopes[12];
    }
}

function determineImage(sign){
    if(sign == "Capricorn"){
        return images[0];
    }

    if(sign == "Aquarius"){
        return images[1];
    }

    if(sign == "Pisces"){
        return images[2];
    }

    if(sign == "Aries"){
        return images[3];
    }

    if(sign == "Taurus"){
        return images[4];
    }

    if(sign == "Gemini"){
        return images[5];
    }

    if(sign == "Cancer"){
        return images[6];
    }

    if(sign == "Leo") {
        return images[7];
    }

    if(sign == "Virgo"){
        return images[8];
    }

    if(sign == "Libra"){
        return images[9];
    }

    if(sign == "Scorpio"){
        return images[10];
    }

    if(sign =="Sagittarius"){
        return images[11];
    }
}
function onSubmit(){
    var userMonth = document.getElementById('month').value;
    var userDay = document.getElementById('day').value;
    var username = document.getElementById('username').value;
    var sign = determineSign(userMonth, userDay);
    var bday = determineBirthday(userMonth, userDay);
    var horoscope = determineHoroscope(sign);
    var image = determineImage(sign);

    document.getElementById('sign').innerHTML = sign;

    if(username.length >= 1){
        document.getElementById('horoscope').innerHTML = bday + username + ", " + horoscope;
    }else{
        document.getElementById('horoscope').innerHTML =  bday + horoscope;
    }

    document.getElementById('img').src = image;
}



function determineBirthday(userMonth, userDay){
    var bday = "";
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
    var currentDay = currentDate.getDate();
    if(userDay == currentDay && userMonth == currentMonth){
        bday = "Happy Birthday! ";
    }
    return bday;
}