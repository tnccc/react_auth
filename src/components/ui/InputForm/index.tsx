import styles from '@/components/ui/InputForm/index.module.css'
import { EyePasswordHide, EyePasswordOpen } from '../icon';
import { useState } from 'react';

type Props = {
  inputName: string;
  label?: string;
  type?: string;
  value: string;
  placeHolder?: string;
  onChange: any;
}

export const InputForm = ({
  inputName,
  type,
  value,
  label,
  placeHolder,
  onChange
  }: Props) => {
  const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);
  const clickHandler = () => setPasswordVisibility(st => !st)

  return (
    <div className={styles.container}>
      { type === 'password' ? (
        <legend>
          <label>{ label && label }</label>
          <div className={styles.password}>
            <input
              name={inputName}
              type={passwordVisibility ? 'text' : type}
              value={value}
              placeholder={placeHolder}
              onChange={onChange}
            />
            {
              passwordVisibility ? (
                <span
                  className={styles.icon}
                  onClick={clickHandler}
                >
                  <EyePasswordOpen />
                </span>
              ) : (
                <span
                  className={styles.icon}
                  onClick={clickHandler}
                >
                  <EyePasswordHide />
                </span>
              )
            }
          </div>
        </legend>
      ) : (
        <legend>
          <label>{ label && label }</label>
          <div>
            <input
              name={inputName}
              type={type}
              value={value}
              placeholder={placeHolder}
              onChange={onChange}
            />
          </div>
        </legend>
      )}
    </div>
  )
}