export const loggerMiddleware = (store) => (next) => (action) => {
  // console.group(action.type);
  // console.log("Действие:", action);
  // console.log("Предыдущее состояние:", store.getState());

  const result = next(action);

  // console.log("Новое состояние:", store.getState());
  // console.groupEnd();

  return result;
};
