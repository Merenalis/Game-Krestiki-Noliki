const area = document.getElementById('area');
let move = 0;
let result = '';
const contentWrap = document.getElementById('content');
const modal_result = document.getElementById('modal-result');
const modal_start = document.getElementById('modal-start');
const overlay = document.getElementById('overlay');
const btn_new_game = document.getElementById('btn-new_game');
const btn_start_game = document.getElementById('btn-start_game');
const results = document.getElementById('results');
let win_krestik = 0;
let win_nolik = 0;

area.addEventListener('click', e => {
    if (e.target.className = 'box') {
        move % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = '0';
        move++;
        check();
    }
})

const check = () => {
    const boxes = document.getElementsByClassName('box');
    
    const arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < arr.length; i++) {
        if (boxes[arr[i][0]].innerHTML == 'X' && boxes[arr[i][1]].innerHTML == 'X' && boxes[arr[i][2]].innerHTML == 'X') {
            result = 'Победа крестиков';
            resultsView(result);
            win_krestik++;
            winning(win_nolik, win_krestik);

            break;

        } else if (boxes[arr[i][0]].innerHTML == '0' && boxes[arr[i][1]].innerHTML == '0' && boxes[arr[i][2]].innerHTML == '0') {
            result = 'Победа ноликов';
            resultsView(result);
            win_nolik++;
            winning(win_nolik, win_krestik);
            break;

        } /*else if (!(boxes[arr[i][0]].innerHTML == 'X' && boxes[arr[i][1]].innerHTML == 'X' && boxes[arr[i][2]].innerHTML == 'X') && !(boxes[arr[i][0]].innerHTML == '0' && boxes[arr[i][1]].innerHTML == '0' && boxes[arr[i][2]].innerHTML == '0') && move == 9) {
            result = 'Ничья';
            resultsView(result);
        }*/
        else if (move == 9) {
            result = 'Ничья';
            resultsView(result);
        }
    }
}
const resultsView = winner => {
    contentWrap.innerHTML = `<p> ${winner} </p>`;
    modal_result.style.display = 'block';
}
const winning = (winnol, winkrest) => {
    results.innerHTML = `Нолики: ${winnol} <br> Крестики: ${winkrest}`;

}

const closeMod = () => {
    const boxes = document.getElementsByClassName('box');
    modal_result.style.display = 'none';
    for (let ii = 0; ii < 9; ii++) {
        boxes[ii].innerHTML = '';
    }
    move = 0;

}
const closeMod_start = () => {

    modal_start.style.display = 'none';
}

btn_new_game.addEventListener('click', closeMod);
btn_start_game.addEventListener('click', closeMod_start);

