import styled from 'styled-components/macro'

/**
 * border: ${({ theme }) => '1px solid ' + theme.backgroundInteractive};
 */
export const ToggleWrapper = styled.button<{ width?: string }>`
  display: flex;
  align-items: center;
  width: ${({ width }) => width ?? '100%'};
  padding: 1px;
  background: ${({ theme }) => theme.backgroundInteractive};
  border-radius: 0;
  border: none;
  cursor: pointer;
  outline: none;
`

export const ToggleElement = styled.span<{ isActive?: boolean; fontSize?: string }>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 4px 0.5rem;
  border-radius: 0;
  justify-content: center;
  height: 100%;
  background: ${({ theme, isActive }) => (isActive ? theme.backgroundSurface : 'none')};
  color: ${({ theme, isActive }) => (isActive ? theme.textPrimary : theme.textTertiary)};
  font-size: ${({ fontSize }) => fontSize ?? '1rem'};
  font-weight: 500;
  white-space: nowrap;
  :hover {
    user-select: initial;
    color: ${({ theme, isActive }) => (isActive ? theme.textSecondary : theme.textTertiary)};
  }
`
