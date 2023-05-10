const data = (rows, cols) => {

    let table = [];

    for(let i=0; i<rows; i++){
        table[i] = [];
        for(let j=0; j<cols; j++){
            table[i][j] = 0;
            // console.log(table);
        }
    }
    // console.log(table)
    return table;
}
export default data;