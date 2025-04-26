import React, { useState, useEffect } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

const ExercicioForm = ({ onSubmit, exercicioAtual }) => {
  const [exercicio, setExercicio] = useState({
    nome: '',
    imagem: '',
    series: '',
    repeticoes: ''
  });

  useEffect(() => {
    if (exercicioAtual) {
      setExercicio(exercicioAtual);
    } else {
      setExercicio({
        nome: '',
        imagem: '',
        series: '',
        repeticoes: ''
      });
    }
  }, [exercicioAtual]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExercicio({ ...exercicio, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(exercicio);
    setExercicio({ nome: '', imagem: '', series: '', repeticoes: '' });
  };

  return (
    <Card>
      <Card.Body>
        <h4>{exercicioAtual ? 'Editar' : 'Adicionar'} Exercício</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              name="nome"
              value={exercicio.nome}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mt-2">
            <Form.Label>Imagem (URL)</Form.Label>
            <Form.Control
              type="text"
              name="imagem"
              value={exercicio.imagem}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mt-2">
            <Form.Label>Séries</Form.Label>
            <Form.Control
              type="text"
              name="series"
              value={exercicio.series}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mt-2">
            <Form.Label>Repetições</Form.Label>
            <Form.Control
              type="text"
              name="repeticoes"
              value={exercicio.repeticoes}
              onChange={handleChange}
            />
          </Form.Group>

          <Button type="submit" className="mt-3">
            {exercicioAtual ? 'Atualizar' : 'Adicionar'}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default ExercicioForm;
