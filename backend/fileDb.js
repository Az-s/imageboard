const fs = require('fs');
const {nanoid} = require('nanoid');
const dayjs = require('dayjs');

const filename = './db.json';
let data = [];

module.exports = {
  init() {
    try {
      const fileContents = fs.readFileSync(filename);
      data = JSON.parse(fileContents);
    } catch (e) {
      data = [];
    }
  },
  getItems() {
    return data;
  },
  getItem(id) {
    return data.find(i => i.id === id);
  },
  addItem(item) {
    item.id = nanoid();
    item.datetime = dayjs().format('DD.MM.YYYY HH.mm');
    data.push(item);
    this.save();
    return item;
  },
  save() {
    fs.writeFileSync(filename, JSON.stringify(data));
  }
};