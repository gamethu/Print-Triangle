function VeTamGiacCan(){
    const length = document.getElementById('textfield').value;
    const vungve = document.getElementById('vungve');
    const vungtinh = document.getElementById('vungtinh');
    vungve.textContent = '';


    let chieuCao = 0;
    let cheoTrai = 0;
    let cheoPhai = 0;
    let canhDay = 0;

    let indexFirst = 0;
    let indexLast = 0;

    let wide =  length*2 -1;
    let value = 0;
    let size = 1;
    
    let output ='';
    output += '<table>';
    for(let i=0;i<length;i++) {
        output += '<tr>';

        for (let j=0;j<=(wide-size)/2-1;j++) {
            output += '<td></td>';
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
            if (i%2!=0)output += '<th class="odd">' + value++ + '</th>';
            else output += '<th class="even">' + value++ + '</th>';
        }

        for (let l=(wide+size)/2;l<wide;l++) {
            output += '<td></td>';
        }

        output += '</tr>';
        

        indexFirst = 0;
        indexLast = 0;
        size += 2;
    }
    output += '</table>';
    vungve.innerHTML = output;


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


    let chieuCao = 0;
    let cheoPhai = 0;
    let canhDay = 0;

    let indexFirst = 0;
    let indexLast = 0;

    let value = 0;

    let output ='';
    output += '<table>';

    for(let i=0;i<length;i++) {
        output += '<tr>';

        for (let j=0;j<=i;j++) {
            if (j==0) {
                chieuCao += value;
                indexFirst += value;
            }
            if (j==i) {
                cheoPhai += value;
                indexLast += value;
            }
            if (i == length-1) canhDay += value;
            if (i%2!=0)output += '<th class="odd">' + value++ + '</th>';
            else output += '<th class="even">' + value++ + '</th>';
        }

        for (let k=i+1;k<length;k++) {
            output += '<td></td>';
        }

        output += '</tr>';
        

        indexFirst = 0;
        indexLast = 0;
    }
    output += '</table>';
    vungve.innerHTML = output;


    vungtinh.textContent = '';
    vungtinh.append('Tổng chiều cao: ' + chieuCao);
    vungtinh.innerHTML += '<br>';
    vungtinh.append('Tổng cạnh huyền: ' + cheoPhai);
    vungtinh.innerHTML += '<br>';
    vungtinh.append('Tổng cạnh đáy: ' + canhDay);
    vungtinh.innerHTML += '<br>';
}