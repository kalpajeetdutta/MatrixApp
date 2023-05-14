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

const getCofactor = (A,temp,p,q,n) => {
    let i = 0, j = 0;
   
    for (let row = 0; row < n; row++)
    {
        for (let col = 0; col < n; col++)
        {
            if (row != p && col != q)
            {
                temp[i][j++] = A[row][col];
                if (j == n - 1)
                {
                    j = 0;
                    i++;
                }
            }
        }
    }
}

const determinant = (A,n) => {
    let det = 0
   
    if (n == 1)
        return A[0][0]
   
    let temp = new Array(n)
    for(let i=0;i<n;i++)
    {
        temp[i]=new Array(n);
    }
   
    let sign = 1
   
    for (let f = 0; f < n; f++)
    {
        // Getting Cofactor of A[0][f]
        getCofactor(A, temp, 0, f, n);
        det += sign * A[0][f] * determinant(temp, n - 1);
   
        // terms are to be added with alternate sign
        sign = -sign;
    }
   
    return det;
}
 
// Function to get adjoint of A[N][N] in adj[N][N].
function  adjoint(A,adj,N)
{
    if (N == 1)
    {
        adj[0][0] = 1;
        return;
    }
   
    // temp is used to store cofactors of A[][]
    let sign = 1;
    let temp = new Array(N);
    for(let i=0;i<N;i++)
    {
        temp[i]=new Array(N);
    }
   
    for (let i = 0; i < N; i++)
    {
        for (let j = 0; j < N; j++)
        {
            // Get cofactor of A[i][j]
            getCofactor(A, temp, i, j, N);
   
            // sign of adj[j][i] positive if sum of row
            // and column indexes is even.
            sign = ((i + j) % 2 == 0)? 1: -1;
   
            // Interchanging rows and columns to get the
            // transpose of the cofactor matrix
            adj[j][i] = (sign)*(determinant(temp, N-1));
        }
    }
}
 
// Function to calculate and store inverse, returns false if
// matrix is singular
const inverse = (A, N) => {

    let inverse = new Array(N);
    for(let i=0; i<N; i++){
        inverse[i] = new Array(N);
    }
    // Find determinant of A[][]
    let det = determinant(A, N);
    if (det == 0)
    {
        return false;
    }
   
    // Find adjoint
    let adj = new Array(N);
    for(let i=0;i<N;i++)
    {
        adj[i]=new Array(N);
    }
    adjoint(A, adj, N);
   
    // Find Inverse using formula "inverse(A) = adj(A)/det(A)"
    for (let i = 0; i < N; i++)
        for (let j = 0; j < N; j++)
            inverse[i][j] = adj[i][j]/det;
   
    return inverse;
}

export {add, substract, multiply, transpose, determinant, inverse};

