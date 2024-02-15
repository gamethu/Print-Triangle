function VeTamGiacCan(){
    const length = document.getElementById('textfield').value;
    const vungve = document.getElementById('vungve');
    const vungtinh = document.getElementById('vungtinh');
    vungve.textContent = '';
    // vungve.style.textAlign = 'center';
    // vungve.style.float = 'left';


    let chieuCao = 0;
    let cheoTrai = 0;
    let cheoPhai = 0;
    let canhDay = 0;

    let indexFirst = 0;
    let indexLast = 0;

    let wide = length + length -1;
    let value = 0;
    let size = 1;
    
    vungve.innerHTML += '<table>';
    for(let i=0;i<length;i++) {
        vungve.innerHTML += '<tr>';

        for (let j=0;j<=(wide-size)/2-1;j++) {
            const th = document.createElement('th');
            vungve.appendChild(th);
        }

        for (let k=(wide-size)/2 ;k<=(wide+size)/2 - 1;k++) {
            if (k==(wide-size)/2) {
                cheoTrai += value;
                indexFirst += value;
            }
            if (k==(wide+size)/2 - 1) {
                cheoPhai += value;
                indexLast += value;
                chieuCao += (indexFirst + indexLast) / 2;
            }
            if (i == length-1) canhDay += value;

            const th = document.createElement('th');
            th.textContent = `${value++}`;
            vungve.appendChild(th);
        }

        for (let l=(wide+size)/2;l<wide;l++) {
            const th = document.createElement('th');
            vungve.appendChild(th);
        }

        vungve.innerHTML += '</tr><br>';

        indexFirst = 0;
        indexLast = 0;
        size +=2;
    }
    vungve.innerHTML += '</table>';

    vungtinh.textContent = '';
    vungtinh.append('Tổng chiều cao: ' + chieuCao);
    vungtinh.innerHTML += '<br>';
    vungtinh.append('Tổng đường chéo trái: ' + cheoTrai);
    vungtinh.innerHTML += '<br>';
    vungtinh.append('Tổng đường chéo phải: ' + cheoPhai);
    vungtinh.innerHTML += '<br>';
    vungtinh.append('Tổng cạnh đáy: ' + canhDay);
    vungtinh.innerHTML += '<br>';
}


function VeTamGiacVuong(){
	const length = document.getElementById('textfield').value;
    const vungve = document.getElementById('vungve');
    const vungtinh = document.getElementById('vungtinh');
    vungve.textContent = '';
    // vungve.style.textAlign = '';
    // vungve.style.float = 'left';


    let chieuCao = 0;
    let cheoTrai = 0;
    let cheoPhai = 0;
    let canhDay = 0;

    let indexFirst = 0;
    let indexLast = 0;

    let value = 0;
    let size = 1;
    for(let i=1;i<=length;i++) {
        for (let j=1;j<=size;j++) {
            if (j==1) {
                cheoTrai += value;
                indexFirst += value;
            }
            if (j==size) {
                cheoPhai += value;
                indexLast += value;
                chieuCao += (indexFirst + indexLast) / 2;
            }
            if (i==length) canhDay += value;

            vungve.append(value++);
            vungve.append(" ");
        }
        vungve.innerHTML += '<br>';

        indexFirst = 0;
        indexLast = 0;
        size +=1;
    }

    vungtinh.textContent = '';
    vungtinh.append('Tổng chiều cao: ' + chieuCao);
    vungtinh.innerHTML += '<br>';
    // vungtinh.append('Tổng đường chéo trái: ' + cheoTrai);
    // vungtinh.innerHTML += '<br>';
    vungtinh.append('Tổng cạnh huyền: ' + cheoPhai);
    vungtinh.innerHTML += '<br>';
    vungtinh.append('Tổng cạnh đáy: ' + canhDay);
    vungtinh.innerHTML += '<br>';
}