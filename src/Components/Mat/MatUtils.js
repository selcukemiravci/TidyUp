const positions = {
    pos1: 25,
    pos2: 0,
};
const posKeys = Object.keys(positions);

let correctMatPosition = false;

const rotateMat = (currentState, setState) => {
    correctMatPosition = false;

    const audio = document.getElementById('clickWAV');
    audio.play();

    const currentIndex = posKeys.findIndex(
        (key) => positions[key] === currentState
    );
    const nextIndex = (currentIndex + 1) % posKeys.length;
    const nextPos = positions[posKeys[nextIndex]];

    let image = document.getElementById('mat');
    if (image.classList.contains('rotate-90'))
    {
        // remove class so that trasitions will work
        image.classList.remove('rotate-90');
        // Add transition class so transitions will work
        image.classList.add('transition-rotate-25');
    }
    image.style.transform = `rotate(${nextPos}deg)`;

    setState({
        rotation: nextPos,
    });

    if (nextPos === positions.pos2) {
        correctMatPosition = true;
    }
};


export { positions, rotateMat, correctMatPosition }