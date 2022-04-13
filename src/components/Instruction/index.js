import { useContext } from 'react';
import { LanguageContext } from '../../contexts/language';
import * as S from './styles';

function Instruction() {
  const { language } = useContext(LanguageContext)
   
  return (
    <>
      {
        language === "pt-br" ? 
        (
          <S.Container>
            Organize-se com o <span>myTasks</span>, a sua lista dinâmica que irá lhe ajudar com os estudos e demais tarefas do dia a dia. Altere a ordem da sua lista <span>arrastando</span> e <span>soltando</span> os itens entre eles. Pressione <span>enter</span> ou clique em <span>adicionar</span> para incluir um novo item.
          </S.Container>
          ) : language === "en" ?
        (
          <S.Container>
            Get organized with <span>myTasks</span>, your dynamic to-do-list that will help you with your studies and everyday tasks. Change the order of your list by <span>dragging</span> and <span>dropping</span> the items among them. Press <span>enter</span> or hit <span>add</span> to add a new item.
          </S.Container>
        ) : (
          <S.Container>
            Organízate con <span>myTasks</span>, tu lista dinámica que te ayudará con tus estudios y otras tareas cotidianas. Cambie el orden de su lista <span>arrastrando</span> y <span>soltando</span> los elementos entre ellos. Presiona <span>enter</span> o haz un clic en <span>añadir</span> para agregar un nuevo elemento.
        </S.Container>
        )
      }
    </>
  );
}

export default Instruction;