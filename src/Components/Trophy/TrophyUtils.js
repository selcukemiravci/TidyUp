const positions = {
    pos1: { x: 625, y: 235 },
    pos2: { x: 515, y: 235 },
    pos3: { x: 385, y: 235 },
};
const posKeys = Object.keys(positions);

const moveTrophy = (currentState, setState) => {
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
};


export { positions, moveTrophy }