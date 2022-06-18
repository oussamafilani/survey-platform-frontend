import * as React from 'react'
interface IuseLocalStorage {
  key: string
  defaultValue?: string | (() => string)
  options?: {
    serialize: (value: any) => string
    deserailize: (value: string) => any
  }
}

export default function useLocalStorageState({
  defaultValue = '',
  key,
  options = {serialize: JSON.stringify, deserailize: JSON.parse},
}: IuseLocalStorage) {
  const [state, setState] = React.useState(() =>
    window.localStorage.getItem(key)
      ? options.deserailize(window.localStorage.getItem(key) ?? '')
      : typeof defaultValue === 'function'
      ? defaultValue()
      : defaultValue,
  )
  const prevKey = React.useRef(key)
  console.log({prev: prevKey.current, key})
  if (prevKey.current !== key) window.localStorage.removeItem(prevKey.current)
  React.useEffect(() => {
    window.localStorage.setItem(key, options.serialize(state))
  }, [key, options, options.serialize, state])
  return [state, setState]
}
