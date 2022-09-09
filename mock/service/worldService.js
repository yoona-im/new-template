function queryTableData(name) {
  var data = [
    {
      id: "1",
      name: '林允儿',
      region: '杭州',
      date: '1999-01-22',
      desc: '大渊洞林允儿',
      gender: '女',
    },
  ]
  return { name: name, msg: "hello world", body: JSON.stringify(data) }
}