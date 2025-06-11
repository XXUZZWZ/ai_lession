## React 避坑指南：如何正确获取自定义组件的 DOM 引用？

在使用 React 自定义组件时，你是否遇到过这样的报错？

```bash
TypeError: Cannot read properties of null
```

当你试图通过 `ref` 直接访问自定义组件的 DOM 节点时，这个错误就会不期而至。今天我们就来彻底解决这个高频问题！

---

### 问题根源：组件封装的黑盒效应

React 自定义组件默认不会暴露其内部 DOM 结构。当你这样操作时：

```jsx
const inputRef = useRef(null);
return <MyInput ref={inputRef} />;
```

`inputRef.current` 会始终为 `null`，因为 `ref` 被绑定到了组件实例而非内部 DOM 节点。

---

### 解决方案一：官方推荐方案（forwardRef + useImperativeHandle）

**这是 React 官方推荐的安全访问方式**：

```jsx
import { forwardRef, useRef, useImperativeHandle } from 'react';

const MyInput = forwardRef(({ value, onChange }, ref) => {
  const innerRef = useRef(null);
  
  // 精确控制暴露的 DOM 方法
  useImperativeHandle(ref, () => ({
    focus: () => innerRef.current.focus(),
    getBoundingRect: () => innerRef.current.getBoundingClientRect(),
    // 暴露其他必要方法...
  }));

  return (
    <input
      ref={innerRef}
      value={value}
      onChange={onChange}
    />
  );
});
```

**父组件调用示例**：
```jsx
function LoginForm() {
  const emailRef = useRef(null);

  useEffect(() => {
    // 安全访问子组件DOM方法
    emailRef.current.focus(); 
  }, []);

  return <MyInput ref={emailRef} />;
}
```

#### 优势：
- ✅ 精确控制暴露的 API
- ✅ 避免直接暴露 DOM 节点，提升安全性
- ✅ 符合 React 官方设计模式

---

### 解决方案二：自定义 Ref Prop（快速方案）

对于简单场景，可通过特殊命名的 prop 直接传递 ref：

```jsx
// 自定义组件
function MyInput({ value, onChange, inputRef }) {
  return (
    <input
      ref={inputRef}
      value={value}
      onChange={onChange}
    />
  );
}

// 父组件
function SearchBar() {
  const searchInputRef = useRef(null);
  
  const handleSearch = () => {
    console.log(searchInputRef.current.value);
  };

  return (
    <MyInput 
      inputRef={searchInputRef} 
      onChange={handleSearch}
    />
  );
}
```

#### 适用场景：
- 🚀 快速原型开发
- 🔧 简单组件内部结构
- ⚠️ 注意：需团队统一命名规范（如 `inputRef`/`containerRef`）

---

### 方案对比指南

| **特性**               | `forwardRef` 方案          | 自定义 Prop 方案       |
|------------------------|---------------------------|-----------------------|
| **React 官方推荐**     | ✅                        | ❌                    |
| **精确控制暴露内容**   | ✅ 通过 `useImperativeHandle` | ❌ 直接暴露整个节点    |
| **TypeScript 支持**    | ✅ 完善                    | ⚠️ 需额外类型定义      |
| **组件封装性**         | ✅ 良好                    | ⚠️ 破坏封装边界        |
| **学习成本**           | ⚠️ 较高                    | ✅ 简单直观           |

---

### 最佳实践建议

1. **优先使用 forwardRef 方案** - 尤其组件库开发
2. **避免过度暴露** - 通过 `useImperativeHandle` 只暴露必要方法
3. **统一命名规范** - 若用自定义 prop 方案，团队统一前缀如 `xxxRef`
4. **TypeScript 增强** - 为暴露的方法定义清晰接口：

```ts
export type InputHandle = {
  focus: () => void;
  getValue: () => string;
};

const MyInput = forwardRef<InputHandle, Props>((props, ref) => {
  // ...
});
```

> 💡 经验法则：当组件可能被第三方使用时，必须使用 forwardRef 方案！

---

通过合理使用 ref 转发机制，既能保持组件的封装性，又能满足必要的 DOM 操作需求。现在就去检查你的组件，告别 `null` 报错吧！