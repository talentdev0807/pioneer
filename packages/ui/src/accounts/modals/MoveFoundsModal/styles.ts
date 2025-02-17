import styled from 'styled-components'

import { BorderRad, Colors, Sizes } from '@/common/constants'

export const MemberRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  width: 100%;
  min-height: ${Sizes.accountHeight};
  max-height: ${Sizes.accountHeight};
  padding: 8px 16px;
  border: 1px solid ${Colors.Black[300]};
  border-bottom: 0;
  border-radius: ${BorderRad.s};
  background-color: ${Colors.White};

  &:last-child {
    border-bottom: 1px solid ${Colors.Black[300]};
  }
`

export const ModalBody = styled.div`
  padding: 24px 24px 24px;
  border-top: 1px solid ${Colors.Black[200]};
  border-bottom: 1px solid ${Colors.Black[200]};
`

export const AccountLocksWrapper = styled.div`
  text-align: left;
`

export const InlineLockIconWrapper = styled.div`
  display: inline-block;
  width: fit-content;
  height: fit-content;
  margin-left: 8px;
`
