const Mock = require('mockjs');
const fs = require('fs');

const data = Mock.mock({
  'list|4': [
    {
      'id|+1': 1,
      'name|+1': ['赵一', '钱二', '孙三', '李四']
    }
  ]
});

fs.writeFile('./data.json', JSON.stringify(data), err => {
  if (err) throw err;
})