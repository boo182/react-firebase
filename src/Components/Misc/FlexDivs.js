import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
`;
export const CenteredAlignDiv = styled(Flex)`
  align-items: center;
`;

export const CenteredJustifiedDiv = styled(Flex)`
  justify-content: center;
`;

export const CenteredDiv = styled(CenteredAlignDiv)`
  justify-content: center;
`;

export const CustomFlex = styled(Flex)`
  justify-content: ${({ justify }) => justify || 'flex-start'}
  align-items: ${({ align }) => align || 'center'}
`;
