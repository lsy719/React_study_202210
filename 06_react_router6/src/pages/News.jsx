import React from 'react'
import { useResolvedPath } from 'react-router-dom'

export default function News() {
  console.log(useResolvedPath('/use?id=001&name=lsy#asd'))
  return (
    <ul>
      <li>news001</li>
      <li>news002</li>
      <li>news003</li>
    </ul>
  )
}
