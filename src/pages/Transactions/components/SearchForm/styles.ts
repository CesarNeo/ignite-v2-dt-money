import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    padding: 1rem;

    border-radius: 6px;
    border: 0;
    background-color: ${({ theme }) => theme['gray-900']};
    color: ${({ theme }) => theme['gray-300']};

    &::placeholder {
      color: ${({ theme }) => theme['gray-500']};
    }
  }

  button {
    padding: 1rem;

    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 1px solid ${({ theme }) => theme['green-300']};
    background: transparent;
    color: ${({ theme }) => theme['green-300']};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      border-color: ${({ theme }) => theme['green-500']};
      background-color: ${({ theme }) => theme['green-500']};
      color: ${({ theme }) => theme.white};

      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`
