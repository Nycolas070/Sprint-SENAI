import React, { useState, useEffect } from 'react';
import { Container, Alert, Button, Modal } from 'react-bootstrap';
import ExercicioForm from './components/ExercicioForm';
import ExercicioList from './components/ExercicioList';
import {
  listarExercicios,
  criarExercicio,
  atualizarExercicio,
  deletarExercicio,
} from './services/exercicioService';

// Importando as imagens
import bordaImagem from './images/hq720-removebg-preview 7.png';

const App = () => {
  const [exercicios, setExercicios] = useState([]);
  const [exercicioAtual, setExercicioAtual] = useState(null);
  const [mensagem, setMensagem] = useState('');
  const [mostrarForm, setMostrarForm] = useState(false);

  const carregarExercicios = async () => {
    const response = await listarExercicios();
    setExercicios(response.data);
  };

  useEffect(() => {
    carregarExercicios();
  }, []);

  const handleSubmit = async (exercicio) => {
    if (exercicioAtual) {
      await atualizarExercicio(exercicioAtual.id, exercicio);
      setMensagem('Exercício atualizado com sucesso!');
    } else {
      await criarExercicio(exercicio);
      setMensagem('Exercício criado com sucesso!');
    }
    setExercicioAtual(null);
    setMostrarForm(false);
    carregarExercicios();
  };

  const handleEdit = (exercicio) => {
    setExercicioAtual(exercicio);
    setMostrarForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Deseja realmente excluir este exercício?')) {
      await deletarExercicio(id);
      setMensagem('Exercício deletado com sucesso!');
      carregarExercicios();
    }
  };

  const handleClose = () => {
    setMostrarForm(false);
    setExercicioAtual(null);
  };

  return (
    <>
      {/* Header fixo com título e botão */}
      <header className="app-header">
        <Container className="d-flex justify-content-between align-items-center py-3">
          <h2 className="mb-0">Gerenciador de Exercícios</h2>
          <Button
            onClick={() => {
              setExercicioAtual(null);
              setMostrarForm(true);
            }}
          >
            Adicionar Exercício
          </Button>
        </Container>
      </header>

      {/* Imagens nas bordas abaixo do header */}
      <img src={bordaImagem} alt="Borda" className="borda-imagem topo-esquerda" />
      <img src={bordaImagem} alt="Borda" className="borda-imagem topo-direita" />
      <img src={bordaImagem} alt="Borda" className="borda-imagem base-esquerda" />
      <img src={bordaImagem} alt="Borda" className="borda-imagem base-direita" />

      <Container className="mt-5 pt-5"> {/* Adicionando margem superior extra (pt-5) */}
        {/* Alerta com botão de fechar */}
        {mensagem && (
          <Alert
            variant="success"
            dismissible
            onClose={() => setMensagem('')} // Fechar o alerta ao clicar no X
          >
            {mensagem}
          </Alert>
        )}

        <ExercicioList
          exercicios={exercicios}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        <Modal show={mostrarForm} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              {exercicioAtual ? 'Editar Exercício' : 'Adicionar Exercício'}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ExercicioForm onSubmit={handleSubmit} exercicioAtual={exercicioAtual} />
          </Modal.Body>
        </Modal>
      </Container>
    </>
  );
};

export default App;
