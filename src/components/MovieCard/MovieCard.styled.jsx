import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px 20px;
  display: flex;
  align-items: center;
  gap: 40px;
  border-bottom: 1px solid ${p => p.theme.colors.focusColor};
`;

export const DetailsBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  padding-bottom: 40px;
  font-size: 50px;
  color: ${p => p.theme.colors.focusColor};
`;

export const Text = styled.p`
  font-size: 20px;
  padding-bottom: 20px;
  padding-right: 40px;
`;

export const GenresBox = styled.div`
  display: flex;
  align-iems: center;
  gap: 10px;
  font-size: 20px;
`;

export const GenresList = styled.ul`
  display: flex;
  gap: 10px;
`;
