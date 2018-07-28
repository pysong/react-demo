var info = {
    "data": {
        "address": "11111",
        "agentCustId": 0,
        "balance": 0,
        "bankAccount": "",
        "bankAccountPermit": "",
        "bankOfDeposit": "",
        "budget": -1,
        "budgetUnlimited": true,
        "city": "北京",
        "companyName": "c",
        "companyRegistAddress": "",
        "companyRegistPhone": "",
        "contactName": "111",
        "cost": 0,
        "createTime": 1379403361000,
        "deleteTime": 253367971200000,
        "email": "coolboyiswo@sina.com",
        "exbudget": 1,
        "fax": "",
        "frontState": "IsInValid",
        "group": "GROUP_TUIGUANG",
        "hasProIdea": 1,
        "hasProductads": 1,
        "id": 30035,
        "industry1": 36000000,
        "industry2": 36001000,
        "industry3": 36001001,
        "invest": 0,
        "ipBlack": "",
        "isPaused": false,
        "lastLogin": 1432798886000,
        "level": 1,
        "logicState": 0,
        "minBid": 70,
        "mobile": "15189770056",
        "name": "tester",
        "noncashBalance": 0,
        "operatorRoles": [],
        "password": "",
        "promotionPlan": -2,
        "province": "北京",
        "qq": "",
        "qualificationName": "",
        "qualificationNumber": "",
        "qualificationPicAddr": "",
        "qualificationType": 0,
        "qualificationValidUntil": "2018-01-01",
        "region": "上海;内蒙古;北京;天津;安徽;山东;山西;江苏;江西;河北;浙江;福建",
        "reviewState": 13,
        "roles": [
            "ROLE_TUIGUANG_COMMON"
        ],
        "securityEmail": "",
        "securityMobile": "",
        "siteName": "c",
        "siteUrl": "http://www.sm.com,http://sm.cn/,http://xiecheng.com",
        "source": 1,
        "taxRegistCertificate": "",
        "taxRegistCertificateNo": "",
        "telephone": "101-2131231231",
        "totalNoncashInput": 0,
        "totalNoncashInput2": 0,
        "useAllRegion": 1,
        "useIntentLocate": 1,
        "userId": 30035,
        "vatPayerDocument": "1",
        "whiteList": {
            "101": "加入重点词",
            "201": "头像库",
            "202": "电话库",
            "100": "盯排名策略",
            "1104": "样式高展工具",
            "1105": "产品库",
            "1106": "用户追投报告",
            "1108": "同台展现"
        },
        "zipcode": "122312",
        "supportDays": 10
    },
    "status": 0
};

module.exports = function(req, res) {
    if (req.query.uid) {
        info.data.userId = req.query.uid;
    }
    else {
        info.data.roles.push('ROLE_ADMIN_SUPER');
    }
    return info
};