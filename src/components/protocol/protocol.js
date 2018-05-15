import React, {Component} from 'react'
import {NavBar, Icon, WhiteSpace} from 'antd-mobile';

class Protocol extends Component {
    render() {
        return (
            <div className=''>
                <NavBar
                    mode="light"
                    icon={< Icon type = "left" />}
                    onLeftClick={() => {window.history.back()}}
                    ><h3>《快件运单契约条款》</h3></NavBar>
                <WhiteSpace size="lg"/>
                
                <p>一、运单仅作运送契约，为不得转让之证件，当以货物所有人或代理人的名义填签之后即表示接受本运单运费和遵守此承运契约条款；快件由本公司收件员收取之后，即视为本契约生效。</p>
                <p>二、寄件人必须在运单上据实填写托运内容和数量，如有不实填写，其所产生之责任由寄件人负完全责任。</p>
                <p>三、寄件人必须对所托运之物品妥善包装，易碎物品更应加强内外包装，否则其破损及所衍生之责任由寄件人自行负责。</p>
                <p>四、本公司拥有绝对权利对每票货物开封检查是否符合有关政府相关规定或航空限制，对违法、违禁物品可拒收或退回，寄件人拒绝验视的，本公司有权拒收。</p>
                <p>五、本公司不予受理运输的托寄物包括但不限于：发票、易燃、易腐烂或具毒性、爆炸性、杀伤性、腐蚀性及放射性之危险品；毒品及吸毒之相关器具；妨害风化之图书、照片、雕塑品及器具；侵犯商标、著作权或智慧财产权之物品；货币、增值税发票、其他税票或有价证劵、金银财宝、古董、贵重金属；活动物、植物及种子；具通信性质之信函；妨害飞航安全之物品如手机等具有扰乱信号功能的电子设备；一切经航空运输的粉体、液体物品以及光碟；以及一切国家法律、法规、快递行业主管部门及其他行政管理部门规定的禁、限寄物品。</p>
                <p>六、因国家安全货追查刑事犯罪的需要，本公司有义务配合国家相关行政机关对邮件进行检查及处理。</p>
                <p>七、本公司对寄件人所托运物品所产生的收益、利润、实际用途或市场价值等任何间接或特殊商业价值的损失不承担赔偿责任。</p>
                <p>八、已经发运的快件但未派送，如收件人要求退回，寄件客户需支付本次费用；已经派送但因寄件客户原因导致快件无法派送，寄件客户要求退回，则需支付双程运费，寄件客户拒付时，本公司有权不退回该快件，寄件人或其指定付款人不支付寄递费用的，本公司对快件享有留置权，并免费保留三个月，三个月后如客户仍不受理，我公司有权处理变卖该快件。</p>
                <p>九、如果由于收方客户的原因未能一次派送成功，本公司可以对快件作两次免费派送，如果两次派送仍未成功，本公司从第三次派送开始每次需要加收一次运费；或按寄件方客户要求退回快件，退件费用同本契约第八条。</p>
                <p>十、如因客户搬迁、写错地址等原因需要改寄其他地方，本公司需要加收一次运费派送或退回原寄地，退件费用同本契约第八条。</p>
                <p>十一、无法投递的邮件，若联系不到寄件人，或寄件人不作出明确指示的，除不易保存的物品外，本公司将对快件保存3个月。期限届满，本公司有权依据国家相关法律法规的规定对快件进行处理。</p>
                <p>十二、如所寄物品每公斤所占体积大于6000立方厘米，经航空运输则按照国际航空运输协会（IATA）规定计费重量，按货物长cm*宽cm*高cm/6000；不经航空运输，按货物长cm*宽cm*高cm/12000为计费重量。</p>
                <p>十三、托运物品如运送途中发生丢失或损毁，除了发生原因是战斗、台风、地震、火灾等人为不可抗拒因素本公司不负责任外，其余赔偿原则如下：</p>
                <p>1.损坏或遗失根据华沙公约规定运费三倍以上不超过九倍赔偿，但最高赔偿不超过人民币800元。</p>
                <p>2.如托运物品价值较高，寄件人可向本公司声明保价。价值在人民币10000元以下的，本公司将根据所声明价值收取5‰作为保值费，声明价值超过人民币10000元的另行商议；若未作保价声明的，本公司将按本条第一款赔偿。</p>
                <p>3.已选择保价，则本公司按托寄物的声明价值和损失比例赔偿，如果声明价值高于实际价值的，按实际价值赔偿。本条款保价费最低5元起。</p>
                <p>4.索赔要求必须在及出日起三十天以内以书面形式向本公司提出，并附相关之证明文件，逾期本公司将视为已按规定完成运送而不再受理。</p>
                <p>5.寄件人在提出索赔的同时，有义务预先偿付本公司的运费，不得以此为由拒付月结款或者从中扣除申请索赔的款项。</p>
                <p>十四、本协议未作规定的，按照国家相应的法律法规及本公司相关规定执行。</p>
                <p>十五、凡因本协议引起的或与本协议有关的任何争议，由双方友好协商解决。协商不成时，双方均有权向有管辖权的人民法院提起诉讼。</p>
                <p style={{
                    textAlign: "right"
                }}>深圳市通用物流有限公司</p>
            </div>
        )
    }
}
export default Protocol