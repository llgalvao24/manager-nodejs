import * as Yup from 'yup';
import Student from '../models/Students';

function yupValidation() {
  return Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string()
      .email()
      .required(),
    age: Yup.number()
      .required()
      .positive()
      .integer(),
    weight: Yup.number().positive(),
    height: Yup.number().positive(),
  });
}

class StudentController {
  async store(req, res) {
    const schema = yupValidation();

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const studentExists = await Student.findOne({
      where: { email: req.body.email },
    });

    if (studentExists) {
      return res.status(400).json({ error: 'User already exists!' });
    }

    const student = await Student.create(req.body);

    return res.json(student);
  }

  async update(req, res) {
    const schema = yupValidation();

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    // json enviado pelo user
    const { email } = req.body;

    // busca usuário por Id no banco
    const student = await Student.findByPk(req.userId);

    // verificação de email
    if (email !== student.email) {
      const studentExists = await Student.findOne({ where: { email } });

      if (studentExists) {
        return res.status(400).json({ error: 'Student already exists!' });
      }
    }

    await student.update(req.body);

    return res.json(student);
  }
}

export default new StudentController();
