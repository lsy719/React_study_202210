import React from 'react'
import { useNavigationType } from 'react-router-dom'

export default function News() {
  console.log('@@@',useNavigationType()) // 返回PUSH、REPLACE、POP
  return (
    <ul>
      <li>news001</li>
      <li>news002</li>
      <li>news003</li>
    </ul>
  )
}
