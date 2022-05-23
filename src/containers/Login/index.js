import React from 'react'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { useUser } from '../../hooks/UserContext'
import apiBrasilFone from "../../services/api";
import { Link } from 'react-router-dom'

import Logo from '../../assets/marca-disparopro.svg'
import Background2 from '../../assets/background2.png'
import Icon from '../../assets/icon-eye.png'

import { Container, ContainerBackgrounds, ContainerItems, H1, Label, Input, Button, SignUp, ErrorMessage , SignUpText } from './styles'

function Login() {

  const {putUserData } = useUser()

  const schema = Yup.object().shape({
    email: Yup.string().email("Digite um e-mail válido").required("O e-mail é obrigatorio"),
    password: Yup.string("Digite uma senha válida").required("A Senha é obrigatoria").min(6,"A senha deve ter pelo menos 6 digitos"),
  })
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });


  const onSubmit = async clientData => {
    const { data } = await toast.promise(
      apiBrasilFone.post('sessions', {
        email: clientData.email,
        password: clientData.password
      }),
      {
        pending: 'Verificando seus dados',
        success: 'Seja vindo(a)',
        error: 'Verifique seu email e senha🤯'
      }

    )
   
    putUserData(data)
   
  }

  return (
    <Container>

      <ContainerBackgrounds>
        <img id="logo" src={Logo} alt="background"></img><br></br>
        <img id="background2" src={Background2} alt="background2"></img>
      </ContainerBackgrounds>

      <ContainerItems>
        <div>
          <H1>Login</H1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>E-mail</Label>
          <Input type="email"  {...register("email")} error={errors.email?.message}></Input>
          <ErrorMessage>{errors.email?.message}</ErrorMessage>


          <Label>Senha</Label>
          <Input type="password" {...register("password")} error={errors.password?.message} ></Input>
          <span className="icon"><img src={Icon} alt="icon-eye"></img></span>
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button type="submit">Conectar</Button>
          </form>
          <SignUp><Link to="/register">Ainda não é cliente Disparo Pro?</Link></SignUp>
          <SignUpText > <Link to="/register">Criar Conta</Link></SignUpText>
        </div>

      </ContainerItems>
    </Container>
  );
}

export default Login;
