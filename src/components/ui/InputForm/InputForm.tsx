import styles from '@/components/ui/InputForm/index.module.css'

type Props = {
  label?: string;
  type?: string;
  value: string;
  placeHolder?: string;
  handler: any;
}

export const InputForm = ({label, type, value, placeHolder, handler}: Props) => (
  <div className={styles.container}>
    { type === 'password' ? (
      <legend>
        <label>{ label && label }</label>
        <input
          onChange={handler}
          value={value}
          type={type}
          placeholder={placeHolder}
        />
        {/* TODO: パスワード入力時 <div> アイコン表示 </div> */}
      </legend>
    ) : (
      <legend>
        <label>{ label && label }</label>
        <input
          onChange={handler}
          value={value}
          type={type}
          placeholder={placeHolder}
        />
      </legend>
    )}
  </div>
)