import { FormEvent, useState } from 'react';
import * as S from './styles';

import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';

import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';
import Button from '../../components/Button';

import Toast, { toast } from 'react-hot-toast';

function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState('');

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
  }

  async function handleJoinRoom(e: FormEvent) {
    e.preventDefault();

    if (roomCode.trim() === '') return;

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      Toast.error('Esta sala não existe.');

      return;
    }

    if (roomRef.val().endedAt) {
      toast.error('Esta sala foi fechada.');

      return;
    }

    history.push(`/rooms/${roomCode}`);
  }

  return (
    <S.Wrapper>
      <S.Aside>
        <S.IllustrationImg
          src={illustrationImg}
          alt='Ilustração simbolizando perguntas e respostas'
        />
        <S.Title>Crie salas de Q&amp;A ao-vivo</S.Title>
        <S.SubTitle>Tire as dúvidas da sua audiência tem tempo-real</S.SubTitle>
      </S.Aside>

      <S.Main>
        <S.Content>
          <S.LogoImg src={logoImg} alt='letmeask' />

          <S.GoogleButton onClick={handleCreateRoom}>
            <S.GoogleImgIcon src={googleIconImg} alt='Logo da Google' />
            Crie sua sala com o Google
          </S.GoogleButton>

          <S.Separator>ou entre em uma sala</S.Separator>

          <S.Form onSubmit={handleJoinRoom}>
            <S.Input
              type='text'
              placeholder='Digite o código da sala'
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
            />

            <Button>Entrar na sala</Button>
          </S.Form>
        </S.Content>
      </S.Main>
    </S.Wrapper>
  );
}

export default Home;
