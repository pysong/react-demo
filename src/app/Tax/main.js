
    <div id="container">
        <div id="title">
            <div class="container">
                <div id="headline">股权税金计算器 <p class="eColor">Alibaba Group Holding Share Award Income Tax Calculator</p></div>
                <div id="subtitle">（上市公司适用）<p class="eColor">( Only subject to Post-IPO Award)</p></div>
            </div>
        </div>
        <div id="formDiv">
            <div class="container clearfloat">
                <form id="sum">
                    <div class="form-div clearfloat">
                        <label for="batch">同一自然年度归属批次</label>
                        <input type="hidden" name="batch" id="batch" value="1">
                        <ul id="batchUL">
                            <li value="1" onclick="radioCheck(&#39;batch&#39;,this);" class="checked">第一批<p class="eColor">Batch 1</p></li>
                            <li value="2" onclick="radioCheck(&#39;batch&#39;,this);">第二批<p class="eColor">Batch 2</p></li>
                            <li value="3" onclick="radioCheck(&#39;batch&#39;,this);">第三批<p class="eColor">Batch 3</p></li>
                            <li value="4" onclick="radioCheck(&#39;batch&#39;,this);">第四批<p class="eColor">Batch 4</p></li>
                            <li value="5" onclick="radioCheck(&#39;batch&#39;,this);">第五批<p class="eColor">Batch 5</p></li>
                            <li value="6" onclick="radioCheck(&#39;batch&#39;,this);">第六批<p class="eColor">Batch 6</p></li>
                        </ul>
                    </div>
                    <div class="form-div clearfloat" style="margin: 82px 0 5px 0;">
                        <label for="types">股权类型 <span class="eColor">Award Type</span></label>
                        <input type="hidden" name="types" id="types" value="1">
                        <ul id="typesUL">
                            <li value="1" onclick="radioCheck(&#39;types&#39;,this);" class="checked">RSU</li>
                            <li value="2" onclick="radioCheck(&#39;types&#39;,this);">OPTION</li>
                        </ul>
                    </div>
                    <div class="form-div clearfloat">
                        <label id="countLabel">归属数量 <span class="eColor">Vesting Units</span></label>
                        <input id="count" type="text" placeholder="请输入整数的数量" value="" onblur="placeHolder(&#39;count&#39;);isInteger(&#39;count&#39;);" onfocus="inputFocus(&#39;count&#39;);">
                        <div class="en"><span class="eColor">Key in your vesting units</span></div>
                    </div>
                    <div class="form-div clearfloat" id="priceDiv">
                        <label>行权价（US$）- OPTION适用</label>
                        <input id="price" type="text" placeholder="请输入最多两位小数的行权价格" value="" disabled="disabled" onblur="placeHolder(&#39;price&#39;);isMoney(&#39;price&#39;);" onfocus="inputFocus(&#39;price&#39;);">
                        <div class="en">
                            <span class="eColor">Option Strike Price (US$)</span>
                            <span class="eColor">Key in your option price ( in 2 decimals )</span>
                        </div>
                    </div>
                    <div class="form-div clearfloat">
                        <label id="sharesLabel">归属前一天收盘股价（US$）</label>
                        <input id="shares" type="text" placeholder="请输入最多两位小数的收盘价格" value="" onblur="placeHolder(&#39;shares&#39;);isMoney(&#39;shares&#39;);" onfocus="inputFocus(&#39;shares&#39;);">
                        <div class="en" id="toggle">
                            <span class="eColor">The Closing Share Price Prior to Vesting Date</span>
                            <span class="eColor">Key in your estimated price ( in 2 decimals )</span>
                        </div>       
                    </div>
                    <div class="form-div clearfloat">
                        <label>汇率（US$:RMB）</label>
                        <input id="exchangeRate" type="text" placeholder="请输入美元：人民币汇率，如：6.1" value="" onblur="placeHolder(&#39;exchangeRate&#39;);isRate(&#39;exchangeRate&#39;);" onfocus="inputFocus(&#39;exchangeRate&#39;);">
                        <div class="en">
                            <span class="eColor">Foreign Exchange Rate (RMB/USD)</span>
                            <span class="eColor">Key in the FX Rate</span>
                        </div>       
                    </div>
                    <div class="form-div clearfloat" style="padding-top:5px;">
                        <div id="submit" value="" onclick="submitForm();">
                            计算<p class="eColor">CALCULATE</p>
                        </div>
                        <div id="reset" value="" onclick="resetForm();">
                            重置<p class="eColor">RESET</p>
                        </div>
                    </div>
                </form>
                <table id="rateTable" cellpadding="0" cellspacing="0">
                    <thead>
                    <tr>
                        <th colspan="4">个人所得税率表
                            <p class="eColor">Individual Income Tax Table</p>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td class="tdCenter" width="46">级数<p class="eColor">Tiers</p></td>
                        <td class="tdCenter" width="150">应纳税所得额（含税级距）<p class="eColor">Taxable Income subject to gross up</p></td>
                        <td class="tdCenter" width="60">税率 <p class="eColor">Tax Rate</p></td>
                        <td class="tdCenter">速算扣除数 <p class="eColor">Quick Deduction</p></td>
                    </tr>
                    <tr>
                        <td class="tdCenter">A1</td>
                        <td>0-1,500</td>
                        <td class="tdCenter">3%</td>
                        <td class="tdRight">-</td>
                    </tr>
                    <tr>
                        <td class="tdCenter">A2</td>
                        <td>1,501-4,500</td>
                        <td class="tdCenter">10%</td>
                        <td class="tdRight">105</td>
                    </tr>
                    <tr>
                        <td class="tdCenter">A3</td>
                        <td>4,501-9,000</td>
                        <td class="tdCenter">20%</td>
                        <td class="tdRight">555</td>
                    </tr>
                    <tr>
                        <td class="tdCenter">A4</td>
                        <td>9,001-35,000</td>
                        <td class="tdCenter">25%</td>
                        <td class="tdRight">1005</td>
                    </tr>
                    <tr>
                        <td class="tdCenter">A5</td>
                        <td>35,001-55,000</td>
                        <td class="tdCenter">30%</td>
                        <td class="tdRight">2755</td>
                    </tr>
                    <tr>
                        <td class="tdCenter">A6</td>
                        <td>55,001-80,000</td>
                        <td class="tdCenter">35%</td>
                        <td class="tdRight">5505</td>
                    </tr>
                    <tr>
                        <td class="tdCenter">A7</td>
                        <td>Above 80,000</td>
                        <td class="tdCenter">45%</td>
                        <td class="tdRight">13505</td>
                    </tr>
                    </tbody>
                </table>
                <div id="formTip">
                    <p>（备注：同一自然年度内归属的多批股权收益需合并计税，请按批次点击依次填写）</p>
                    <p class="en">Award Income Details 
                (Notes: Award incomes realized during the same tax year need be accumulated for calculating. Please fill in your already-realized income records batch by batch in right section)</p>
                </div>
            </div>
        </div>
        <div id="result">
            <div class="container">
                <div id="resultTitle"><span>计算结果<i>(Calculation Result)</i></span></div>
                <div id="tableDiv" class="clearfloat"></div>
                <div id="total" class="clearfloat">
                    <div>本年度累计归属/行权收益（RMB）：<span id="totalIncome">0.00</span></div>
                    <div>总计应缴个人所得税（RMB）：<span id="totalTax">0.00</span></div>
                    <div>Accumulated Taxable Incomes (RMB): <span id="totalIncomeE">0.00</span></div>
                    <div>Accumulatd Tax Payable (RMB)：<span id="totalTaxE">0.00</span></div>
                </div>
                <div id="tip">
                    <p>* 该计算结果仅供参考，实际应缴个人所得税以公司计算结果为准。</p>
                    <p>* Above calculation is only for reference. Acutal tax amount is subject to company's result.</p>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="mask"></div>
<div id="alert">
    <div id="msg"></div>
    <input id="confirm" class="confirm" onclick="closeAlert();" value="确定(Confirm)" type="button">
</div>
<div id="alert2">
    <div id="msg">请重置后再重新计算 <p>Please resume your calculation after clicking “Reset”</p></div>
    <input id="reset2" class="confirm" onclick="closeAlert();resetForm();" value="重置(Reset)" type="button">
    <input id="close2" class="confirm closeBtn" onclick="closeAlert();" value="关闭(Close)" type="button">
</div>