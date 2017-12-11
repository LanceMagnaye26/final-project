var bigHomeLogo = document.getElementById("logo");
var landingPage = document.getElementById("backgroundLanding");
var startPage = document.getElementById("startPage");
var lonzo = document.getElementById("player1");
var bingram = document.getElementById("player2");
var julius = document.getElementById("player3");
var kingKuz = document.getElementById("player4");
var dunkBoy = document.getElementById("player5");
var navigation = document.getElementById("navBar");
var openCloseNav = document.getElementById("pullOut");
var downButton = document.getElementById("downButton")
var upButton = document.getElementById("upButton");
var jerseyPage = document.getElementById("jerseyMaker");
var numInput = document.getElementById("jerseyNumber");
var nameInput = document.getElementById("jerseyName");
var numDisplay = document.getElementById("numDisplay");
var nameDisplay = document.getElementById("nameDisplay");
var jersey = document.getElementById("display");
var save = document.getElementById("saveImg");
var load = document.getElementById("loadImg");
var formPage = document.getElementById("signupSheet");
var downButton2 = document.getElementById("rightButton");
var checkBox = document.getElementById("agree");
var bday = document.getElementById("birthday");
var formName1 = document.getElementById('firstname')
var formName2 = document.getElementById('lastname')
var email = document.getElementById("email");
var kobe = document.getElementById("kobe");
var jerseyArray = [];
var openClose = 0;
var check = false;

var playerInfoContainer = document.getElementById("playerInfo");
var playerInformation = [
    'Lonzo Anderson Ball (born October 27, 1997) is an American professional basketball player for the Los Angeles Lakers of the National Basketball Association (NBA). He played college basketball for one season with the UCLA Bruins, earning consensus first-team All-American honors before the Lakers selected him with the second overall pick of the 2017 NBA draft.'
, 
    'Brandon Xavier Ingram (born September 2, 1997) is an American professional basketball player for the Los Angeles Lakers of the National Basketball Association (NBA). He was drafted by the Lakers with the second overall pick of the 2016 NBA draft, and was named to the NBA All-Rookie Second Team.'
,
    'Julius Deion Randle (born November 29, 1994) is an American professional basketball player for the Los Angeles Lakers of the National Basketball Association (NBA). He played one season of college basketball for the Kentucky Wildcats before being drafted by the Lakers with the seventh overall pick in the 2014 NBA draft.'
,
    'Kyle Kuzma (born July 24, 1995) is an American professional basketball player for the Los Angeles Lakers of the National Basketball Association (NBA). Kuzma played college basketball for the Utah Utes, and was named first-team all-conference in the Pac-12 as a junior in 2016&ndash;17. He was selected in the 2017 NBA draft in the first round with the 27th overall pick.'
,
    'Larry Donnell Nance Jr. (born January 1, 1993) is an American professional basketball player for the Los Angeles Lakers of the National Basketball Association (NBA). He played college basketball for Wyoming, where he was considered one of the best big men in the Mountain West Conference after leading the 2014&ndash;15 Wyoming Cowboys to their first NCAA Tournament appearance since 2002.' 
]

function openCloseNavBar(isOpen){
    if(!isOpen){
        navBar.style.right = '0%';
        check = true;
    } else if (isOpen){
        navBar.style.right = '-10%';
        check = false;
    }
}

bigHomeLogo.addEventListener("click", function(){
    landingPage.style.left = "-100%";
    setTimeout(function(){
        landingPage.style.display = "none";
        startPage.style.transition = '0s';
        navBar.style.display = "block";
    },1500);
    navBar.style.opacity = "1";
    startPage.style.right = '0%';
    
});

