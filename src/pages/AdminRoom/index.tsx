import { useEffect, useState } from 'react'
import * as S from './styles'

import { Link, useHistory, useParams } from 'react-router-dom'
import { database } from '../../services/firebase'

import logoImg from '../../assets/images/logo.svg'
import deleteImg from '../../assets/images/delete.svg'
import closeImg from '../../assets/images/close.svg'
import checkImg from '../../assets/images/check.svg'
import answerImg from '../../assets/images/answer.svg'
import Button from '../../components/Button'
import RoomCode from '../../components/RoomCode'
import Question from '../../components/Question'
import CustomModal from '../../components/CustomModal'

import toast from 'react-hot-toast'

import { useRoom } from '../../hooks/useRoom'

type RoomParams = {
  id: string
}

type modalConfigType = {
  confirmFn: (V: boolean) => void
  icon: string
  title: string
  text: string
  confirmButtonText: string
}

const modalConfigs = {
  endRoom: (fn: (V: boolean) => void) => ({
    confirmFn: fn,
    icon: closeImg,
    title: 'Encerrar sala',
    text: 'Tem certeza que você deseja encerrar esta sala?',
    confirmButtonText: 'Sim, encerrar'
  }),

  deleteQuestion: (fn: (V: boolean) => void) => ({
    confirmFn: fn,
    icon: deleteImg,
    title: 'Excluir pergunta',
    text: 'Tem certeza que você deseja excluir esta pergunta?',
    confirmButtonText: 'Sim, excluir'
  })
}

function AdminRoom() {
  const history = useHistory()
  const { id: roomId } = useParams<RoomParams>()
  const { questions, title, isAuthor, isClosed } = useRoom(roomId)
  const [openModal, setOpenModal] = useState(false)
  const [modalConfig, setModalConfig] = useState({} as modalConfigType)

  const [deleteQuestion, setDeleteQuestion] = useState(false)
  const [questionToBeDeleted, setQuestionToBeDeleted] = useState('')

  const [endRoom, setEndRoom] = useState(false)

  async function handleEndRoom() {
    setOpenModal(true)
    setModalConfig(modalConfigs.endRoom(setEndRoom))
  }

  async function handleDeleteQuestion(questionId: string) {
    setOpenModal(true)
    setQuestionToBeDeleted(questionId)
    setModalConfig(modalConfigs.deleteQuestion(setDeleteQuestion))
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true
    })
  }

  async function handleHighlightQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true
    })
  }

  useEffect(() => {
    async function deleteQuestionFn() {
      if (deleteQuestion) {
        await database
          .ref(`rooms/${roomId}/questions/${questionToBeDeleted}`)
          .remove()

        setOpenModal(false)
        setDeleteQuestion(false)
        toast.success('Pergunta removida.')
      }
    }

    deleteQuestionFn()
  }, [questionToBeDeleted, roomId, deleteQuestion])

  useEffect(() => {
    async function endRoomFn() {
      if (endRoom) {
        await database.ref(`rooms/${roomId}`).update({
          endedAt: new Date()
        })

        setOpenModal(false)
        setEndRoom(false)
        history.push('/')
        toast.success('Sala encerrada.')
      }
    }

    endRoomFn()
  }, [roomId, endRoom, history])

  useEffect(() => {
    const hasLoadedRoomInfo = isAuthor !== undefined && isClosed !== undefined

    if (isClosed && hasLoadedRoomInfo) {
      history.push('/')

      return
    }

    if (!isAuthor && hasLoadedRoomInfo) {
      history.push(`/rooms/${roomId}`)
      toast.error('Você não é o administrador desta sala.')
    }
  }, [isAuthor, isClosed, history, roomId])

  return (
    <S.Wrapper>
      {openModal && (
        <CustomModal isOpen setOpenModal={setOpenModal} {...modalConfig} />
      )}

      <S.Header>
        <S.Content>
          <Link to="/">
            <S.LogoImg src={logoImg} alt="Letmeask" />
          </Link>

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
                isAnswered={question.isAnswered}
                isHighlighted={question.isHighlighted}
              >
                {!question.isAnswered && (
                  <>
                    <S.CheckQuestion
                      type="button"
                      onClick={() => handleCheckQuestionAsAnswered(question.id)}
                    >
                      <S.CheckQuestionImg
                        src={checkImg}
                        alt="Destacar pergunta"
                      />
                    </S.CheckQuestion>

                    <S.AnswerQuestion
                      type="button"
                      onClick={() => handleHighlightQuestion(question.id)}
                    >
                      <S.AnswerQuestionImg
                        src={answerImg}
                        alt="Marcar como respondida"
                      />
                    </S.AnswerQuestion>
                  </>
                )}

                <S.DeleteQuestion
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <S.DeleteQuestionImg src={deleteImg} alt="Remover pergunta" />
                </S.DeleteQuestion>
              </Question>
            )
          })}
        </S.Questions>
      </S.Main>
    </S.Wrapper>
  )
}

export default AdminRoom
