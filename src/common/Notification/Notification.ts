import {notifications} from "@mantine/notifications";


export const notification = (message:string) => {

  notifications.show({
    radius: "md",
    color: 'cyan',
    autoClose: 2000,
    message: message,
    style: {width: 280},
    title: 'Уведомление',
    withCloseButton: false,
  })
}