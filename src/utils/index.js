
import { message, Modal } from "antd";
import { CloseCircleOutlined, CloseOutlined, ExclamationCircleOutlined } from "@ant-design/icons";

export function isNormalInteger(str) {
    var n = Math.floor(Number(str));
    return n !== Infinity && String(n) === str && n >= 0;
}
export function componentLoader(lazyComponent, attemptsLeft = 2) {
    return new Promise((resolve, reject) => {
        lazyComponent()
            .then(resolve)
            .catch((error) => {
                setTimeout(() => {
                    if (attemptsLeft === 1) {
                        reject(error);
                        return;
                    }
                    componentLoader(lazyComponent, attemptsLeft - 1).then(resolve, reject);
                }, 100);
            });
    });
}

export function confirmBox(dispatch, { onOk,okCustomCancel, message,onCancel, okText, cancelText, title, icon,cancelButtonProps, ...rest }) {
    Modal.confirm({
        onOk: () => {
            onOk && onOk()
        },
        onCancel: () => {
            onCancel && onCancel()
        },
        centered: true,
        content: message,
        title: title || <div style={{display:"flex" ,justifyContent:"space-between"}}><div>Confirm</div></div>,
        icon: icon || <ExclamationCircleOutlined />,
        okText: okText || 'Yes',
        cancelText: (
            <span style={{ color: '#2A76AC' }}>
              {cancelText || 'No'}
            </span>
          ),
        
        
        
        ...rest
    });
}

export const countries = [
    { value: 'IN', label: '(India)IN' },
    { value: 'US', label: '(United States)US' }
]