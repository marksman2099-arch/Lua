let noClicks = 0;

function openLetter() {
    document.getElementById('envelope-wrap').classList.add('open');
}

function startQuiz(e) {
    e.stopPropagation();
    document.getElementById('envelope-wrap').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'block';
}

function moveYes(e) {
    if(e) e.preventDefault(); 
    const yesBtn = document.getElementById('yes-btn');
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 80);
    yesBtn.style.position = 'fixed';
    yesBtn.style.left = x + 'px';
    yesBtn.style.top = y + 'px';
}

function handleNo() {
    noClicks++;
    const hint = document.getElementById('hint-text');
    const noBtn = document.getElementById('no-btn');
    
    if (noClicks === 1) {
        hint.innerText = "لحظة!!! متعرفين ؟😢";
        noBtn.innerText = "لا 😢";
    } else if (noClicks === 2) {
        hint.innerText = "😡هاي صدك تحجين ؟؟؟";
        noBtn.innerText = "اي 😡";
    } else if (noClicks === 3) {
        hint.innerText = "😭دتكسرين كلبييي...";
        noBtn.innerText = "😭طبة مرض كلبك";
    } else if (noClicks >= 4) {
        showGalaxy();
    }
}

function showGalaxy() {
    document.getElementById('quiz-section').style.display = 'none';
    document.getElementById('galaxy-section').style.display = 'flex';
    document.body.style.background = "black";
}
