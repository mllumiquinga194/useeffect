import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GitExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  // const handleCategory = () => {
  //   // setCategories([...categories, 'Silicon Valley']);
  //   setCategories(cats => [...categories, 'Silicon Valley']);
  // }

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {
          categories.map(category =>
            <GifGrid key={category} category={category} />
          )
        }
      </ol>
    </>
  )
}
