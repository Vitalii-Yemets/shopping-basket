import {
    ADD_NEW_NOTIFICATION,
    REMOVE_NOTIFICATION,
    UPDATE_NOTIFICATIONS
} from '../constants'

// Notifications
export const addNewNotification = newNotification => ({
    type: ADD_NEW_NOTIFICATION,
    newNotification
})

export const removeNotification = notificationIndex => ({
    type: REMOVE_NOTIFICATION,
    notificationIndex
})

export const updateNotifications = notifications => ({
    type: UPDATE_NOTIFICATIONS,
    notifications
})