import React, { Component } from "react";
// 导入 React 内置组件
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Center from "./views/Center";
import Cinema from "./views/Cinema";
import File from "./views/File";

export default class AppRouter extends Component {
  render() {
    return (
      <>
        <HashRouter>
          {/* 
            react-router-dom 6  
            注册路由
            1. 语法的变化：Route 组件的 element 属性值为对应的组件  component={About} 变为 element={<About/>}等。 
            2. 内置组件的变化：移除<Switch/> ，新增 <Routes/>等
            3. 必须用 Routes 组件进行包裹
            4. caseSensitive 严格区分大小写
          */}
          <Routes>
            <Route path="/file" caseSensitive element={<File />}></Route>
            <Route path="/cinema" element={<Cinema />}></Route>
            <Route path="/center" element={<Center />}></Route>
            {/* 
              路由重定向 
              作用：只要<Navigate>组件被渲染，就会修改路径，切换视图。
              <Route path='/' element={<Navigate to='/home '/>}></Route> 
            */}
            <Route path="/" element={<Navigate to="/center" />}></Route>
          </Routes>
        </HashRouter>
      </>
    );
  }
}
