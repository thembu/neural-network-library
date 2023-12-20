class Matrix {

constructor(rows , cols) {
    this.rows = rows;
    this.cols = cols;
    this.data = [];

    for (let i = 0; i < this.rows; i++) {

    this.data[i] = [];

    for (let j = 0; j < this.cols; j++) {
      this.data[i][j] = 0;
    }
  }
}



randomize = function() {

    for (let i = 0; i < this.rows; i++) {

    for (let j = 0; j < this.cols; j++) {
      this.data[i][j] = Math.floor(Math.random() * 10);
    }
 }



}

add = function(n) {

    if(n instanceof Matrix) {

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols ; j++) {
                this.data[i][j] += n.matrix[i][j];
            }
        }

    } else {

    for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols ; j++) {
            this.data[i][j] += n;
        }
    }
}
}

multiply = function(n) {

    if(n instanceof Matrix) {
        if(this.cols !== n.rows) {
            console.log("Cols of A must match rows of B");
            return undefined;
        }

       let a = this;
       let b = n;

       let result = new Matrix(a.rows , b.cols); 

       
       for(let i = 0; i < result.rows ; i++) {
        for (let j = 0; j < result.cols; j++) {
              // dot roduct of values in col
              let sum = 0
             for(let k = 0; k < a.cols; k++) {
                sum += a.matrix[i][k] * b.matrix[k][j];
             }

              result.matrix[i][j] = sum;
        }
        return result;

       }
       

    } 
    else {

    for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols ; j++) {
            this.data[i][j] *= n;
        }
    }
 }
}


transpose = function() {
    let result = new Matrix(this.cols , this.rows);

    for(let i = 0; i < this.rows; i++) {
        for(let j = 0; j < this.cols; j++) {
            result.matrix[j][i] = this.data[i][j];
        }
    }

    return result;

}   
}