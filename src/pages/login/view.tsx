import { Button, Paper, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import useLoginModel from "./model";

export default function LoginView({
  loginSchema,
}: ReturnType<typeof useLoginModel>) {
  return (
    <Paper
      elevation={3}
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "800px",
        minWidth: "90vw",
        margin: "auto",
        padding: "20px",
        gap: "12px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">Login</Typography>
        <Typography variant="subtitle1">Faça login agora mesmo</Typography>
        <Typography variant="subtitle2">
          MVVM Study + MUI + React Query + Formik + Yup
        </Typography>
      </div>

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched, isValid }) => (
          <Form>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
                marginBottom: "8px",
              }}
            >
              <div>
                <Field
                  as={TextField}
                  label="E-mail"
                  name="email"
                  type="email"
                  fullWidth
                />
                {errors.email && touched.email && <div>{errors.email}</div>}
              </div>
              <div>
                <Field
                  as={TextField}
                  label="Senha"
                  name="password"
                  type="password"
                  fullWidth
                />
                {errors.password && touched.password && (
                  <div>{errors.password}</div>
                )}
              </div>
            </div>
            <Button variant="contained" type="submit" disabled={!isValid}>
              Entrar
            </Button>
          </Form>
        )}
      </Formik>
    </Paper>
  );
}
