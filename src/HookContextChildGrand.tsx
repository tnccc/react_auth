import { useContext } from "react"
import { MyAppContext } from './HookContext';

export const HookContextChildGrand = () => {
  const { title, lang } = useContext(MyAppContext);

  return (
    <>
      <div>
        {title} ({lang})
      </div>
    </>
  )
}