const positions = {
    pos1: { x: 475, y: 330 },
    pos2: { x: 590, y: 330 },
};
const posKeys = Object.keys(positions);

let correctBookStackPosition = false;

const moveBooks = (currentState, setState) => {
    correctBookStackPosition = false;

    const audio = document.getElementById('clickWAV');
    audio.play();

    const currentIndex = posKeys.findIndex(
        (key) => positions[key].x === currentState.x && positions[key].y === currentState.y
    );
    const nextIndex = (currentIndex + 1) % posKeys.length;
    const nextPos = positions[posKeys[nextIndex]];

    setState({
        pos: {
        x: nextPos.x,
        y: nextPos.y,
        },
    });

    if (nextPos === positions.pos2) {
        correctBookStackPosition = true;
    }
};


export { positions, moveBooks, correctBookStackPosition }