import styles from '@/components/feature/SignUp/index.module.css'
import { InputForm } from '@/components/ui/InputForm';
import { SelectBox } from '@/components/ui/SelectBox';
import { generateYears } from '@/utils/years'
import { useState } from "react";

export const SignUp = () => {
  // ユーザ情報をオブジェクトとして保持
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    birthDay: '1980',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  }

  const handleBirthdayChange = (newBirthday: string) => {
    setUserData({
      ...userData,
      birthDay: newBirthday,
    });
  };

  return (
      <div className={styles.sign_up}>
        <form action="">
          <InputForm
            inputName='name'
            label="Name"
            type="text"
            value={userData.name}
            placeHolder="Your Name, e.g : John Doe"
            onChange={handleChange}
          />
          <InputForm
            inputName='email'
            label="email"
            type="email"
            value={userData.email}
            placeHolder="Your email"
            onChange={handleChange}
          />
          <InputForm
            inputName='password'
            label="Password"
            type="password"
            value={userData.password}
            placeHolder="Your password"
            onChange={handleChange}
          />
          <SelectBox
            label='Birthday'
            name='birthday'
            selectedValue={userData.birthDay}
            setSelectedValue={handleBirthdayChange}
            options={generateYears(1980)}
          />
        </form>
        <div>
          { userData.name }
          { userData.email }
          { userData.password }
          { userData.birthDay }
        </div>
      </div>
  )
}