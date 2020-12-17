import styled from 'styled-components';
import logoPic from '../../static/logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #ffffff;
`

export const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`

exprot const Nav = styled.div`
  width: 960px;
  margin: 0 auto;
  
`