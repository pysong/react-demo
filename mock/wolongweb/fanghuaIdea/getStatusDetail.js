var keyword = {
    "data": [{
        "id": 341001,
        "level": 2,
        "negativeWordInfos": [{
            "level": 3,
            "negativeWord": "关键字",
            "typeName": "否定关键词",
            "unitName": "测试单元"
        }, {
            "level": 3,
            "negativeWord": "关键字叹号",
            "typeName": "否定关键词",
            "unitName": "测试单元"
        }],
        "status": -13
    }, {
        "id": 2507434093,
        "level": 0,
        "auditRejectReason": "aa###bb###cc",
        "status": -15
    }, {
        "id": 2507434093,
        "level": 0,
        "status": -2
    }, {
        "id": 2507434093,
        "level": 0,
        "status": -3
    }, {
        "id": 2507434093,
        "level": 0,
        "status": -4
    }, {
        "id": 2507434093,
        "level": 0,
        "status": -5
    }, {
        "id": 2507434093,
        "accountBudgetUnlimited": true,
        "accountBudget": 100,
        "level": 0,
        "status": -6
    }, {
        "id": 2507434093,
        "planBudgetUnlimited": false,
        "planBudget": 99,
        "level": 0,
        "status": -9
    }, {
        "id": 2507434093,
        "level": 0,
        "status": -7
    },  {
        "id": 2507434093,
        "level": 0,
        "period":"",
        "status": -8
    }, {
        "id": 2507434093,
        "level": 0,
        "status": -11
    },{
        "id": 2507434093,
        "level": 0,
        "status": -14
    },{
        "id": 2507434093,
        "level": 0,
        "status": -16
    },{
        "id": 2507434093,
        "level": 0,
        "status": -17
    }, {
        "id": 2507434093,
        "level": 0,
        "status": -18
    },{
        "id": 2507434093,
        "level": 0,
        "status": -12
    }, {
        "id": 2507434093,
        "level": 0,
        "status": -19
    }],
    "status": "success"
};

module.exports = function(req, res, next) {
    // res.setHeader('Content-Type', 'application/json');
    // res.end(JSON.stringify(keyword));
    return keyword
};
