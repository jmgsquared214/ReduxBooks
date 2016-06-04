export function selectBook(book) {
// selectBook is an ActionCreator, it needs to return an action,
// an object with a type property. An action has two values ; a type and a payload
// type is usually all caps and a string
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
