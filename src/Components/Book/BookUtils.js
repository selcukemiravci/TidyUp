const positions = {
    pos1: 0,
    pos2: -90,
};
const posKeys = Object.keys(positions);

const rotateBook = (currentState, setState) => {
    const audio = document.getElementById('clickWAV');
    audio.play();

    const currentIndex = posKeys.findIndex(
        (key) => positions[key] === currentState
    );
    const nextIndex = (currentIndex + 1) % posKeys.length;
    const nextPos = positions[posKeys[nextIndex]];

    let image = document.getElementById('green-book');
    image.style.transform = `rotate(${nextPos}deg)`;

    setState({
        rotation: nextPos,
    });
};


export { positions, rotateBook }