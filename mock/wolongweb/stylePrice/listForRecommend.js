/* eslint-disable */ 
var data = {
  "status": 0,
  "data": [
        {
            "level": 11,
            "styleType": 10,
            "styleName": "图文混排",
            "status": 0,
            "hasReport": true,
            "recommendRate":1.3,
            "forecaseShow":"20%",
            "planId":133100672,
            "planName":"计划",
            "priceRate": 1.0
        },
        {
            "level": 11,
            "styleType": 11,
            "styleName": "App强样式",
            "status": 0,
            "hasReport": true,
            "recommendRate":1.3,
            "forecaseShow":"20%",
            "planId":133100671,
            "planName":"计划",
            "priceRate": 1.0
        },
        {
            "level": 11,
            "styleType": 12,
            "styleName": "图文双子链",
            "status": 0,
            "hasReport": true,
            "recommendRate":1.3,
            "forecaseShow":"20%",
            "planId":133100670,
            "planName":"计划",
            "priceRate": 1.0
        }
    ],
  "success": true
}

module.exports = function (req, res) {
    const styleType = req.query['styleTypeList'].split(',')
    data.data = data.data.filter(item => {
        console.log(item.styleType, styleType.includes(item.styleType + ''))
        return styleType.includes(item.styleType + '')
    })
    return data
}
