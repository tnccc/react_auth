import styles from '@/components/feature/SignUp/index.module.css'
import { InputForm } from "@/components/ui/InputForm/InputForm";
import { useState } from "react";

export const SignUp = () => {
  // 最終的にユーザ情報は配列として持つ方がよい？
  
  // ユーザネーム
  const [userName, setUserName] = useState<string>('');

  // inputFormで入力された値を取得する関数
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    return setUserName(e.target.value);
  }

  return (
      <div className={styles.sign_up}>
        <InputForm
          label="Name"
          type="text"
          value={userName}
          placeHolder="Your Name, e.g : John Doe"
          handler={handleChange}
        />
      </div>
  )
}