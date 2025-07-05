## React Props 传值规范详解

Props (Properties) 是 React 组件间通信的核心机制，用于父组件向子组件传递数据或行为。遵循良好的 Props 传值规范能显著提升代码的可读性、可维护性和健壮性。

### 核心概念

1.  **单向数据流：** Props 是只读的。父组件传递给子组件的数据，子组件**不能直接修改**。子组件需要通过调用父组件传递下来的回调函数（也是通过 props）来请求父组件更新数据。
2.  **任意类型：** Props 可以传递任何 JavaScript 值，包括：
    - **基础数据类型：** `string`, `number`, `boolean`, `null`, `undefined`
    - **复杂数据类型：** `object`, `array`
    - **函数：** 用于回调（如事件处理、状态更新请求）
    - **JSX 元素：** 用于组合 (`children` prop 或自定义插槽)
    - **Promise 对象：** 用于传递异步操作（需在子组件中正确处理 `.then`/`.catch` 或使用 `async`/`await`）
    - **React 元素 / 组件引用：** (较少见，需谨慎)
3.  **对象传递：** Props 在语法上表现为传递给组件 JSX 标签的属性集合，React 在内部会将它们组合成一个单一的对象传递给子组件。

### 核心规范

1.  **命名一致性（Key Matching）：** **这是最关键的一点。**

    - 父组件在传递 props 时使用的属性名（key），必须与子组件在接收时试图访问的属性名**完全一致**（包括大小写）。
    - 子组件通过 `props` 对象（或解构赋值）访问传入的值。如果访问的 key 在父组件传递的 props 对象中不存在，该值将为 `undefined`。
    - **错误示例：** 父组件传递 `data123`，子组件尝试读取 `data` 或 `data_123` 会导致 `undefined`。如果尝试调用一个 `undefined` 值（如 `undefined()`），则会抛出 `TypeError: ... is not a function` 错误。

    ```jsx
    // ✅ 正确：key 完全匹配
    // 父组件
    function ParentComponent() {
      const [data, setData] = useState("Initial Data");
      return <ChildComponent data123={data} setData456={setData} />;
    }

    // 子组件
    function ChildComponent(props) {
      // ✅ 访问正确的 key
      console.log(props.data123); // 输出: 'Initial Data'
      props.setData456("New Data"); // ✅ 调用正确的函数
    }

    // ❌ 错误：key 不匹配
    function ChildComponentBroken(props) {
      console.log(props.data); // undefined (父组件传的是 data123)
      props.setData("New Data"); // TypeError: props.setData is not a function (父组件传的是 setData456)
    }
    ```

2.  **类型明确：**

    - 强烈建议使用 TypeScript 或 `PropTypes` 库来定义 props 的类型和是否必需 (`isRequired`)。
    - 这能在开发阶段捕获类型不匹配或遗漏必需 props 的错误，提供清晰的文档，并提升 IDE 的智能提示能力。

    ```jsx
    // 使用 PropTypes (JavaScript)
    import PropTypes from "prop-types";

    function ChildComponent({ data123, setData456 }) {
      // ... 组件逻辑
    }
    ChildComponent.propTypes = {
      data123: PropTypes.string.isRequired, // 必须是字符串且必需
      setData456: PropTypes.func.isRequired, // 必须是函数且必需
    };

    // 使用 TypeScript (TypeScript)
    interface ChildComponentProps {
      data123: string; // 必需属性
      setData456: (newValue: string) => void; // 必需函数
      optionalProp?: number; // 可选属性
    }
    function ChildComponent({ data123, setData456 }: ChildComponentProps) {
      // ... 组件逻辑
    }
    ```

3.  **只读性：** 子组件**绝对不能直接修改**接收到的 props。如果需要基于 prop 计算内部状态，应使用 `useState` 并在初始化时使用该 prop。如果需要修改数据，必须调用父组件通过 props 传递下来的回调函数。

    ```jsx
    // ✅ 正确：使用回调函数请求父组件更新
    function ChildComponent({ value, onChange }) {
      const handleClick = () => {
        onChange(newValue); // 调用父组件传递的函数来请求更新
      };
      return <button onClick={handleClick}>Change Value</button>;
    }

    // ❌ 错误：直接修改 prop
    function BadChildComponent(props) {
      const handleClick = () => {
        props.value = "new value"; // 直接修改 props.value 是绝对禁止的！React 会警告/错误。
      };
      return <button onClick={handleClick}>Change Badly</button>;
    }
    ```

4.  **解构赋值：** 推荐在子组件函数参数或函数体顶部使用解构赋值来提取 props，提高代码可读性。

    ```jsx
    // 直接在参数中解构 (最简洁)
    function ChildComponent({ data123, setData456 }) {
      // 直接使用 data123 和 setData456
    }

    // 在函数体内解构
    function ChildComponent(props) {
      const { data123, setData456 } = props;
      // 使用 data123 和 setData456
    }
    ```

