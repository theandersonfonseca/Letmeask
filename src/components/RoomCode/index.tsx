import * as S from './styles';

import copyImg from '../../assets/images/copy.svg';

import toast from 'react-hot-toast';

type RoomCodeProps = {
  code: string;
};

function RoomCode({ code }: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(code);

    toast.success('Código copiado');
  }

  return (
    <S.Wrapper onClick={copyRoomCodeToClipboard}>
      <S.Content>
        <S.CopyImg src={copyImg} alt='Copy room code' />
      </S.Content>

      <S.Code>Sala #{code}</S.Code>
    </S.Wrapper>
  );
}

export default RoomCode;