lonzo.addEventListener("click", function(){
    if (openClose == 0){
        openClose = 1
        playerInfoContainer.innerHTML = playerInformation[0];
        bingram.style.top = '100%';
        setTimeout(function(){
            julius.style.top = '-100%';
            setTimeout(function(){
                kingKuz.style.top = '100%';
                setTimeout(function(){
                    dunkBoy.style.top = '-100%';
                    setTimeout(function(){
                        playerInfoContainer.style.left = '19.6%';
                    },500);
                },500);
            },500);
        },500);
    } else if (openClose == 1){
        openClose = 0
        playerInfoContainer.innerHTML = playerInformation[0];
        playerInfoContainer.style.left = '-100%';
        setTimeout(function(){
            bingram.style.top = '0%';
            setTimeout(function(){
                julius.style.top = '0%';
                setTimeout(function(){
                    kingKuz.style.top = '0%';
                    setTimeout(function(){
                       dunkBoy.style.top = '0%';
                    },500);
                },500);
            },500);
        },500);
        
    }  
});

bingram.addEventListener("click", function(){
    if (openClose == 0){
        openClose = 1
        playerInfoContainer.innerHTML = playerInformation[1];
        lonzo.style.top = '100%';
        setTimeout(function(){
            bingram.style.left = '0.2%';
            setTimeout(function(){
                julius.style.top = '-100%';
                setTimeout(function(){
                    kingKuz.style.top = '100%';
                    setTimeout(function(){
                        dunkBoy.style.top = '-100%';
                        setTimeout(function(){
                            playerInfoContainer.style.left = '19.6%';
                        },500);
                    },500);
                },500);
            },500);
        },500);
            
    } else if (openClose == 1){
        openClose = 0
        playerInfoContainer.innerHTML = playerInformation[0];
        playerInfoContainer.style.left = '-100%';
        setTimeout(function(){
            dunkBoy.style.top = '0%';
            setTimeout(function(){
                kingKuz.style.top = '0%';
                setTimeout(function(){
                        julius.style.top = '0%';
                        setTimeout(function(){
                            bingram.style.left = '20.2%';
                            setTimeout(function(){
                                lonzo.style.top = '0%'
                            },500);
                        },500);
                },500);
            },500);
        },500);
        
    }  
});

julius.addEventListener("click", function(){
    if (openClose == 0){
        openClose = 1;
        playerInfoContainer.innerHTML = playerInformation[2];
        lonzo.style.left = '-19.6%';
        dunkBoy.style.left ='100%';
        setTimeout(function(){
            bingram.style.left = '-19.6%';
            kingKuz.style.left = '100%';
            setTimeout(function(){
                julius.style.left = "0.2%";
                setTimeout(function(){
                    playerInfoContainer.style.left = '19.6%';
                },500)
            },500)
        },500);
    } else if (openClose == 1){
        openClose = 0;
        playerInfoContainer.style.left = '-100%';
        setTimeout(function(){
            julius.style.left = "40.2%";
            setTimeout(function(){
                bingram.style.left = '20.2%';
                kingKuz.style.left = '60.2%';
                setTimeout(function(){
                    lonzo.style.left = '0.2%';
                    dunkBoy.style.left = '80.2%';
                },500);
            },500);
        },500);
    }
});

kingKuz.addEventListener("click", function(){
    if (openClose == 0){
        openClose = 1;
        playerInfoContainer.innerHTML = playerInformation[3];
        lonzo.style.top = '200%';
        julius.style.top = '200%';
        setTimeout(function(){
            bingram.style.top = '200%';
            dunkBoy.style.top ='200%';
            setTimeout(function(){
                kingKuz.style.left = "0.2%";
                setTimeout(function(){
                    playerInfoContainer.style.left = '19.6%';
                },500)
            },500)
        },500);
    } else if (openClose == 1){
        openClose = 0;
        playerInfoContainer.style.left = '-100%';
        setTimeout(function(){
            kingKuz.style.left = '60.2%';
            setTimeout(function(){
                bingram.style.top = '0%';
                dunkBoy.style.top = '0%';
                setTimeout(function(){
                    lonzo.style.top = '0%';
                    julius.style.top = "0%";
                },500);
            },500);
        },500);
    }    
});

