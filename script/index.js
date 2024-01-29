
let current_on = 0;
let direction = 1;
const CARROUSEL_SIZE = 4;
let id_interval;
let time_remaining = 0;

function forced_set(index, time) {  
    if(current_on > index){
        direction = -1;
    } else{
        direction = 1;
    }
    clearInterval(id_interval);
    set_Carrousel(index);
    time_remaining = time;
    id_interval = setInterval(restart, 100);
}

function restart(){
    time_remaining -= 1;
    if(time_remaining <= 0){
        clearInterval(id_interval);
        id_interval = setInterval(next_Carrousel, 3000);
    }
}

function set_Carrousel(index){
    for(let i = 0 ; i < CARROUSEL_SIZE ; i++){
        var id = '#Clavier' + (i + 1);
        var id_btn = '#btn-' + (i+1);
        if(index == i){
            $(id).removeClass("image-carrousel-off");
            $(id).addClass("image-carrousel-on");
            
            $(id_btn).removeClass("carrousel-btn-off");
            $(id_btn).addClass("carrousel-btn-on");

        } else {
            $(id).removeClass("image-carrousel-on");
            $(id).addClass("image-carrousel-off");

            $(id_btn).removeClass("carrousel-btn-on");
            $(id_btn).addClass("carrousel-btn-off");
        }
    }
}

function next_Carrousel(){
    if(current_on == CARROUSEL_SIZE-1){
        direction = -1;
    } else if(current_on == 0){
        direction = 1;
    }
    current_on = (current_on + direction);
    set_Carrousel(current_on);
}

set_Carrousel(0);
id_interval = setInterval(next_Carrousel, 3000);