import {Modal} from 'antd-mobile';
import {getAddress} from "../axios/api";

const alert = Modal.alert;
// 确认弹窗提示
export const showAlert = (msg) => {
    const alertInstance = alert('提示', msg || '未知错误', [
        {
            text: '取消',
            onPress: () => console.log('cancel'),
            style: 'default'
        }, {
            text: '确定',
            onPress: () => console.log('ok')
        }
    ]);
    setTimeout(() => {
        // 可以调用close方法以在外部close
        alertInstance.close();
    }, 500000);
};

const BJX = "赵|钱|孙|李|周|吴|郑|王|冯|陈|楮|卫|蒋|沈|韩|杨|朱|秦|尤|许|何|吕|施|张|孔|曹|严|华|金|魏|陶|姜|戚|谢|邹|喻|柏|水|窦|章|" +
        "云|苏|潘|葛|奚|范|彭|郎|鲁|韦|昌|马|苗|凤|花|方|俞|任|袁|柳|酆|鲍|史|唐|费|廉|岑|薛|雷|贺|倪|汤|滕|殷|罗|毕|郝|邬|安|常|" +
        "乐|于|时|傅|皮|卞|齐|康|伍|余|元|卜|顾|孟|平|黄|和|穆|萧|尹|姚|邵|湛|汪|祁|毛|禹|狄|米|贝|明|臧|计|伏|成|戴|谈|宋|茅|庞|" +
        "熊|纪|舒|屈|项|祝|董|梁|杜|阮|蓝|闽|席|季|麻|强|贾|路|娄|危|江|童|颜|郭|梅|盛|林|刁|锺|徐|丘|骆|高|夏|蔡|田|樊|胡|凌|霍|" +
        "虞|万|支|柯|昝|管|卢|莫|经|房|裘|缪|干|解|应|宗|丁|宣|贲|邓|郁|单|杭|洪|包|诸|左|石|崔|吉|钮|龚|程|嵇|邢|滑|裴|陆|荣|翁|" +
        "荀|羊|於|惠|甄|麹|家|封|芮|羿|储|靳|汲|邴|糜|松|井|段|富|巫|乌|焦|巴|弓|牧|隗|山|谷|车|侯|宓|蓬|全|郗|班|仰|秋|仲|伊|宫|" +
        "宁|仇|栾|暴|甘|斜|厉|戎|祖|武|符|刘|景|詹|束|龙|叶|幸|司|韶|郜|黎|蓟|薄|印|宿|白|怀|蒲|邰|从|鄂|索|咸|籍|赖|卓|蔺|屠|蒙|" +
        "池|乔|阴|郁|胥|能|苍|双|闻|莘|党|翟|谭|贡|劳|逄|姬|申|扶|堵|冉|宰|郦|雍|郤|璩|桑|桂|濮|牛|寿|通|边|扈|燕|冀|郏|浦|尚|农|" +
        "温|别|庄|晏|柴|瞿|阎|充|慕|连|茹|习|宦|艾|鱼|容|向|古|易|慎|戈|廖|庾|终|暨|居|衡|步|都|耿|满|弘|匡|国|文|寇|广|禄|阙|东|" +
        "欧|殳|沃|利|蔚|越|夔|隆|师|巩|厍|聂|晁|勾|敖|融|冷|訾|辛|阚|那|简|饶|空|曾|毋|沙|乜|养|鞠|须|丰|巢|关|蒯|相|查|后|荆|红|" +
        "游|竺|权|逑|盖|益|桓|公|万俟|司马|上官|欧阳|夏侯|诸葛|闻人|东方|赫连|皇甫|尉迟|公羊|澹台|公冶|宗政|濮阳|淳于|单于|太叔|申屠|公孙|仲" +
        "孙|轩辕|令狐|锺离|宇文|长孙|慕容|鲜于|闾丘|司徒|司空|丌官|司寇|仉|督|子车|颛孙|端木|巫马|公西|漆雕|乐正|壤驷|公良|拓拔|夹谷|宰父|谷梁" +
        "|晋|楚|阎|法|汝|鄢|涂|钦|段干|百里|东郭|南门|呼延|归|海|羊舌|微生|岳|帅|缑|亢|况|后|有|琴|梁丘|左丘|东门|西门|商|牟|佘|佴|伯|" +
        "赏|南宫|墨|哈|谯|笪|年|爱|阳|佟|第五|言|福";

