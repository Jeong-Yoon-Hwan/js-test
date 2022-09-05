import makeTag from "./makeTag.js";
import opacityTimer from "./opacityTimer.js";

//* root 선언
const root = document.getElementById('root');
root.innerHTML=`
  ${makeTag("header","<ul></ul>")}
`;

//menu 선언
const menu = document.querySelector("#root > header > ul");
const menuList = ['about','menu-1','menu-2','menu-3','menu-4'];
for(let i=0;i<menuList.length;i++){
  menu.innerHTML+=`${makeTag("li",menuList[i])}`;
}

//메뉴 투명도 함수 사용
opacityTimer(menu);

