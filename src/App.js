import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selected, setSelected] = useState({});
  const [money, setMoney] = useState(0);
  const [myCoin, setMyCoin] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setSelected({
          price: json["0"].quotes.USD.price,
          symbol: json["0"].symbol,
        });
        setLoading(false);
      });
  }, []);
  const onSelect = (event) => {
    const selectedIndex = event.target.options.selectedIndex;
    const selectedOption = event.target.options[selectedIndex];
    const price = selectedOption.getAttribute("price");
    const symbol = selectedOption.getAttribute("symbol");
    setSelected({ price, symbol });
    setMoney(0);
    setMyCoin(0);
  };
  const onWriteMoney = (event) => {
    setMoney(event.target.value);
  };
  const onWriteCoin = (event) => {
    setMyCoin(event.target.value);
  };
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <>
          <select onChange={onSelect} defaultValue={coins["0"].name}>
            {coins.map((coin, i) => (
              <option
                value={i}
                price={coin.quotes.USD.price}
                symbol={coin.symbol}
                key={coin.id}
              >
                {coin.name}
              </option>
            ))}
          </select>
          <hr />
          <div>
            <h2>How many money do you have?</h2>
            <input
              value={money}
              onChange={onWriteMoney}
              placeholder="Write here..."
            />
            {" USD"}
            <div>
              <span>
                You can get {money / selected.price} {selected.symbol}
              </span>
            </div>
          </div>
          <hr />
          <div>
            <h2>How many coins do you have?</h2>
            <input
              value={myCoin}
              onChange={onWriteCoin}
              placeholder="Write here..."
            />
            {` ${selected.symbol}`}
            <div>
              <span>You can get {selected.price * myCoin} USD</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
