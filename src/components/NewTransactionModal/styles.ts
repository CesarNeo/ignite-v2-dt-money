import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;

  background-color: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  padding: 2.5rem 3rem;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 6px;
  background-color: ${({ theme }) => theme['gray-800']};

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      padding: 1rem;

      border-radius: 6px;
      border: 0;
      background-color: ${({ theme }) => theme['gray-900']};
      color: ${({ theme }) => theme['gray-300']};

      &::placeholder {
        color: ${({ theme }) => theme['gray-500']};
      }
    }

    button[type='submit'] {
      height: 58px;
      padding: 0 1.25rem;
      margin-top: 1.5rem;

      border: 0;
      background-color: ${({ theme }) => theme['green-500']};
      color: ${({ theme }) => theme.white};
      font-weight: bold;
      border-radius: 6px;
      cursor: pointer;

      &:hover {
        background-color: ${({ theme }) => theme['green-700']};

        transition: background-color 0.2s;
      }
    }
  }
`
export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;

  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme['gray-500']};
`
