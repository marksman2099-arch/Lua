let noClicks = 0;

function openLetter() {
    document.getElementById('envelope-wrap').classList.add('open');
}

function startQuiz(e) {
    e.stopPropagation(); // Stops the envelope from closing again
    document.getElementById('envelope-wrap').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'block';
}

function moveYes(e) {
    // Stops the touch from registering as a click on mobile screens
    if(e) e.preventDefault(); 
    
    const yesBtn = document.getElementById('yes-btn');
    
    // Calculate random position
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    
    yesBtn.style.position = 'fixed';
    yesBtn.style.left = x + 'px';
    yesBtn.style.top = y + 'px';
}

function handleNo() {
    noClicks++;
    const hint = document.getElementById('hint-text');
    const noBtn = document.getElementById('no-btn');
    
    // Check how many times she clicked "No"
    if (noClicks === 1) {
        hint.innerText = "لحظة!!! متعرفين ؟😢 ";
        noBtn.innerText = "لا 😢";
    } else if (noClicks === 2) {
        hint.innerText = "😡هاي صدك تحجين ؟؟؟ ";
        noBtn.innerText = "اي 😡";
    } else if (noClicks === 3) {
        hint.innerText = "😭دتسكرين كلبييي...";
        noBtn.innerText = "😭طبة مرض كلبك ";
    } else if (noClicks >= 4) {
        // The 4th click triggers the galaxy
        showGalaxy();
    }
}

function showGalaxy() {
    document.getElementById('quiz-section').style.display = 'none';
    document.getElementById('galaxy-section').style.display = 'flex';
    document.body.style.background = "black";
}