dunkBoy.addEventListener("click", function(){
        if (openClose == 0){
        openClose = 1;
        playerInfoContainer.innerHTML = playerInformation[4];
        kingKuz.style.left = "-19.6%";
        setTimeout(function(){
            bingram.style.left = '-39.2%';
            setTimeout(function(){
                julius.style.left = '-58.8%';
                setTimeout(function(){
                    lonzo.style.left = '-78.4%';
                    setTimeout(function(){
                        dunkBoy.style.left = "0.2%";
                        setTimeout(function(){
                            playerInfoContainer.style.left = '19.6%';
                        },500)
                    },500)
                },500)
            },500)
        },500);
    } else if (openClose == 1){
        openClose = 0;
        playerInfoContainer.style.left = '-100%';
        setTimeout(function(){
            dunkBoy.style.left = '80.2%';
            setTimeout(function(){
                kingKuz.style.left = '60.2%';             
                setTimeout(function(){
                    julius.style.left = "40.2%";                    
                    setTimeout(function(){
                        bingram.style.left = '20.2%';
                        setTimeout(function(){
                            lonzo.style.left = '0.2%';

                        },500);

                    },500);
                },500);
            },500);
        },500);;
    }    
});

openCloseNav.addEventListener("click", function(){
    openCloseNavBar(check);
});

downButton.addEventListener("click", function(){
    startPage.style.transition = '1.5s';
    startPage.style.top = '-100%';
    jerseyPage.style.bottom = '0%';
    formPage.style.bottom = '-100%';
    
    setTimeout(function(){
        jerseyPage.style.transition = '0s';
    }, 10);

});

upButton.addEventListener("click", function(){
    jerseyPage.style.transition = '1.5s';
    jerseyPage.style.bottom = '-100%';
    startPage.style.top = '0%';
    setTimeout(function(){
        startPage.style.transition = '0s';
    }, 10);
});

numInput.addEventListener("input", function(){
    console.log(numInput.value);
    numDisplay.innerHTML = numInput.value;
});

nameInput.addEventListener("input", function(){
    console.log(nameInput.value);
    nameDisplay.innerHTML = nameInput.value;
});

save.addEventListener("click", function(){
    jerseyArray = [];
    jerseyArray.push({
        "mname" : nameDisplay.innerHTML,
        "mnumber" : numDisplay.innerHTML,
    });
    console.log(jerseyArray);
    var arrText = JSON.stringify(jerseyArray);
    localStorage.setItem('items', arrText);
});

load.addEventListener("click", function(){
    var arrText = localStorage.getItem('items');
    jerseyArray = JSON.parse(arrText);
    console.log(arrText);
    nameDisplay.innerHTML = jerseyArray[0].mname;
    numDisplay.innerHTML = jerseyArray[0].mnumber;
});

downButton2.addEventListener("click", function(){
    jerseyPage.style.transition = '1.5s';
    jerseyPage.style.bottom = '100%';
    formPage.style.bottom = '0%';
    setTimeout(function(){
        formPage.style.transition = '0s';
    }, 10);

});

formPage.addEventListener("keydown", function(ev){
    if (ev.keyCode == 13 && checkBox.checked == true) {
        if (bday.value == ''){
            alert('All fields are required')
        } else if (formName1 == ''){
            alert('All fields are required')
        } else if (formName1 == ''){
            alert('All fields are required')
        } else if (email == ''){
            alert('All fields are required')
        } else{
            kobe.style.opacity = '1';
            var yearStr = bday.value.substring(0,4);
            var year = parseInt(yearStr);
            var kobeDiff = year-1978;
            console.log(kobeDiff);
            var ndiv = document.createElement("div");
            ndiv.innerHTML ='';
            ndiv.className = 'kobeInfo';
            formPage.appendChild(ndiv);
                if (kobeDiff == 0){
                    ndiv.innerHTML = 'You were born the same year as the black Mamba! Champions were born this year.'
                } else if (kobeDiff < 0){
                    ndiv.innerHTML = 'You are older than Kobe by '+Math.abs(kobeDiff)+' years!'
                } else if (kobeDiff > 0){
                    ndiv.innerHTML = 'Kobe is older than you by '+kobeDiff+' years!'
                }
        }
        
    } else if (ev.keyCode == 13 && checkBox.checked == false){
        alert('You need to check the box in order to continue!')
    }
});

