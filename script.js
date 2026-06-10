const CORRECT_PASSWORD = "28122021";

let typedPassword = "";

const display = document.getElementById("display");

function updateDisplay(){

    let dots = [];

    for(let i = 0; i < 8; i++){

        if(i < typedPassword.length){
            dots.push("●");
        }
        else{
            dots.push("○");
        }

    }

    display.innerHTML = dots.join(" ");
}

function addNumber(number){

    if(typedPassword.length >= 8) return;

    typedPassword += number;

    updateDisplay();

    if(typedPassword.length === 8){

        if(typedPassword === CORRECT_PASSWORD){

            document
            .getElementById("screen")
            .classList
            .add("fade-out");

            setTimeout(()=>{

                showSecondPage();

            },1000);

        }

        else{

            navigator.vibrate?.(200);

            display.classList.add("shake");

            setTimeout(()=>{
                display.classList.remove("shake");
            },400);

            setTimeout(()=>{
                typedPassword = "";
                updateDisplay();
            },500);

        }

    }

}

function showSecondPage(){

    const screen = document.getElementById("screen");

    screen.classList.remove("fade-out");

    screen.innerHTML = `
        <div class="second-page">

            <audio id="backgroundMusic" src="./getyouthemoon.mp3.m4a" loop></audio>

            <div class="fixed-van-gogh-bg"></div>

            <main class="second-page-scroll" id="secondPageScroll">

                <img class="red-line" src="./linha.png.png" alt="">

                <section class="music-section">

                    <img class="vinyl" src="./vinil.png.png" alt="Disco de vinil">

                    <div class="song-text">
                        <p>
                            Você me deu um ombro quando eu precisei<br>
                            Você mostrou o amor quando eu não estava sentindo<br>
                            Você me ajudou a lutar quando eu estava cedendo<br>
                            Você me fez rir quando eu estava perdendo
                        </p>

                        <p>
                            Porque você é, você é<br>
                            A razão pela qual eu ainda estou aguentando<br>
                            Porque você é, você é<br>
                            A razão pela qual minha cabeça ainda está acima da água<br>
                            E se eu pudesse dar a Lua a você, eu daria a você<br>
                            E se eu pudesse dar a Lua a você<br>
                            E daria a você<br>
                            E se a morte estivesse vindo para você<br>
                            Eu daria minha vida por você
                        </p>
                    </div>

                </section>

 <section class="memories-section">

    <div class="memories-composition">

        <img class="photo-one" src="./foto1.png.png" alt="Foto de mãos formando coração">

        <p class="text-one">
            Algumas pessoas colecionam fotografias, outras guardam cartas.
            Eu guardo momentos. E, entre todos eles, os meus favoritos sempre têm algo em comum: você.
        </p>

        <button class="envelope-button" onclick="openLetter()">
            <img src="./envelope.png.png" alt="Abrir carta">
        </button>

        <p class="text-two">
            Cada lembrança me leva de volta ao mesmo lugar: o sorriso que me faz sentir em casa,
            independentemente de onde estejamos, se estivermos juntos...
        </p>

        <img class="photo-two" src="./foto2.png.png" alt="Foto do casal">

    </div>

</section>

                <section class="ending-section">

                    <img class="ending-image" src="./fim.png.png" alt="Feliz dia dos namorados">

                </section>

            </main>

            <div class="letter-modal" id="letterModal">

                <div class="letter-backdrop" onclick="closeLetter()"></div>

<div class="letter-box" onclick="event.stopPropagation()">
    <img src="./carta.png.png" alt="Carta">
</div>

            </div>

        </div>
    `;

    const music = document.getElementById("backgroundMusic");

    music.volume = 0.45;

    music.play().catch(() => {
        console.log("O navegador bloqueou o autoplay da música.");
    });
}

function openLetter(){

    const modal = document.getElementById("letterModal");
    const content = document.getElementById("secondPageScroll");

    modal.classList.add("active");
    content.classList.add("blurred");
}

function closeLetter(){

    const modal = document.getElementById("letterModal");
    const content = document.getElementById("secondPageScroll");

    modal.classList.remove("active");
    content.classList.remove("blurred");
}

updateDisplay();