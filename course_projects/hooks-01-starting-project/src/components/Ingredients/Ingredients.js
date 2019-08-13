import React, { useReducer, useCallback, useMemo } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import ErrorModal from '../UI/ErrorModal';
import Search from './Search';
import useHttp from '../../hooks/http';

const ingredientReducer = (currentIngredients, action) => {
  switch(action.type){
    case 'SET':
      return action.ingredients;
    case 'ADD':
      return [...currentIngredients, action.ingredient];
    case 'DELETE':
      return currentIngredients.filter(ingredient => ingredient.id !== action.id);
    default:
      throw new Error('Will never reach the default!');
  }
}

const Ingredients = props => {
  const [ userIngredients, dispatch ] = useReducer(ingredientReducer, []);
  const { isLoading, error, data, sendRequest } = useHttp();

  //const [ userIngredients, setUserIngredients ] = useState([]);
  //const [ isLoading, setIsLoading ] = useState(false);
  //const [ error, setError ] = useState();

  const filteredIngredientsHandler = useCallback(filteredIngredients => {
    dispatch({
      type: 'SET',
      ingredients: filteredIngredients
    });
    //setUserIngredients(filteredIngredients);
  }, []);

  const addIngredientHandler = useCallback(ingredient => {
   /* dispatchHttp({ type: 'SEND' });
    fetch('https://react-hooks-update-1c7d4.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
      dispatchHttp({ type: 'RESPONSE' });
      return response.json();
    })
    .then(responseData => {
      dispatch({
        type: 'ADD',
        ingredient: { id: responseData.name, ...ingredient }
      })
      //setUserIngredients(prevIngredients => [
      //  ...prevIngredients, 
      //  { id: responseData.name, ...ingredient }
      //]);
    })
    .catch(error => {
      dispatchHttp({ type: 'ERROR', error: error.message });
    });*/
  }, []);

  const removeIngredientHandler = useCallback(id => {
    //original way i did it
    //const userIngredientsCopy = [...userIngredients];
    //const updatedUserIngredients = userIngredientsCopy.filter(userIngredient => userIngredient.id != id);
    //setUserIngredients([...updatedUserIngredients]);
    //dispatchHttp({ type: 'SEND' });
    sendRequest(`https://react-hooks-update-1c7d4.firebaseio.com/ingredients/${id}.json`, 
    'DELETE'
    );

  }, [sendRequest]);

  const errorCloseHandler = useCallback(() => {
    //dispatchHttp({ type: 'CLEAR' });
  }, []);

  const ingredientList = useMemo(() => {
    return (
      <IngredientList 
        ingredients={userIngredients} 
        onRemoveItem={(id) => removeIngredientHandler(id)}
      />
    );
  }, [userIngredients, removeIngredientHandler]);

  return (
    <div className="App">
      {error ? <ErrorModal onClose={errorCloseHandler}>{error}</ErrorModal> : null}
      <IngredientForm onAddIngredient={addIngredientHandler} loading={loading}/>

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler}/>
        {ingredientList}
      </section>
    </div>
  );
}

export default Ingredients;
