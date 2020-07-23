import { useState, useEffect } from 'react';
import { getGifts } from '../helpers/getGifs';

// CustomHooks vendia siendo los anteriores Functional Component
export const useFetchGits = (category) => {

  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  // El useEffect me ayuda a renderizar mi component solo cuando lo que está en el array (segundo parametro) cambia.
  useEffect(() => {

    getGifts(category).then(imgs => {
      setState({
        data: imgs,
        loading: false,
      });
    });

  }, [category]);

  return state;

}