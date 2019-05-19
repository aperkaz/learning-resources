const computeRow = (prevRow, length) => {
  const row = [];
  for (let i = 0; i < length; i++) {
    row.push(computeElement(prevRow, i));
  }

  return row;
};

const computeElement = (prevRow, index) => {
  const left = index > 0 ? prevRow[index - 1] : 0;
  const rigth = index < prevRow.length ? prevRow[index] : 0;

  return left + rigth;
};

// each row is pushed into array
const computePascalRows = numberOfRows => {
  const rows = [];

  if (numberOfRows < 1) {
    return rows;
  }

  let prevRow = [1];
  rows.push(prevRow);

  for (let rowIndex = 1; rowIndex < numberOfRows; rowIndex++) {
    prevRow = computeRow(prevRow, rowIndex + 1);
    rows.push(prevRow);
  }

  return rows;
};

class Triangle {
  constructor(numberOfRows) {
    // properties
    this.rows = computePascalRows(numberOfRows);
    this.lastRow = this.rows[this.rows.length - 1];
  }
}

module.exports = { Triangle };
