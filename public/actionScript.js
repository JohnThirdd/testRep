function calculateSingle(_i){
    let colNum = new Array();

    colNum[5] = (document.getElementById(_i + "_In_5").value == "") ? 0 : parseFloat(document.getElementById(_i + "_In_5").value);
    colNum[6] = (document.getElementById(_i + "_In_6").value == "") ? 0 : parseFloat(document.getElementById(_i + "_In_6").value);

    for(j=7; j<18;j++){
        colNum[j] = parseFloat(document.getElementById(_i + "_Col_" + j).innerHTML);
    }
    
    colNum[7] = colNum[6] * colNum[5];
    colNum[9] = colNum[8] * colNum[7];
    colNum[10] = colNum[9] / 24;
    colNum[14] = colNum[11] * 0.35;
    colNum[15] = colNum[14] * 0.5;
    colNum[16] = colNum[12] + colNum[13] + colNum[14];
    colNum[17] = colNum[10] * colNum[16];
    // console.log(colNum);

    for(j=7; j<18;j++){
        document.getElementById(_i + "_Col_" + j).innerHTML = colNum[j].toFixed(2);
        if(j==10) j = j+3;
    }
}

function mousEnter(){

}


{/* <td id="<%= i %>_Col_<%= j %>" onclick="window.location.href='/post/<%= i %>';" ></td> */}