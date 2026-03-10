import { useSearchParams } from "react-router"
import React from 'react'

export default function UseSearchParam() {

    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get('a'));
   


  return (
    <div className="text-white">
      <h1>Abhishek raj rauniyar</h1>
    </div>
  )
}
