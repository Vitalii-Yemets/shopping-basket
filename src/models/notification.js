export class NotificationModel {
    constructor({ type, description }) {
        this.type = type
        this.description = description
    }

    getStyles() {
        switch (this.type) {
            case 'success':
                return {
                    iconName: 'check_circle',
                    iconStyleName: 'notification_icon__success',
                    notificationStyleName: 'notification__success'
                }

            case 'error':
                return {
                    iconName: 'error',
                    iconStyleName: 'notification_icon__error',
                    notificationStyleName: 'notification__error'
                }

            default:ч
                return {
                    iconName: 'info',
                    iconStyleName: 'notification_icon__info',
                    notificationStyleName: 'notification__info'
                }
        }
    }

}

export const NotificationType = {
    SUCCESS: 'success',
    ERROR: 'error',
    INFO: 'info'
}