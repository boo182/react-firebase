//@flow
import React from 'react';
import styled from 'styled-components';
import { withTheme } from '@material-ui/core/styles';
import { CenteredDiv, Flex } from './FlexDivs';
import { domainListColors } from '../../constants';

const getColors = (ref: string) => domainListColors[ref];

const Container = styled(Flex)`
  background-color: ${({ children }) => getColors(children)};
`;
const Wrapper = withTheme(styled(CenteredDiv)`
  height: ${({ theme }) => theme.spacing(2.50)}px;
  padding: 0px 25px 0px 5px;
  background-color: ${({ children }) => getColors(children)};
  font-size: ${({ theme }) => theme.spacing(1.50)}px;
`);

const WhiteSquare = withTheme(styled.div`
  background-color: white;
  height: ${({ theme }) => theme.spacing(1.50)}px;
  width: ${({ theme }) => theme.spacing(1.50)}px;
  position: relative;
  right: 6px;
  top: 4px;
  transform: rotate(45deg);
  z-index: 3,
`);


type Props = {
  children: React.Node,
  width: number, 
  height: Number,
  color: string,
}

const Flag = (props: Props) => {
  return (<Container>
    <Wrapper {...props}>
      {props.children}
   </Wrapper>
   <WhiteSquare />
  </Container>) 
};

export default Flag;