// 第一步去除特殊字符，提取手机号
export const AreaSplit = function (str) {
    return new Promise((resolve, reject) => {
        let phone,
            name,
            city,
            province,
            district,
            address
        let regx = /(1[3|4|5|6|7|8|9][\d]{9}|0[\d]{2,3}-[\d]{7,8}|400[-]?[\d]{3}[-]?[\d]{4})/g;

        str = str
            .replace(/[&|\\*^%$#!_@-]/g, "")
            .replace(/\s+/g, "");
        let strLength = str.length
        let phoneNums = str.match(regx);
        if (phoneNums.length > 0) {
            phone = phoneNums[0]
        } else {
            reject("请按提示规则粘贴内容")
        }
        let phoneIndex = str.indexOf(phone)
        // 以电话号码为拆分
        if ((strLength - phoneIndex !== 11) && phoneIndex !== 0) {
            let AddressName = str.split(phone)
            if (AddressName[0].length > AddressName[1].length) {
                name = AddressName[1]
            } else {
                name = AddressName[0]
            }
        }
        str = str.replace(phone, '')
        strLength = str.length
        // str 姓名+地址
        getAddress({address: str}).then(res => {
            if (res.messageModel.code === 0) {
                city = res.dataModel.city
                province = res.dataModel.province
                district = res.dataModel.district
                let obj = getName(str, province, city, district)
                console.log(obj)
                resolve({
                    phone,
                    name: obj.name,
                    city,
                    province,
                    district,
                    address: obj.address
                })
            } else {
                reject("请按提示规则粘贴内容")
            }
        })
    })
}

function getName(str, province, city, district) {
    let name,
        address
    let provinceIndex = str.indexOf(province)
    let cityIndex = str.indexOf(city)
    let districtIndex = str.indexOf(district)
    if (provinceIndex === -1 && cityIndex === -1 && districtIndex === -1) 
        return {name: '', address: ''}
    // 地址在前，名字在后
    if (provinceIndex === 0 || cityIndex === 0 || districtIndex === 0) {
        // 根据百家姓
        let arr = BJX.split('|')
        let BJX_Index
        for (let i = 0; i < arr.length; i++) {
            if (str.lastIndexOf(arr[i]) > 0) {
                BJX_Index = str.lastIndexOf(arr[i])
                break
            }
        }
        name = str.substr(BJX_Index, str.length - BJX_Index)
    } else {
        // 名字在前，地址在后
        if (str.indexOf(province) > 0) {
            name = str.split(province)[0]
        } else if (str.indexOf(city)) {
            name = str.split(province)[0]
        } else if (str.indexOf(district)) {
            name = str.split(district)[0]
        } else {
            name = ''
        }
        if (name.length > 4) {
            name = name.slice(0, 2);
        }
    }
    address = str
        .replace(province, "")
        .replace(city, "")
        .replace(district, "")
        .replace(name, "")
    return {name: name, address: address}
}

export const throttle = function (fn, interval) { //fn为要执行的函数，interval为延迟时间
    let _self = fn, //保存需要被延迟执行的函数引用
        timer, //定时器
        firstTime = true; //是否第一次调用
    return function () { //返回一个函数，形成闭包，持久化变量
        let args = arguments, //缓存变量
            _me = this;
        if (firstTime) { //如果是第一次调用，不用延迟执行
            _self.apply(_me, args);
            return firstTime = false;
        }
        if (timer) { //如果定时器还在，说明上一次延迟执行还没有完成
            return false;
        }
        timer = setTimeout(function () { //延迟一段时间执行
            clearTimeout(timer);
            timer = null;
            _self.apply(_me, args);
        }, interval || 500);
    };
};
