import ApiContext from "./ApiContext.store";

const Provider = ({ children }) => {
  return <ApiContext>{children}</ApiContext>;
};

export default Provider;
