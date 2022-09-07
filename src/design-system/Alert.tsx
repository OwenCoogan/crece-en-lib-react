import { Alert } from 'flowbite-react';

type AlertVariantType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

type AlertProps = {
  title: string;
  description: string;
  type?: AlertVariantType;
}

export default function AlertToaster(
  props: AlertProps
){
  return (
    <Alert
      color={props.type ? props.type : 'primary'}
    >
  <span>
    <span className="font-medium">
      {props.title}
    </span>
    {' '}{props.description}
  </span>
</Alert>
  )
}
