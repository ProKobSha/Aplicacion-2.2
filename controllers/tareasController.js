let tareas = []; // almacenamiento temporal

exports.crearTarea = (req, res) => {
  const { titulo, descripcion } = req.body;

  if (!titulo || !descripcion) {
    return res.status(400).json({ error: 'Titulo y descripción son obligatorios' });
  }

  const nuevaTarea = {
    id: tareas.length + 1,
    titulo,
    descripcion
  };

  tareas.push(nuevaTarea);
  res.status(201).json(nuevaTarea);
};
