import styled from 'styled-components';

export const CastContainer = styled.div`
  padding: 20px;
`;

export const CastList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

export const CastItem = styled.li`
  display: inline-block;
  width: 100%;
  max-width: 150px;

  h3 {
    font-size: 16px;
  }

  p {
    font-size: 13px;
  }
`;

export const ErrorInfo = styled.p`
  font-size: 20px;
`;
