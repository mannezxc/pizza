"use client"

import styled, {css, IStyledComponent} from 'styled-components'

type FlexType = {
    vertical?: boolean
    justify?: 'center' | 'start' | 'end' | 'space-between'
    align?: 'center' | 'start' | 'end'
}

export const Flex = styled.div<FlexType>`
  display: flex;
  
  ${props => props.vertical && css`
    flex-direction: column;
  `}
  
  ${props => props.justify && css`
    justify-content: ${props.justify};
  `}
  ${props => props.align && css`
    text-align: start;
    align-items: ${props.align};
  `}
  
  
`