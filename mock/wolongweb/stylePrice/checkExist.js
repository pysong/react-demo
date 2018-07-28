/* eslint-disable */ 
var data = {
  "status": 0,
  "data": {
    "totalRecord": 20978,
    "totalPage": 2098,
    "recordPerPage": 10,
    "reqPageIndex": 1,
    "resultList":  [
        {
            "level": 11,
            "styleType": 10,
            "styleName": "图文混排",
            "status": 0,
            "hasReport": true,
            "recommendRate":"1.3",
            "forecastShow":"20%",
            "planId":133100671,
            "planName":"计划",
            "priceRate":"1.3"
        },
        {
            "level": 11,
            "styleType": 11,
            "styleName": "App强样式",
            "status": 0,
            "hasReport": true,
            "recommendRate":"1.3",
            "forecastShow":"20%",
            "planId":133100672,
            "planName":"计划",
            "priceRate":"1.4"
        },
        {
            "level": 11,
            "styleType": 12,
            "styleName": "图文双子链",
            "status": 0,
            "hasReport": true,
            "recommendRate":"1.3",
            "forecastShow":"20%",
            "planId":133100671,
            "planName":"计划",
            "priceRate":"1.5"
        }
    ]
  },
  "success": true
}

var result = {
  "status": 0,
  "data":  [],
  "success": true
}

module.exports = function (req, res) {
    const styleType = req.query['styleTypeList'].split(',')
    const currentStyle = data.data.resultList
    result.data = currentStyle.filter(item => {
      return styleType.includes(item.styleType + '')
    })
    return result
}
