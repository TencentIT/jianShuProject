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
    background : green;
`