import * as Yup from "yup";

export default function useLoginModel() {
  const loginSchema = Yup.object().shape({
    email: Yup.string().email("E-mail inválido").required("Obrigatório"),
    password: Yup.string().min(4, "Senha muito curta").required("Obrigatório"),
  });

  return {
    loginSchema,
  };
}
