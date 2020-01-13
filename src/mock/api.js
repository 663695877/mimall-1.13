import Mock from 'mockjs'
Mock.mock('/api/user/login', {
  "status": 0,
  "data": {
    "id|1-100": 0,
    "username": "@cname",
    "email": "admin@51purse.com",
    "phone": 15604542921,
    "createTime": 15688655555555,
    "updateTime": 14795685625649
  }
})