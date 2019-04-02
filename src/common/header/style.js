import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper =  styled.div`
    height : 56px;
    border-bottom:1px solid #f0f0f0;
    position : relative;
`
export const Logo = styled.a.attrs({
    href : '/'
})`
    width: 100px;
    height : 56px;
    display:block;
    position: absolute;
    top : 0;
    left: 0;
    background : url(${logoPic});
    background-size: contain;
`

export const Nav = styled.div`
    width:960px;
    height:100%;
    margin: 0 auto;
`
export const NavItem = styled.div`
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    color:#333;
    &.left {
        float:left;
    }
    &.right {
        float:right;
      color:#969696;
      cursor: pointer;
    }
    &.active {
        color:#ea6f5a
    }
`
export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
    width:160px;
    height:38px;
    padding:0 30px 0 20px;
    margin-top:9px;
    margin-left:20px;
    box-sizing:border-box
    border:none;
    outline:none;
    border-radius:19px;
    background:#eee
    font-size:14px;
    color:#666;
`
export const  Addition = styled.div`
    position: absolute;
    right:0;
    top:0;
    height:56px;

`;
export const Button = styled.div`
    float:right;
    margin-top:9px;
    margin-right:20px;
    padding:0 20px;
    line-height:38px;
    border-radius:19px;
    border:1px solid #ec6149;
    font-size:14px;
    cursor:pointer;
    &.reg{
        color:#ec6149
    };
    &.writting{
        color:#fff;
        background:#ec6149
    };
`;