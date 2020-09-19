import XLSX from 'xlsx';

export default {
  exportExcel(headArr, dataArr) {
    if(headArr.length !== dataArr.length) {
      throw new Error('Data mismatch');
    }

    const workBook = XLSX.utils.book_new();

    headArr.map((obj, index) => {
      dataArr[index].unshift(headArr[index]);
      const workSheet = XLSX.utils.aoa_to_sheet(dataArr[index]);
      XLSX.utils.book_append_sheet(workBook, workSheet, `Sheet ${index+1}`);
    });

    const workBookOut = XLSX.write(workBook, {
      bookType: 'xlsx',
      bookSST: false,
      type: 'binary'
    });

    return this.stringToArrayBuffer(workBookOut);
  },
  exportCsv(headArr, dataArr) {
    if(headArr.length !== dataArr.length) {
      throw new Error('Data mismatch');
    }

    const csvArr = [];
    headArr.map((obj, index) => {
      dataArr[index].unshift(headArr[index]);
      const workSheet = XLSX.utils.aoa_to_sheet(dataArr[index]);
      csvArr.push(this.stringToArrayBuffer(XLSX.utils.sheet_to_csv(workSheet)));
    });

    return csvArr;
  },
  stringToArrayBuffer(data) {
    const buff = new ArrayBuffer(data.length);
    const view = new Uint8Array(buff);
    for (let i = 0; i !== data.length; ++i) view[i] = data.charCodeAt(i) & 0xFF;
    return buff;
  }
}
