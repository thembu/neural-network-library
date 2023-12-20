function Matrix(rows , cols) {
    this.rows = rows;
    this.cols = cols;
    this.matrix = [];

    for (let i = 0; i < this.rows; i++) {

    this.matrix[i] = [];

    for (let j = 0; j < this.cols; j++) {
      this.matrix[i][j] = 0;
    }
 }

}

Matrix.prototype.add = function(n) {
    for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols ; j++) {
            this.matrix[i][j] += n;
        }
    }
}


Matrix.prototype.multiply = function(n) {
    for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols ; j++) {
            this.matrix[i][j] *= n;
        }
    }
}