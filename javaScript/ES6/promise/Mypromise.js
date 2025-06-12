const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
  #state = PENDING;
  #result = undefined;
  #thenables = [];
  constructor(executor) {
    const resolve = (data) => {
      this.#changeState(FULFILLED, data);
    };
    const reject = (err) => {
      this.#changeState(REJECTED, err);
    };
    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }
  #changeState(state, result) {
    if (this.#state !== PENDING) return;
    this.#state = state;
    this.#result = result;
    this.#run();
  //  console.log(this.#state, this.#result);
  }

  #handleCallback(callback, resolve, reject) {
    if (typeof callback !== "function") {
      // 状态穿透
      queueMicrotask(() => {
        if (this.#state === FULFILLED) {
          resolve(this.#result);
        } else {
          reject(this.#result);
        }
      });
      return;
    }
    queueMicrotask(() => {
      try {
        const result = callback(this.#result);
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  }
  #run() {
    if (this.#state === PENDING) return;
    while (this.#thenables.length) {
      const { onFulfilled, onRejected, resolve, reject } =
        this.#thenables.shift();

      if (this.#state === FULFILLED) {
        // 执行onFulfilled
        this.#handleCallback(onFulfilled, resolve, reject);
      } else {
        // 执行onRejected
        this.#handleCallback(onRejected, resolve, reject);
      }
    }
  }
  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      this.#thenables.push({
        onFulfilled,
        onRejected,
        resolve,
        reject,
      });
      // 启动队列处理
      this.#run();
    });
  }
}

const p = new MyPromise((resolve, reject) => {
  reject(1);
  resolve(2);
});

const p1 = new MyPromise((resolve, reject) => {
  resolve(2);
  reject(1);
});
const p2 = new MyPromise((resolve, reject) => {
  resolve(2);
  reject(1);
});
p1.then(
  (data) => {
    console.log(data);
  },
  (err) => {
    console.log(err);
  }
);
// 支持链式调用
p2.then(
  (data) => {
    return data + 1;
  },
  (err) => {
    return "err";
  }
).then(
  (data) => {
    console.log(data);
  },
  (err) => {
    console.log(err);
  }
);
