import * as S from './styles';
import Modal from 'react-modal';

import Button from '../Button';

Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

type CustomModalProps = {
  isOpen: boolean;
  setOpenModal: Function;
  confirmFn: Function;
  icon: string;
  title: string;
  text: string;
  confirmButtonText: string;
};

function CustomModal({
  isOpen,
  setOpenModal,
  confirmFn,
  icon,
  title,
  text,
  confirmButtonText,
}: CustomModalProps) {
  return (
    <Modal isOpen={isOpen} style={customStyles} contentLabel='Modal'>
      <S.Wrapper>
        <S.IconImg src={icon} alt={title} />
        <S.Title>{title}</S.Title>
        <S.Text>{text}</S.Text>

        <S.ButtonsWrapper>
          <Button type='button' onClick={() => setOpenModal(false)}>
            Cancelar
          </Button>
          <Button type='button' onClick={() => confirmFn(true)}>
            {confirmButtonText}
          </Button>
        </S.ButtonsWrapper>
      </S.Wrapper>
    </Modal>
  );
}

export default CustomModal;