5.  **传递函数（回调）：**

    - 传递函数是实现子组件向父组件通信的标准方式（如事件处理、状态更新请求）。
    - 确保传递的函数在父组件中被正确地绑定（通常使用箭头函数或在构造函数/`useCallback` 中绑定 `this`），以避免 `this` 指向问题（在类组件中尤其重要）。
    - 为回调函数 prop 命名时，使用 `on` 前缀是良好实践（如 `onChange`, `onClick`, `onSubmit`）。

    ```jsx
    // 父组件
    function ParentComponent() {
      const handleChildEvent = (eventData) => {
        console.log("Received from child:", eventData);
      };

      return <ChildComponent onSomeEvent={handleChildEvent} />;
    }

    // 子组件
    function ChildComponent({ onSomeEvent }) {
      const handleClick = () => {
        onSomeEvent({ message: "Hello from Child!" }); // 调用父组件传递的回调
      };
      return <button onClick={handleClick}>Trigger Event</button>;
    }
    ```

6.  **传递 Promise：**

    - 可以传递 Promise 对象给子组件，通常用于表示异步操作（如 API 请求）。
    - **子组件必须在生命周期钩子（类组件）或 `useEffect`（函数组件）中正确处理 Promise**：调用 `.then()` 处理成功结果，调用 `.catch()` 处理错误。
    - 考虑加载状态和错误状态的处理，通常需要额外的 props（如 `isLoading`, `error`）或状态管理。

    ```jsx
    // 父组件获取数据 (可能是异步的)
    function ParentComponent() {
      const [userDataPromise, setUserDataPromise] = useState(null);

      useEffect(() => {
        const fetchPromise = fetchUserData(); // fetchUserData 返回一个 Promise
        setUserDataPromise(fetchPromise);
      }, []);

      return <ChildComponent userPromise={userDataPromise} />;
    }

    // 子组件处理 Promise
    function ChildComponent({ userPromise }) {
      const [user, setUser] = useState(null);
      const [error, setError] = useState(null);

      useEffect(() => {
        if (userPromise) {
          userPromise
            .then((data) => setUser(data))
            .catch((err) => setError(err));
        }
      }, [userPromise]); // 依赖 userPromise，当父组件传入新 Promise 时重新执行

      if (error) return <div>Error: {error.message}</div>;
      if (!user) return <div>Loading...</div>;
      return <div>User Name: {user.name}</div>;
    }
    ```

### 最佳实践与注意事项

1.  **保持 Props 精简：** 避免传递过多或过于复杂的 props。如果一个组件需要大量 props，可能意味着它试图做太多事情，考虑拆分成更小的组件。
2.  **避免深层嵌套传递：** 如果需要跨越多层组件传递数据（“prop drilling”），考虑使用 Context API 或状态管理库（如 Redux, MobX, Zustand）来简化共享状态的管理。
3.  **默认值：** 可以为可选的 props 设置默认值（在解构时或使用 `defaultProps`）。
4.  **`children` Prop：** 利用 `children` prop 进行内容组合（类似于插槽），使组件更灵活。
5.  **性能：** 避免在父组件的渲染函数中创建新的对象/函数直接作为 prop 传递给子组件（尤其是使用 `React.memo` 优化的子组件），因为这会导致子组件不必要的重新渲染。使用 `useMemo` 和 `useCallback` 来缓存对象和函数。
6.  **文档化：** 清晰地注释或使用类型系统/PropTypes 文档化组件期望的 props，说明其类型、用途、是否必需等。

### 总结

- **命名一致是关键：** 父组件传递的 prop 名称必须与子组件期望的名称**精确匹配**。
- **类型安全是保障：** 使用 TypeScript 或 PropTypes 定义和验证 props 类型。
- **Props 是只读的：** 子组件**绝不能直接修改** props，修改需通过回调函数请求父组件进行。
- **灵活传递类型：** Props 可以传递数据、函数、Promise 等任何 JavaScript 值。
- **解构提升可读性：** 在子组件中使用解构赋值提取 props。
- **回调函数通信：** 使用函数 props（通常以 `on` 开头）实现子到父的通信。
- **Promise 需正确处理：** 传递 Promise 时，子组件必须在生命周期钩子或 `useEffect` 中妥善处理 `.then` 和 `.catch`。
- **遵循最佳实践：** 保持 props 精简、避免深层嵌套、使用默认值、利用 `children`、注意性能、文档化 props。

遵循这些规范能有效地利用 Props 构建清晰、可靠且易于维护的 React 组件层次结构。
