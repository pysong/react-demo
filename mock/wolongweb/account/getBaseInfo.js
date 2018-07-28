var data = {
    "data": {
        "accountHref": "/uc/static/pages/account/account_summary.html?uid=1520", 
        "adToolsHref": "/cpc/static/html/adTools/adTools/index.html?uid=1520", 
        "agentChild": false, 
        "cpcIndexHref": "null/?uid=1520", 
        "cpcManageHref": "/cpc/adManagement?uid=1520", 
        "cpcVipIndexHref": "/cpt/static/cpc/adVipIndex.html?uid=1520", 
        "filterClickDataHref": "/cpc/report/reportAction/filterClickData.json?uid=1520", 
        "filterClickFileHref": "/cpc/report/reportAction/filterClickFile.json?uid=1520", 
        "financeHref": "/uc/static/pages/finance/finance_summary.html?uid=1520", 
        "isAgentChild": false, 
        "isManager": false, 
        "isManagerChild": true, 
        "krWordHref": "/kr/krword?uid=1520", 
        "krWordIframe": "/kr/kriframe?uid=1520", 
        "levelParamHref": "/cpc/report/reportAction/levelParam.json?uid=1520", 
        "manager": false, 
        "managerChild": true, 
        "msgHref": "/message/msg?uid=1520", 
        "opLogDataHref": "/oplog/adoplogdata?uid=1520", 
        "opLogFileHref": "/oplog/adoplogfile?uid=1520", 
        "opLogIframe": "/oplog/adoplogiframe?uid=1520", 
        "opLogTaskHref": "/oplog/adoplogtask?uid=1520", 
        "paymentHref": "/uc/finance_payment?uid=1520", 
        "reportDataHref": "/cpc/report/reportAction/reportData.json?uid=1520", 
        "reportFileHref": "/cpc/report/reportAction/reportFile.json?uid=1520", 
        "reportLocation": "/cpc/report/reportAction", 
        "sessionId": "CCCDDC67E51956C1EBCFD3B624FC5F11", 
        "showVip": true, 
        "successWuliao": "/fs/porter/user/1520/import?uid=1520", 
        "uid": 1520, 
        "unitRegionDataHref": "/cpc/report/reportAction/unitRegionData.json?uid=1520", 
        "unitRegionFileHref": "/cpc/report/reportAction/unitRegionFile.json?uid=1520", 
        "uploadAppIconIframe": "/fs/index?uid=1520&utilType=AppIcon"
    }, 
    "status": 0
};

module.exports = function(req, res) {
    data.data.uid = req.query.uid;
    if (req.query.uid < 100) {
        data.data.isManager = true;
    }
    return data
};