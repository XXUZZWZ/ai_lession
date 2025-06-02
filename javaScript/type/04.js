//枚举类型，便于分类
/*
枚举类型就像是一个有限的“菜单”，它列出了所有可能的选择，你只能从中挑一个，不能自己随便写别的。
*/
const STATUS = {
  READY: Symbol("ready"),
  RUNNING: Symbol("running"),
  DONE: Symbol("done"),
};

let state = STATUS.READY;
