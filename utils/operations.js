const add = (matrix1, matrix2, rows, cols) => {
    let i,j;
    let matrix3 = new Array(rows);
    for(let k=0; k<rows; k++){
        matrix3[k] = new Array(cols);
    }

    for(i=0; i<rows; i++){
        for(j=0; j<cols; j++){
            matrix3[i][j] = matrix1[i][j] + matrix2[i][j]
        }
    }
    return matrix3;
}

const substract = (matrix1, matrix2, rows, cols) => {
    let i,j;
    let matrix3 = new Array(rows);
    for(let k=0; k<rows; k++){
        matrix3[k] = new Array(cols);
    }

    for(i=0; i<rows; i++){
        for(j=0; j<cols; j++){
            matrix3[i][j] = matrix1[i][j] - matrix2[i][j]
        }
    }
    return matrix3;
}

const multiply = (matrix1, matrix2, row1, row2, col2) => {
    let i,j,x;
    let matrix3 = new Array(row1);
    for(let k=0; k<row1; k++){
        matrix3[k] = new Array(col2);
    }

    for(i=0; i<row1; i++){
        for(j=0; j<col2; j++){
            matrix3[i][j] = 0;
            for(x=0; x<row2; x++){
                matrix3[i][j] += matrix1[i][x] * matrix2[x][j];
            }
        }
    }
    return matrix3;
}

const transpose = (matrix, rows, cols) => {
    let i,j;
    let matrix3 = new Array(cols);
    for(let k=0; k<cols; k++){
        matrix3[k] = new Array(rows)
    }

    for(i=0; i<cols; i++){
        for(j=0; j<rows; j++){
            matrix3[i][j] = matrix[j][i];
        }
    }
    return matrix3;
}

export {add, substract, multiply, transpose};