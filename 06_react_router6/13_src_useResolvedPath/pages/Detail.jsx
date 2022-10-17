import React from 'react'
import { useLocation } from 'react-router-dom'

export default function () {
  const {state:{id,title,content}} = useLocation();
  // const {id,title,content} = state;
  return (
    <ul>
      <li>{id}</li>
      <li>{title}</li>
      <li>{content}</li>
    </ul>
  )
}
