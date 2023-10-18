const emptyTrash = () => {
    const audio = document.getElementById('clickWAV');
    audio.play();

    const rubbishImg = document.getElementById('rubbish');
    if (rubbishImg) {
        if (rubbishImg.style.visibility === 'hidden') {
            rubbishImg.style.visibility = 'visible';
        } else {
            rubbishImg.style.visibility = 'hidden';
        }
    }
}

export { emptyTrash };