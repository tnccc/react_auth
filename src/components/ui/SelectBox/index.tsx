import styles from '@/components/ui/SelectBox/index.module.css'

type Props = {
  label?: string;
  name: string;
  selectedValue: string;
  setSelectedValue: any;
  options: {
    id: number;
    name: string | number;
    [key: string]: any;
  }[];
}

export const SelectBox = ({
  label,
  name,
  selectedValue,
  setSelectedValue,
  options,
}: Props) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // 選択されたオプションの値を取得
    const selectedName = e.target.value;
    // propsで受け取った配列の値とselectedNameが一致するものを走査
    const currentOption = options.find((option) => option.name.toString() === selectedName);
    if(currentOption) {
      setSelectedValue(currentOption.name.toString());
    };
  }

  return (
    <div className={styles.container}>
      <legend>
        <label>{ label && label }</label>
        <select
          onChange={handleSelectChange}
          name={name}
        >
          {options.map((option: any) => (
            <option
              key={option.id}
              value={option.name}
              label={option.name}
            />
          ))}
        </select>
      </legend>
    </div>
  )
}