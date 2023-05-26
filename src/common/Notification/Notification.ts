import {notifications} from "@mantine/notifications";


export const notification = (message:string) => {

  notifications.show({
    radius: "md",
    color: '#5E96FC',
    autoClose: 2000,
    message: message,
    style: {width: 280},
    title: 'Уведомление',
    withCloseButton: false,
  })
}