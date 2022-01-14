const fs = require('fs/promises');

const TALKERS_FILE_PATH = 'talker.json';
const validToken = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2, 3);

const getAllTalkers = async (_req, res) => {
  const allTalkers = JSON.parse(await fs.readFile(TALKERS_FILE_PATH));
  res.status(200).json(allTalkers);
};

const login = (_req, res) => {
  res.status(200).json({
    token: validToken,
  });
};

const postTalker = async (req, res) => {
  const allTalkers = JSON.parse(await fs.readFile(TALKERS_FILE_PATH));
  const allIds = allTalkers.map((talker) => talker.id);
  const maxId = Math.max(...allIds);
  const talkerWithId = { ...req.body, id: maxId + 1 };
  await fs.writeFile('./talker.json', JSON.stringify([...allTalkers, talkerWithId]));
  res.status(201).json(talkerWithId);
};

const putTalker = async (req, res) => {
  const allTalkers = JSON.parse(await fs.readFile(TALKERS_FILE_PATH));
  const { id } = req.params;
  const updatedTalkers = allTalkers.map((talker) => {
    if (talker.id === parseInt(id, 10)) {
      return { ...talker, ...req.body };
    }
    return talker;
  });
  const updatedTalker = updatedTalkers.find((talker) => talker.id === parseInt(id, 10));
  await fs.writeFile('./talker.json', JSON.stringify(updatedTalkers));
  res.status(200).json(updatedTalker);
};

const deleteTalker = async (req, res) => {
  const allTalkers = JSON.parse(await fs.readFile(TALKERS_FILE_PATH));
  const { id } = req.params;
  const talkersAfterDeletion = allTalkers.map((talker) => {
    if (talker.id === parseInt(id, 10)) {
      return null;
    }
    return talker;
  });
  await fs.writeFile('./talker.json', JSON.stringify(talkersAfterDeletion));
  res.status(200).json({ message: 'Pessoa palestrante deletada com sucesso' });
};

const searchTalker = async (req, res) => {
  const allTalkers = JSON.parse(await fs.readFile(TALKERS_FILE_PATH));
  const { q } = req.query;
  const searchedTalker = allTalkers.filter((talker) => talker.name.includes(q));

  if (!q) {
    return res.status(200).json(allTalkers);
  }
  
  res.status(200).json(searchedTalker);
};

const getTalkerById = async (req, res) => {
  const { id } = req.params;
  const allTalkers = JSON.parse(await fs.readFile(TALKERS_FILE_PATH));
  const wantedTalker = allTalkers.find((talker) => talker.id === parseInt(id, 10));

  if (!wantedTalker) {
    return res.status(404).json({
      message: 'Pessoa palestrante não encontrada',
    });
  } 

  res.status(200).json(wantedTalker);
};

module.exports = {
  getAllTalkers,
  login,
  postTalker,
  putTalker,
  deleteTalker,
  searchTalker,
  getTalkerById,
  validToken,
};
