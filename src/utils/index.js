import {Modal} from 'antd-mobile';

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
