(function (){
    //spans
    let seconds = document.querySelector('.seconds');
    let minutes = document.querySelector('.minutes');
    let hours = document.querySelector('.hours');

    function Timer(h = 0, m = 0, s = 0) {
        let hour = h;
        let minute = m;
        let second = s;
        seconds.innerHTML = addLeftZero(second);
        minutes.innerHTML = addLeftZero(minute);
        hours.innerHTML = addLeftZero(hour);

        let interval = setInterval(() => {
            second++;
            seconds.innerHTML = addLeftZero(second);
            
            if(second === 60) {
                minute++;
                second = 0;
                seconds.innerHTML = addLeftZero(second);
                minutes.innerHTML = addLeftZero(minute);
            }
            
            if(minute === 60) {
                hour++;
                minute = 0;
                minutes.innerHTML = addLeftZero(minute)
                hours.innerHTML = addLeftZero(hour);
            }

            if(hour === 23 && minute === 60 && seconds === 60) {
                hour = 0;
                second = 0;
                minute = 0;

                hours.innerHTML = addLeftZero(hour);
                minutes.innerHTML = addLeftZero(minute)
                seconds.innerHTML = addLeftZero(second);
            }
        }, 1000)

        document.querySelector(".stop").addEventListener('click', () => {
            clearInterval(interval);
            let valueSecond = Number(document.querySelector('.seconds').innerText);
            let valueMinute = Number(document.querySelector('.minutes').innerText);
            let valueHour = Number(document.querySelector('.hours').innerText);
            document.querySelector('h2').style.color = "red";

            document.querySelector('.resume').addEventListener('click', () => {
                Timer(valueHour, valueMinute, valueSecond);
                document.querySelector('h2').style.color = "#000";
            })
            
        }); 
        
        document.querySelector(".restart").addEventListener('click', () => {
            clearInterval(interval);
            seconds.innerHTML = addLeftZero(0);
            minutes.innerHTML = addLeftZero(0);
            hours.innerHTML = addLeftZero(0);

            Timer();
        });     
    }   

    function addLeftZero(number) {
        return number < 10 ? '0' + number : number;
    }

    document.addEventListener('click', (e) => {
        e.preventDefault();
        if( e.target.className === 'init' ) {
            Timer();
        } 
    });
})();