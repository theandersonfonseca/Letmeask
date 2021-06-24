import { FormEvent, useState } from 'react';
import * as S from './styles';

import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';

import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
import Button from '../../components/Button';

function NewRoom() {
  const { user } = useAuth();
  const history = useHistory();
  const [newRoom, setNewRoom] = useState('');

  async function handleCreateRoom(e: FormEvent) {
    e.preventDefault();

    if (newRoom.trim() === '') return;

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    history.push(`/admin/rooms/${firebaseRoom.key}`);
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
          <Link to='/'>
            <S.LogoImg src={logoImg} alt='letmeask' />
          </Link>

          <S.Label>Crie uma nova sala</S.Label>

          {user && (
            <S.UserInfo>
              <S.Avatar src={user.avatar} alt={user.name} />
              <S.AuthorName>{user.name}</S.AuthorName>
            </S.UserInfo>
          )}

          <S.Form onSubmit={handleCreateRoom}>
            <S.Input
              type='text'
              placeholder='Nome da sala'
              onChange={(e) => setNewRoom(e.target.value)}
              value={newRoom}
            />

            <Button>Criar sala</Button>
          </S.Form>

          <S.Call>
            Quer entrar em uma sala já existente?{' '}
            <Link to='/'>clique aqui</Link>
          </S.Call>
        </S.Content>
      </S.Main>
    </S.Wrapper>
  );
}

export default NewRoom;
