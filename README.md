1 create-react-app jianshu
2 styled-components 来进行 整个项目的css管理
3 iconfont.css 变成 iconfont.js ，引入 import {createGlobalStyle} from 'styled-components' 在 入口文件 index.js 变成全局的样式
4 input框 调用 react-transition-group  

    import { CSSTransition } from 'react-transition-group';

    <CSSTransition
        in = {this.state.focused} 
        timeout={200} // 这里的200 对应 css transition里面的 .2s 
        classNames='slide' // CSSTransition 里面的 slide 有4个阶段类： 
    >
        <NavSearch
            className = {this.state.focused ? 'focused' : '' }
            onFocus={this.handleInputFocus}
            onBlur={this.handleInputBlur}
        ></NavSearch>
    </CSSTransition>

CSSTransition 里面的 slide 有4个阶段类： 
    .slide-enter { 
        transition : all .2s ease-out;
    }
    .slide-enter-active {
        width:240px;
    }
    .slide-exit{
        transition : all .2s ease-out;
    }
    .slide-exit-active {
        width:160px;
    }

5 引入 redux  框架， react-redux 是在让我们可以在react中用 redux 

    <Provider store={store}> // 可以理解为 Provider 把store里的数据都提供给 内部的组件  Header
        <div> 
           <GlobalStyle/>
          <GlobalStyleIcon/>
          <Header/>
        </div>
      </Provider>
      
6 引入 combineReducers 对 reducer.js 文件进行拆分，分成多个小的 reducer
 import { combineReducers } from 'redux'