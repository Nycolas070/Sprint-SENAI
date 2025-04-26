import React from 'react';
import { Table, Button, Image } from 'react-bootstrap';

const ExercicioList = ({ exercicios, onEdit, onDelete }) => {
  return (
    <div className="mt-4">
      <h4 className="mb-3">Lista de Exercícios</h4>
      <Table
        bordered
        hover
        responsive
        className="text-center align-middle table-custom"
      >
        <thead className="table-dark">
          <tr>
            <th>Nome</th>
            <th>Imagem</th>
            <th>Séries</th>
            <th>Repetições</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {exercicios.map((ex) => (
            <tr key={ex.id}>
              <td>{ex.nome}</td>
              <td>
                {ex.imagem && (
                  <Image
                    src={ex.imagem}
                    alt={ex.nome}
                    height={60}
                    rounded
                    style={{ backgroundColor: '#f8f9fa', padding: '4px' }}
                  />
                )}
              </td>
              <td>{ex.series}</td>
              <td>{ex.repeticoes}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  onClick={() => onEdit(ex)}
                  className="me-2"
                >
                  Editar
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => onDelete(ex.id)}
                >
                  Excluir
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ExercicioList;
