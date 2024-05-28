const btn = document.getElementById('btn');
const container = document.getElementById('container');

btn.addEventListener('click', function() {
    const circle = document.createElement('div');
    circle.style.borderRadius = '50%';
    circle.style.backgroundColor = 'darkblue';
    circle.style.margin = '50px';
    circle.style.width = '120px';
    circle.style.height = '120px';
    container.appendChild(circle);
});
