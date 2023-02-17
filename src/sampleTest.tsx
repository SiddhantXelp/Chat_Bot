import React from 'react'
import { useSelector } from 'react-redux'

export default function SampleTest() {
    const count = useSelector((state)=> state.counter.value)
  return (
    <div>SampleTest{count}</div>
  )
}
