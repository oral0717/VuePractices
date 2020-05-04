module.exports = {
  configureWebpack: {
    // 扩展webpack
    devServer: {
      before(app) {
        app.get('/api/goods', function(req, res) {
          res.json({
            code: 0,
            data: [
              {
                id: 1,
                title: '商品1',
                price: 10,
                img: 'img/1.jpg',
                count: 5
              },
              {
                id: 2,
                title: '商品2',
                price: 20,
                img: 'img/2.jpg',
                count: 10
              },
              {
                id: 3,
                title: '商品3',
                price: 30,
                img: 'img/3.jpg',
                count: 20
              },
              {
                id: 4,
                title: '商品4',
                price: 40,
                img: 'img/4.jpg',
                count: 30
              },
              {
                id: 5,
                title: '商品5',
                price: 50,
                img: 'img/5.jpg',
                count: 40
              },
              {
                id: 6,
                title: '商品6',
                price: 60,
                img: 'img/6.jpg',
                count: 50
              },
              {
                id: 7,
                title: '商品7',
                price: 70,
                img: 'img/7.jpg',
                count: 60
              }
            ]
          })
        })
      }
    }
  }
}