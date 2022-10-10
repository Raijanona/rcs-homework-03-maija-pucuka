window.addEventListener('load', () => {
    let mainWrap = document.querySelector('.main-wrap')
    for (let i = 1; i <= 100; i++) {
        let div = document.createElement('div');
        let p = document.createElement('p');

        div.appendChild(p);
        mainWrap.appendChild(div).setAttribute("id", "div_" + i);

        if (i % 3 == 0 & i % 5 == 0) {
            div.appendChild(document.createTextNode(i + " FIZZ BUZZ"));
            mainWrap.appendChild(div).classList.add('fizzBuzz')
        }
            else if (i % 3 == 0) {
                div.appendChild(document.createTextNode(i + " FIZZ"));
                mainWrap.appendChild(div).classList.add('fizz')
            }
            
            else if (i % 5 == 0) {
                div.appendChild(document.createTextNode(i + " BUZZ"));
                mainWrap.appendChild(div).classList.add('buzz')
            }

            else {
                div.appendChild(document.createTextNode(i));
                mainWrap.appendChild(div).classList.add('n')
            }      
        
    }

})

$(document).ready(function(){ $("#btn_reset").click(function(){
    $(".fizzBuzz, .buzz, .fizz, .n").hide();
    });
});
$(document).ready(function(){ $("#btn_refresh").click(function(){
    $(".fizzBuzz, .buzz, .fizz, .n").show();
    });
});

$(document).ready(function(){ $("#btn_fizz").click(function(){
    $(".fizz").toggle();
    });
});

$(document).ready(function(){ $("#btn_buzz").click(function(){
    $(".buzz").toggle();
    });
});

$(document).ready(function(){ $("#btn_fizzbuzz").click(function(){
    $(".fizzbuzz").toggle();
    });
});