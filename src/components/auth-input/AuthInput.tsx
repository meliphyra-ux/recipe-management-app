import { ChangeEventHandler } from 'react'
import { Input } from '@chakra-ui/react'

const AuthInput = ({ inputName, onChangeHandler, type }: {inputName: string, onChangeHandler: ChangeEventHandler<HTMLInputElement>, type: string}) => {
  return (
    <Input name={inputName.toLowerCase()} type={type} placeholder={inputName} required onChange={onChangeHandler}/>
  )
}

export default AuthInput