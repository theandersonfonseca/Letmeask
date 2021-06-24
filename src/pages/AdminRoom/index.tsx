import * as S from './styles';

import { useHistory, useParams } from 'react-router-dom';
import { database } from '../../services/firebase';

import logoImg from '../../assets/images/logo.svg';
import deleteImg from '../../assets/images/delete.svg';
import Button from '../../components/Button';
import RoomCode from '../../components/RoomCode';
import Question from '../../components/Question';

import toast from 'react-hot-toast';

import { useRoom } from '../../hooks/useRoom';

type RoomParams = {
  id: string;
};

function AdminRoom() {
  const history = useHistory();
  const { id: roomId } = useParams<RoomParams>();
  const { questions, title } = useRoom(roomId);

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });

    history.push('/');
    toast.success('Sala encerrada.');
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm('certeza?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
      toast.success('Pergunta removida.');
    }
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.Content>
          <S.LogoImg src={logoImg} alt='Letmeask' />

          <S.ButtonsWrapper>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={handleEndRoom}>
              Encerrar sala
            </Button>
          </S.ButtonsWrapper>
        </S.Content>
      </S.Header>

      <S.Main>
        <S.TitleWrapper>
          <S.Title>{title}</S.Title>

          {questions.length > 0 && (
            <S.QuestionCount>{questions.length} pergunta(s)</S.QuestionCount>
          )}
        </S.TitleWrapper>

        <S.Questions>
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
              >
                <S.DeleteQuestion
                  type='button'
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <S.DeleteQuestionImg src={deleteImg} alt='Remover pergunta' />
                </S.DeleteQuestion>
              </Question>
            );
          })}
        </S.Questions>
      </S.Main>
    </S.Wrapper>
  );
}

export default AdminRoom;
