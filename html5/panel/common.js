const panels = document.querySelectorAll(".fz-panel");
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClass();
    //模块化;
    panel.classList.add("fz-panel_active");
  });
});
function removeActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove("fz-panel_active");
  });
}

// const panels = document.querySelectorAll('.fz-panel');
// panels.forEach(panel => {
//     // JS 是事件机制的语言
//     // 每一个元素上监听
//     panel.addEventListener('click', () => {
//         console.log('biubiubiu');
//         removeActiveClasses(); //模块化
//         panel.classList.add("fz-panel_active");
//     })
// })

// function removeActiveClasses() {
//     panels.forEach(panel => {
//         panel.classList.remove('fz-panel_active');
//     })
// }
