document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('startBtn');
    const resultEl = document.getElementById('result');
    if (!button) return;

    function askNumber(question) {
        const r = prompt(question);
        if (r === null) return null; // user cancelled
        const n = Number(r);
        return Number.isNaN(n) ? NaN : n;
    }

    button.addEventListener('click', () => {
        let score = 0;

        const sleep = askNumber('How many hours do you sleep per day? (number)');
        if (sleep === null) { alert('Test cancelled'); return; }
        if (!Number.isNaN(sleep) && sleep >= 4) score += 1;

        const music = prompt('Do you enjoy music? (yes/no)');
        if (music === null) { alert('Test cancelled'); return; }
        if (music.trim().toLowerCase() === 'yes') score += 1;

        const tired = prompt('Do you get tired? (yes/no)');
        if (tired === null) { alert('Test cancelled'); return; }
        if (tired.trim().toLowerCase() === 'yes') score += 1;

        const math = askNumber('What is 5 + 3 ?');
        if (math === null) { alert('Test cancelled'); return; }
        if (!Number.isNaN(math) && math === 8) score += 1;

        let message = '';
        if (score >= 3) { message = 'You are definitely Human!'; console.log('Result: Human'); }
        else if (score >= 1) { message = 'Half human, half robot!'; console.log('Result: Half Robot'); }
        else { message = 'Robot detected!'; console.log('Result: Robot'); }

        if (resultEl) {
            resultEl.textContent = message;
        } else {
            alert(message);
        }
    });
});
