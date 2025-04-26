const STORAGE_KEY = 'exercicios';

const obterExercicios = () => {
    const dados = localStorage.getItem(STORAGE_KEY);
    return dados ? JSON.parse(dados) : [];
};

const salvarExercicios = (lista) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
};

export const listarExercicios = () => {
    return Promise.resolve({ data: obterExercicios() });
};

export const criarExercicio = (exercicio) => {
    const lista = obterExercicios();
    const novo = { ...exercicio, id: Date.now() };
    lista.push(novo);
    salvarExercicios(lista);
    return Promise.resolve(novo);
};

export const atualizarExercicio = (id, exercicio) => {
    let lista = obterExercicios();
    lista = lista.map((ex) => (ex.id === id ? { ...exercicio, id } : ex));
    salvarExercicios(lista);
    return Promise.resolve();
};

export const deletarExercicio = (id) => {
    const lista = obterExercicios().filter((ex) => ex.id !== id);
    salvarExercicios(lista);
    return Promise.resolve();
};
