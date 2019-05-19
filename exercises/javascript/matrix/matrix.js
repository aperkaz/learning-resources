const splitString = input => input.split(" ");

export class Matrix {
  constructor(matrixString) {
    let stringRows = matrixString.split("\n");

    this.rows = stringRows
      .map(splitString)
      .map(row => row.map(e => parseInt(e)));

    this.columns = this.rows.map((row, i) => this.rows.map(r => r[i]));
  }
}
