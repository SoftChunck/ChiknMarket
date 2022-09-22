import React, { useState } from 'react'
import {Multiselect} from 'multiselect-react-dropdown'
export default function MultipleSelectPlaceholder() {
  const data=[
    {Country:'India',id:1},
    {Country:'America',id:2},
    {Country:'France',id:1},
    {Country:'Germany',id:1},

  ]
  const [options] = useState(data);
  return (
    <div>
      <h3>MultiSelector</h3>
      <Multiselect  options={options} displayValue="Country"/>
    </div>
  )
}
