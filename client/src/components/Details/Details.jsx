export const Details = ({ data }) => {
  const { name, price, content } = data;
  return (
    <div>
      <h1>{name}</h1>
      {price && <div>Цена: {price}р</div>}
      <p>{content}</p>
    </div>
  );
};
