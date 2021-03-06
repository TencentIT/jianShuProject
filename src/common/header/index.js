import React  from 'react'
import {HeaderWrapper , Logo , Nav , NavItem , NavSearch ,Addition , Button , SearchWrapper} from './style'
import { CSSTransition } from 'react-transition-group';
import {connect} from  'react-redux'

const Header  = (props) => {
   return (
        <HeaderWrapper>
            <Logo />
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                <NavItem className='right'>登录</NavItem>
                <NavItem className='right'>
                    <span className="iconfont">&#xe636;</span>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in = {props.focused}
                        timeout={200}
                        classNames='slide'
                    >
                        <NavSearch
                            className = {props.focused ? 'focused' : '' }
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}
                        ></NavSearch>
                    </CSSTransition>
                
                    <span className = {props.focused ? 'focused iconfont' : 'iconfont'}>&#xe609;</span>
                </SearchWrapper>
                
            </Nav>
            <Addition>
                <Button className='writting'>
                    <span className="iconfont">&#xe6a4;</span>
                    写文章
                </Button>
                <Button className='reg'>注册</Button>
            </Addition>
        </HeaderWrapper>
   )
}

const mapStateToProps = (state) => {
    return {
        focused : state.focused
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            const action = {
                type : 'search_focus'
            }
            dispatch(action)
        },
        handleInputBlur() {
            const action = {
                type : 'search_blur'
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);