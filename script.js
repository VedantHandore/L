document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('responseMessage').classList.remove('hidden');
    document.getElementById('yesButton').disabled = true;
    document.getElementById('noButton').disabled = true;
});

document.getElementById('noButton').addEventListener('mouseover', function() {
    const button = document.getElementById('noButton');
    button.style.position = 'absolute';
    button.style.top = Math.random() * (window.innerHeight - button.clientHeight) + 'px';
    button.style.left = Math.random() * (window.innerWidth - button.clientWidth) + 'px';
});
