import {
  InputGroup,
  InputLeftAddon,
  Input,
  Link,
  Icon,
  IconButton,
  Select,
} from '@chakra-ui/react'
import NextLink from 'next/link'

export const inputComp = (name, val, type = 'text') => (
  <InputGroup key={name}>
    <InputLeftAddon children={name} />
    <Input type={type} placeholder={name} defaultValue={val} />
  </InputGroup>
)

export const inputHookComp = (name, val, hookObj, type = 'text') => (
  <InputGroup key={name}>
    {name && <InputLeftAddon children={name} />}
    <Input
      type={type}
      placeholder={name}
      defaultValue={val}
      // value={val}
      {...hookObj}
    />
  </InputGroup>
)

// export const numHookComp = (name, val, hookObj, type = 'text') => (
//   <InputGroup key={name}>
//     <InputLeftAddon children={name} />
//     <Input
//       type={type}
//       placeholder={name}
//       defaultValue={val}
//       // value={val}
//       {...hookObj}
//     />
//   </InputGroup>
// )

export const inputHookReg = (name, defVal, key, regFunc, type = 'text') =>
  inputHookComp(
    name,
    defVal,
    {
      ...regFunc(key, type === Number ? { valueAsNumber: true } : {}),
    },
    type
  )

export const iconButton = (icn, lnk) => {
  const props =
    lnk instanceof Function
      ? { onClick: lnk, href: '#', key: lnk.toString() }
      : { href: lnk, key: lnk }

  return (
    <Link {...props} as={NextLink} size='xl'>
      <IconButton
        variant='outline'
        fontSize={'1.7em'}
        icon={<Icon as={icn}></Icon>}
      />
    </Link>
  )
}

export const selectComp = (name, list, onChange = null) => {
  return (
    <Select key={name} placeholder={name} onChange={onChange}>
      {list
        .filter((x) => x !== name)
        .map((x) => (
          <option key={String(x)} defaultValue={`${x}`}>
            {x}
          </option>
        ))}
    </Select>
  )
}

export const selectHookReg = (name, lst, key, regFunc) =>
  inputHookComp(name, lst, {
    ...regFunc(key),
  })
