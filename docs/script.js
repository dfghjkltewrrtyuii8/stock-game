const stocks = {
    "SABIC": 90,
    "Al Rajhi Bank": 80,
    "STC": 110,
    "Miahona": 30,
    "Almarai": 50,
    "Aramco": 32,
    "Maaden": 55
};
let selected = null;
let price = 0;
let history = [];
let roundActive = false;
let buyPrice = 0;
const ROUND_DURATION = 30000;  // 30 seconds
const UPDATE_INTERVAL = 500;   // 2 updates/sec
let simInterval;
let simStart = 0;

const canvas = document.getElementById('chart');
const ctx = canvas.getContext('2d');

function init() {
    const controls = document.getElementById('controls');
    Object.keys(stocks).forEach(name => {
        const btn = document.createElement('button');
        btn.innerText = name;
        btn.className = 'stock-btn';
        btn.onclick = () => selectStock(name, btn);
        controls.appendChild(btn);
    });
    document.getElementById('buyButton').onclick = buy;
    selectStock(Object.keys(stocks)[0], controls.querySelector('button'));
}

function selectStock(name, btn) {
    document.querySelectorAll('.stock-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selected = name;
    price = stocks[name];
    history = [price];
    document.getElementById('currentPrice').innerText = price.toFixed(2);
    clearInterval(simInterval);
    roundActive = false;
    document.getElementById('message').innerText = '';
    document.getElementById('timer').innerText = '';
    document.getElementById('buyButton').disabled = false;
    drawChart(price);
}

function update() {
    const prev = price;
    price = Math.max(1, price + (Math.random() - 0.5) * 0.5);
    history.push(price);
    if (history.length > 100) history.shift();
    drawChart(prev);
    document.getElementById('currentPrice').innerText = price.toFixed(2);
    if (roundActive) updateTimer();
}

function drawChart(prevPrice) {
    const w = canvas.width, h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    const maxP = Math.max(...history), minP = Math.min(...history);
    ctx.beginPath();
    history.forEach((p, i) => {
        const x = (i / (history.length - 1)) * w;
        const y = h - ((p - minP) / (maxP - minP)) * h;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.strokeStyle = price >= prevPrice ? '#28a745' : '#dc3545';
    ctx.lineWidth = 2.5;
    ctx.stroke();
}

function buy() {
    if (roundActive) return;
    roundActive = true;
    buyPrice = price;
    simStart = performance.now();
    document.getElementById('message').innerText = `Bought at ${buyPrice.toFixed(2)} SAR`;
    document.getElementById('buyButton').disabled = true;
    simInterval = setInterval(update, UPDATE_INTERVAL);
}

function updateTimer() {
    const elapsed = performance.now() - simStart;
    const remaining = ROUND_DURATION - elapsed;
    if (remaining > 0) {
        document.getElementById('timer').innerText = `Time left: ${Math.ceil(remaining/1000)}s`;
    } else {
        endRound();
    }
}

function endRound() {
    clearInterval(simInterval);
    roundActive = false;
    const profit = price - buyPrice;
    const result = profit > 0 ? 'Success! You made ' : 'Not successful. You lost ';
    const color = profit > 0 ? '#28a745' : '#dc3545';
    const msg = `${result}${profit.toFixed(2)} SAR`;
    const messageDiv = document.getElementById('message');
    messageDiv.innerText = msg;
    messageDiv.style.color = color;
    document.getElementById('timer').innerText = '';
    document.getElementById('buyButton').disabled = false;
}

window.onload = init;
