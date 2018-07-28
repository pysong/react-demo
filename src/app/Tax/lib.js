    var income = new Array();
    var tax = new Array();
    var taxType = ["RSU", "OPTION"];
    var tableType = ["resultTable1", "resultTable2", "resultTable3", "resultTable1", "resultTable2", "resultTable3"];
    var tempNum, res = new Array();
    resetForm();

    function radioCheck(str, obj) {
        var n = obj.getAttribute("value");
        document.getElementById(str).value = n;
        if (str == "types" && n == 1) {
            document.getElementById("price").setAttribute("disabled", "disabled");
            document.getElementById("countLabel").innerHTML = "归属数量 <span class='eColor'>Vesting Units</span>";
            document.getElementById("sharesLabel").innerHTML = "归属前一天收盘股价（US$）";
            document.getElementById("toggle").innerHTML = "<span class='eColor'>The Closing Share Price Prior to Vesting Date</span> <span class='eColor'>Key in your estimated price ( in 2 decimals )</span>";
            if (navigator.userAgent.indexOf("MSIE") > 0) {
                if (navigator.userAgent.indexOf("MSIE 8.0") > 0 || navigator.userAgent.indexOf("MSIE 7.0") > 0) {
                    document.getElementById("price").style.background = "#ccc";
                    document.getElementById("price").style.color = "#aaa";
                }
            }
        } else if (str == "types" && n == 2) {
            document.getElementById("price").removeAttribute("disabled");
            document.getElementById("countLabel").innerHTML = "行权数量 <span class='eColor'>Exercise Units</span>";
            document.getElementById("sharesLabel").innerHTML = "行权前一天收盘股价（US$）";
            document.getElementById("toggle").innerHTML = "<span class='eColor'>The Closing Share Price prior to Exercise Date (US$)</span> <span class='eColor'>Key in your estimated price ( in 2 decimals )</span>";
            if (navigator.userAgent.indexOf("MSIE") > 0) {
                if (navigator.userAgent.indexOf("MSIE 8.0") > 0 || navigator.userAgent.indexOf("MSIE 7.0") > 0) {
                    document.getElementById("price").style = "";
                    //placeHolder('price');
                }
            }
        } else if (str == "batch") {
            document.getElementById("count").value = "";
            document.getElementById("price").value = "";
            document.getElementById("shares").value = "";
            document.getElementById("exchangeRate").value = "";
            placeHolder('count');
            placeHolder('price');
            placeHolder('shares');
            placeHolder('exchangeRate');
            if (document.getElementById("types").value == 1) {
                if (navigator.userAgent.indexOf("MSIE") > 0) {
                    if (navigator.userAgent.indexOf("MSIE 8.0") > 0 || navigator.userAgent.indexOf("MSIE 7.0") > 0) {
                        document.getElementById("price").setAttribute("style", "background:#ccc;color:#aaa;");
                    }
                }
            }
            if (n < income.length) {
                document.getElementById("alert2").setAttribute("style", "display:block");
                document.getElementById("mask").setAttribute("style", "display:block");
            }
        }
        var temp = obj.parentNode.getElementsByTagName("li");
        for (var i = 0; i < temp.length; i++) {
            temp[i].removeAttribute("class");
        }
        obj.setAttribute("class", "checked");
    }

    function submitForm() {
        var n = tax.length;
        var batch = parseInt(document.getElementById("batch").value);
        if (batch - 1 > n) {
            document.getElementById("alert").setAttribute("style", "display:block");
            document.getElementById("mask").setAttribute("style", "display:block");
            document.getElementById("msg").innerHTML = "请先完成之前所有批次税金的计算！<p>Please ensure your previous Vesting/Exercise records are fully calculated</p>";
        } else {
            var temp1 = 0;
            temp2 = 0;
            for (var i = 0; i < (batch - 1); i++) {
                temp1 += income[i];
                temp2 += tax[i];
            }
            var type = parseInt(document.getElementById("types").value);
            var count = parseInt(document.getElementById("count").value);
            var shares = parseFloat(document.getElementById("shares").value);
            var exchangeRate = parseFloat(document.getElementById("exchangeRate").value);
            var price = 0, rate, reduction;
            if (type == 2) {
                price = document.getElementById("price").value;
            }
            var r1 = Math.round(count * (shares - price) * exchangeRate * 100) / 100 + temp1;
            var tr = document.getElementById("rateTable").getElementsByTagName("tr");
            for (var i = 0; i < tr.length; i++) {
                tr[i].removeAttribute("class");
            }
            if (r1 / 12 <= 1500) {
                rate = 0.03;
                reduction = 0;
                tr[2].setAttribute("class", "active");
            } else if (r1 / 12 > 1500 && r1 / 12 <= 4500) {
                rate = 0.10;
                reduction = 105;
                tr[3].setAttribute("class", "active");
            } else if (r1 / 12 > 4500 && r1 / 12 <= 9000) {
                rate = 0.20;
                reduction = 555;
                tr[4].setAttribute("class", "active");
            } else if (r1 / 12 > 9000 && r1 / 12 <= 35000) {
                rate = 0.25;
                reduction = 1005;
                tr[5].setAttribute("class", "active");
            } else if (r1 / 12 > 35000 && r1 / 12 <= 55000) {
                rate = 0.30;
                reduction = 2755;
                tr[6].setAttribute("class", "active");
            } else if (r1 / 12 > 55000 && r1 / 12 <= 80000) {
                rate = 0.35;
                reduction = 5505;
                tr[7].setAttribute("class", "active");
            } else if (r1 / 12 > 80000) {
                rate = 0.45;
                reduction = 13505;
                tr[8].setAttribute("class", "active");
            }
            var r2 = r1 * rate - reduction * 12 - temp2;

            if (r2 >= 0) {
                var h = document.getElementById("title").offsetHeight + document.getElementById("formDiv").offsetHeight;
                document.documentElement.scrollTop = h;
                document.body.scrollTop = h;
                income[batch - 1] = Math.round(count * (shares - price) * exchangeRate * 100) / 100;
                tax[batch - 1] = Math.round(r2 * 100) / 100;

                tempNum = Math.round(count * (shares - price) * exchangeRate * 100).toString();
                var len = tempNum.length;
                max = Math.floor(len / 3) - 1;
                res = "";
                str2 = "";
                res = tempNum.substr(len - 2, len);
                tempNum = tempNum.slice(0, len - 2);
                for (var i = 0; i < max; i++) {
                    len = tempNum.length;
                    var s = tempNum.slice(len - 3, len);
                    tempNum = tempNum.substr(0, len - 3);
                    str2 = (',' + s) + str2;
                }
                ;
                var t1 = tempNum + str2 + "." + res;

                if (r2 == 0) {
                    var t2 = "0.00";
                } else {
                    tempNum = (Math.round(r2 * 100)).toString();
                    var len = tempNum.length;
                    max = Math.floor(len / 3) - 1;
                    res = "";
                    str2 = "";
                    res = tempNum.substr(len - 2, len);
                    tempNum = tempNum.slice(0, len - 2);
                    for (var i = 0; i < max; i++) {
                        len = tempNum.length;
                        var s = tempNum.slice(len - 3, len);
                        tempNum = tempNum.substr(0, len - 3);
                        str2 = (',' + s) + str2;
                    }
                    ;
                    var t2 = tempNum + str2 + "." + res;
                }


                var table = '<table class="resultTable ' + tableType[batch - 1] + '" cellpadding="0" cellspacing="0">' +
                    '<tbody>' +
                    '    <tr>' +
                    '        <td class="pink" width="185">归属批次<span class="tableEn">Vesting Batch<span></td>' +
                    '        <td>第' + batch + '批</td>' +
                    '    </tr>' +
                    '    <tr>' +
                    '        <td class="pink">股权类型<span class="tableEn">Award Type<span></td>' +
                    '        <td>' + taxType[type - 1] + '</td>' +
                    '    </tr>' +
                    '    <tr>' +
                    '        <td class="pink">归属/行权数量<span class="tableEn" style="letter-spacing: -.6px;">vest/exercise units<span></td>' +
                    '        <td>' + count + '</td>' +
                    '    </tr>' +
                    '    <tr>' +
                    '        <td class="red multiple">本批归属/行权收益（RMB）<p class="tableEn">Taxable Income<p></td>' +
                    '        <td>' + t1 + '</td>' +
                    '    </tr>' +
                    '    <tr>' +
                    '        <td class="red multiple">应缴个人所得税（RMB）<p class="tableEn">Tax Payable<p></td>' +
                    '        <td>' + t2 + '</td>' +
                    '    </tr>' +
                    '</tbody>' +
                    '<tfoot>' +
                    '    <tr>' +
                    '        <td>适用税率<span class="tableEn">Tax Rate<span>：' + rate * 100 + '%</td>' +
                    '        <td>速算扣除数<span class="tableEn">Quick Deduction<span>：' + reduction + '</td>' +
                    '    </tr>' +
                    '</tfoot>' +
                    '</table>';
                if (batch - 1 < n) {
                    document.getElementById("table" + batch).innerHTML = table;
                    var r0 = r1 * rate - reduction * 12;
                    for (var l = batch; l < n; l++) {
                        r1 += income[l];
                        r0 += tax[l];
                    }

                    tempNum = Math.round(r1 * 100).toString();
                    var len = tempNum.length;
                    max = Math.floor(len / 3) - 1;
                    res = "";
                    str2 = "";
                    res = tempNum.substr(len - 2, len);
                    tempNum = tempNum.slice(0, len - 2);
                    for (var i = 0; i < max; i++) {
                        len = tempNum.length;
                        var s = tempNum.slice(len - 3, len);
                        tempNum = tempNum.substr(0, len - 3);
                        str2 = (',' + s) + str2;
                    }
                    ;
                    var t3 = tempNum + str2 + "." + res;

                    document.getElementById("totalIncome").innerHTML = t3;
                    document.getElementById("totalIncomeE").innerHTML = t3;

                    if (r0 == 0) {
                        t4 = "0.00";
                    } else {
                        tempNum = (Math.round(r0 * 100)).toString();
                        var len = tempNum.length;
                        max = Math.floor(len / 3) - 1;
                        res = "";
                        str2 = "";
                        res = tempNum.substr(len - 2, len);
                        tempNum = tempNum.slice(0, len - 2);
                        for (var i = 0; i < max; i++) {
                            len = tempNum.length;
                            var s = tempNum.slice(len - 3, len);
                            tempNum = tempNum.substr(0, len - 3);
                            str2 = (',' + s) + str2;
                        }
                        ;
                        var t4 = tempNum + str2 + "." + res;
                    }
                    document.getElementById("totalTax").innerHTML = t4;
                    document.getElementById("totalTaxE").innerHTML = t4;
                } else {
                    tempNum = Math.round(r1 * 100).toString();
                    var len = tempNum.length;
                    max = Math.floor(len / 3) - 1;
                    res = "";
                    str2 = "";
                    res = tempNum.substr(len - 2, len);
                    tempNum = tempNum.slice(0, len - 2);
                    for (var i = 0; i < max; i++) {
                        len = tempNum.length;
                        var s = tempNum.slice(len - 3, len);
                        tempNum = tempNum.substr(0, len - 3);
                        str2 = (',' + s) + str2;
                    }
                    ;
                    var t5 = tempNum + str2 + "." + res;
                    document.getElementById("totalIncome").innerHTML = t5;
                    document.getElementById("totalIncomeE").innerHTML = t5;

                    var test = Math.round((r1 * rate - reduction * 12) * 100);
                    if (test == 0) {
                        var t6 = "0.00";
                    } else {
                        tempNum = test.toString();
                        var len = tempNum.length;
                        max = Math.floor(len / 3) - 1;
                        res = "";
                        str2 = "";
                        res = tempNum.substr(len - 2, len);
                        tempNum = tempNum.slice(0, len - 2);
                        for (var i = 0; i < max; i++) {
                            len = tempNum.length;
                            var s = tempNum.slice(len - 3, len);
                            tempNum = tempNum.substr(0, len - 3);
                            str2 = (',' + s) + str2;
                        }
                        ;
                        var t6 = tempNum + str2 + "." + res;
                    }
                    document.getElementById("totalTax").innerHTML = t6;
                    document.getElementById("totalTaxE").innerHTML = t6;

                    var newNode = document.createElement("div");
                    newNode.setAttribute("id", "table" + batch);
                    newNode.setAttribute("class", "table");
                    newNode.innerHTML = table;
                    document.getElementById("tableDiv").appendChild(newNode);
                    document.getElementById("table" + batch).style.float = "left";
                    document.getElementById("table" + batch).style.margin = "40px 20px 0 20px";
                }
            } else {
                document.getElementById("alert").setAttribute("style", "display:block");
                document.getElementById("mask").setAttribute("style", "display:block");
                document.getElementById("msg").innerHTML = "请检查填写的数据是否正确！<p>Please ensure your filled-in records are accurate</p>";
            }
        }
    }

    function resetForm() {
        tax = [];
        income = [];
        var temp1 = document.getElementById("batchUL").getElementsByTagName("li");
        var temp2 = document.getElementById("typesUL").getElementsByTagName("li");
        var temp3 = document.getElementById("rateTable").getElementsByTagName("tr");
        for (var i = 0; i < temp1.length; i++) {
            temp1[i].removeAttribute("class");
        }
        for (var j = 0; j < temp2.length; j++) {
            temp2[j].removeAttribute("class");
        }
        for (var k = 0; k < temp3.length; k++) {
            temp3[k].removeAttribute("class");
        }
        document.getElementById("batchUL").getElementsByTagName("li")[0].setAttribute("class", "checked");
        document.getElementById("typesUL").getElementsByTagName("li")[0].setAttribute("class", "checked");
        document.getElementById("count").value = "";
        document.getElementById("price").value = "";
        document.getElementById("price").setAttribute("disabled", "disabled");
        document.getElementById("shares").value = "";
        document.getElementById("exchangeRate").value = "";
        document.getElementById("batch").value = "1";
        document.getElementById("types").value = "1";
        document.getElementById("tableDiv").innerHTML = "";
        document.getElementById("totalIncome").innerHTML = "0.00";
        document.getElementById("totalTax").innerHTML = "0.00";
        document.getElementById("totalIncomeE").innerHTML = "0.00";
        document.getElementById("totalTaxE").innerHTML = "0.00";
        placeHolder('count');
        placeHolder('price');
        placeHolder('shares');
        placeHolder('exchangeRate');
        if (navigator.userAgent.indexOf("MSIE") > 0) {
            if (navigator.userAgent.indexOf("MSIE 8.0") > 0 || navigator.userAgent.indexOf("MSIE 7.0") > 0) {
                document.getElementById("price").style.background = "#ccc";
                document.getElementById("price").style.color = "#aaa";
            }
        }
    }

    function placeHolder(id) {
        var obj = document.getElementById(id);
        if (navigator.userAgent.indexOf("MSIE") > 0) {
            var ph = obj.getAttribute("placeholder");
            if (obj.value == "") {
                obj.value = ph;
                obj.setAttribute("style", "color:#ddd");
            } else {
                obj.removeAttribute("style");
            }
        }
    }

    function inputFocus(id) {
        var obj = document.getElementById(id);
        if (navigator.userAgent.indexOf("MSIE") > 0) {
            var ph = obj.getAttribute("placeholder");
            if (obj.value == ph) {
                obj.value = "";
                obj.removeAttribute("style");
            }
        }
    }

    //验证整数
    function isInteger(id) {
        var str = document.getElementById(id).value;
        var regu = /^[-]{0,1}[0-9]{1,}$/;
        var re = new RegExp(regu);
        if (re.test(str)) {
            return true;
        } else {
            document.getElementById(id).value = "";
            return false;
        }
    }

    //验证带小数的整数，最多n位
    function isMoney(id) {
        var s = document.getElementById(id).value;
        var regu = "^[0-9]+[\.][0-9]{0,2}$";
        var re = new RegExp(regu);
        if (re.test(s) || isInteger(id)) {
            return true;
        } else {
            document.getElementById(id).value = "";
            return false;
        }
    }

    function isRate(id) {
        var s = document.getElementById(id).value;
        var regu = "^[0-9]+[\.][0-9]{0,4}$";
        var re = new RegExp(regu);
        if (re.test(s) || isInteger(id)) {
            return true;
        } else {
            document.getElementById(id).value = "";
            return false;
        }
    }

    function closeAlert() {
        document.getElementById("alert").setAttribute("style", "display:none");
        document.getElementById("alert2").setAttribute("style", "display:none");
        document.getElementById("mask").setAttribute("style", "display:none");
    }