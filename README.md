# 정재헌의 야심찬 리액트 탐방기

이 프로젝트는 [Create React App](https://github.com/facebook/create-react-app)을 통해 부트스트랩되었습니다.

이미 [러닝 리액트](http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9791162244494)로 매운맛을 보고왔기 때문에 너무 기본적인 내용은 적지 않겠습니다.

[Nomad Coders - ReactJS로 영화 웹 서비스 만들기](https://nomadcoders.co/react-for-beginners)를 보며 수월하게 탐방하고 있습니다.

※ 광고 아닙니다.

## 뭘 배우고 있는거야?

`~ 21.12.04`

1. key를 무시하지 말자.
2. 아마존 밀림같았던 Select - Option

#### 1. key를 무시하지 말자.

To Do 리스트를 러닝 리액트에서 본 느낌을 살려 만들던 중 이상한 일이 벌어졌습니다. 구조는 ToDoList 컴포넌트에 title과 id로 구성된 객체 배열을 넘기면, 이 배열을 참고하여 ToDo 컴포넌트들을 만들도록 했습니다.

```js
{
  todos.map((todo) => (
    <ToDo title={todo.title} id={todo.id} deleteTodo={onDelete} />
  ));
}
```

```js
function ToDo({ title, id, deleteTodo = (f) => f }) {
  const [checked, setChecked] = useState(false);
  const toggle = () => setChecked((checked) => !checked);
  return (
    <div className={styles.todowrapper}>
      <input type="checkbox" onClick={toggle} value={checked} />
      <p>{title}</p>
      {checked ? <button onClick={() => deleteTodo(id)}>Delete</button> : null}
    </div>
  );
}
```

위와같이 key를 넣어달라는 콘솔의 빨간 경고가 있었지만 그냥 무시하고 코딩을 하고 있었습니다. ToDo에 있는 체크박스를 클릭하면 삭제할 수 있는 버튼이 생성됩니다.

이때 4개정도 to do를 만든 후, 맨 위에 있는 to do를 체크하고 삭제했습니다.(0번째 to do 삭제한 상황)

근데..! 바로 아래있던 to do의(1번째 to do) 체크박스가 체크되는 현상이 발생했습니다. O X O X 상태로 to do가 있고 0번째 to do를 삭제하면, 원래는 X O X 가 되어야하는데, O X O 가 되버렸습니다.

이는 key를 추가하니 해결되었습니다.

```js
{
  todos.map((todo) => (
    <ToDo title={todo.title} key={todo.id} id={todo.id} deleteTodo={onDelete} />
  ));
}
```

이에 대해 탐구하는 과정은 추후 진행될 예정입니다.

#### 2. 아마존 밀림같았던 Select - Option.

coin tracker를 만들면서 약 6300개의 코인에 대한 정보를 배열 형태로 받게 되었습니다. 이 정보들을 Select의 Option들로 준 후, 선택된 option의 정보를 통해 N달러에 몇개의 코인을 살 수 있는지를 보이는 것이 목표였습니다.

Option들이 몇개 없으면 event.target을 탐색할 때 value가 잘 보였는데, Option이 6300개 정도 있으니까 value를 찾는 것이 힘들어졌습니다. event.target.value로 찍으면 나오는데, 개발자 도구에서는 안 보이는 상황에 식은땀이 흘렀습니다.

api를 통해 받아온 정보에서 코인의 현재 가격과 심벌(비트코인의 경우 BTC)을 가지고 보여주려 했습니다. 하지만 제 지식은 event.target.value에서 멈춰있었기 때문에 혹시 Option에서 value에 객체를 전달 할 수가 있는지 알아보았지만 역시나 실패했습니다.

```js
{
  coins.map((coin, i) => (
    <option
      value={i}
      price={coin.quotes.USD.price}
      symbol={coin.symbol}
      key={coin.id}
    >
      {coin.name}
    </option>
  ));
}
```

위와 같이 넘기려 했는데, value에 접근해서 선택한 Option 자체는 찾을 수 있었지만 Attribute들을 뽑을 방법을 생각하지 못했습니다. 어떻게 검색해야할지 감도 잡히지 않았을 때, 우연히 찾게된 [스택오버플로 글](https://stackoverflow.com/questions/47070997/how-to-get-key-prop-from-react-element-on-change)이 절 살려주었습니다.

위 글을 통해 해결할 수 있었습니다.

```js
const onSelect = (event) => {
  const selectedIndex = event.target.options.selectedIndex;
  const selectedOption = event.target.options[selectedIndex];
  const price = selectedOption.getAttribute("price");
  const symbol = selectedOption.getAttribute("symbol");
  setSelected({ price, symbol });
  setMoney(0);
  setMyCoin(0);
};
```

---

`~21.12.05`

1. exhaustive-deps-warning

#### 1. exhaustive-deps-warning

이름부터 무시무시합니다. 에러의 전문은 다음과 같습니다.

> React Hook useEffect has a missing dependency: 'getMovie'. Either include it or remove the dependency array. (react-hooks/exhaustive-deps)

처음 봤기 때문에 뭘 어떻게 하라는지 감도 안 잡혔습니다. 저 에러를 구글링 하고, 다음 [블로그](https://kyounghwan01.github.io/blog/React/exhaustive-deps-warning/#_1-useeffect%E1%84%82%E1%85%A2-state%E1%84%85%E1%85%B3%E1%86%AF-%E1%84%82%E1%85%A5%E1%87%82%E1%84%8B%E1%85%A5%E1%84%8C%E1%85%AE%E1%86%B7)를 통해 에러가 난 원인을 알 수 있었습니다.

```js
function Detail() {
  const { id } = useParams();
  const [movieData, setMovieData] = useState({});

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieData(json.data.movie);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return <h1>Detail</h1>;
}
```

위 코드에서 id라는 state를 useEffect 안에서 사용한 것이 문제였습니다.

id가 바뀌게 되면 getMovie를 다시 렌더링 해야합니다. 이때 useEffect의 의존배열을 빈 배열로 설정했기 때문에 다시 렌더링을 할 수가 없습니다.

```js
useEffect(() => {
  getMovie();
}, [getMovie]);
```

그렇다고 위와같이 코드를 짜버리면 문제가 생깁니다. js에서 함수는 객체타입의 값입니다. 따라서 랜더링 할 때마다 메모리에 새로 값을 만들고 이를 식별자에 바인딩하게 됩니다.

이를 리액트는 getMovie함수가 달라졌다고 판단합니다. 즉, id의 상태가 변하지 않아도 매 랜더링마다 getMovie를 호출하는 참사가 벌어집니다. 그래서 useCallBack 함수를 사용하여 id가 변할때만 getMovie를 호출하도록 처리해주면 해결됩니다.

이런 참사를 미리 걱정해주는 [react-script](https://www.npmjs.com/package/react-scripts)에게 감사한 마음입니다.
