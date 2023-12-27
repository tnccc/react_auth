import styles from '@/components/feature/SignUp/index.module.css'
import { InputForm } from '@/components/ui/InputForm';
import { useState } from "react";

export const SignUp = () => {
  // ユーザ情報をオブジェクトとして保持
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  })

  console.log(userData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  }

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
        </form>
      </div>
  )
}