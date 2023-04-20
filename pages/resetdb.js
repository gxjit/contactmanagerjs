import { useEffect } from 'react'
import localforage from 'localforage'

export default function ResetDB() {
  useEffect(() => {
    localforage.clear().then(() => console.log('DB Cleared!'))
  })
  return
}
