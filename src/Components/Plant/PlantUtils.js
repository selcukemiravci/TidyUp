const positions = {
    pos1: { x: 50, y: 625 },
    pos2: { x: 100, y: 550 },
    pos3: { x: 155, y: 475 },
};
const posKeys = Object.keys(positions);

let correctPlantPosition = false;

const movePlant = (currentState, setState) => {
    correctPlantPosition = false;

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

    if (nextPos == positions.pos3) {
        correctPlantPosition = true;
    }
};


export { positions, movePlant, correctPlantPosition }