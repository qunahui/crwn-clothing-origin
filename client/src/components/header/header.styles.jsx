import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  padding: 40px;
  display: flex;
  justify-content: space-between;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  transform: translateY(-20px);
`;

export const OptionContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;
