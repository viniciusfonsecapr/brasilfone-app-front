import React from 'react'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

import apiBrasilFone from "../../services/api";
import { Link } from 'react-router-dom'
import ReactPhone from '../../components/PhoneReact';

import Logo from '../../assets/marca-disparopro.svg'
import Background2 from '../../assets/background2.png'


import { Container ,ContainerBackgrounds, ContainerItems, H1, Label, Input ,InputTerms , PolicyPrivacy, TextOffer , InputOffer1 , InputOffer2, LabelRadio ,Button, SignIn, ErrorMessage , SignInText } from './styles'



function Register() {

  

  const schema = Yup.object().shape({
    name: Yup.string().required("Nome é obrigatorio"),
    email: Yup.string().email("Digite um e-mail válido").required("O e-mail é obrigatorio"),
    number: Yup.number().notRequired("Número é obrigatorio").min(5,'Telefone precisa ter no mínimo 11 digitos com estados').max(13,'Informe o número correto'),
    password: Yup.string("Digite uma senha válida").required("A Senha é obrigatoria").min(6,"A senha deve ter pelo menos 6 digitos"),
    confirmPassword: Yup.string("Digite uma senha válida").required("A Senha é obrigatoria").oneOf([Yup.ref('password')], 'As senhas devem ser iguais'),
    terms: Yup.boolean().required("Termos são obrigatorios"),
  })
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });


  const onSubmit = async clientData => {
    try {
      const { status } = await apiBrasilFone.post('users', {
        name: clientData.name,
        email: clientData.email,
        number: clientData.number,
        password: clientData.password,
        terms: clientData.true,
      }, { validateStatus: () => true }
      )
      if(status === 201 || status === 200){
        toast.success('Cadastro criado com sucesso')
      } else if(status === 409 ){
        toast.error('Email já cadastrado! Faça login para acessar')
      }  else {
        throw new Error ()
      }
    
    }
    catch(err){
      toast.error("Falha no sistema! Tente novamente")
    }
    
  }


  return (
    <Container>
       
      <ContainerBackgrounds>
        <img id="logo" src={Logo} alt="background"></img><br></br>
        <img id="background2" src={Background2} alt="background2"></img>
      </ContainerBackgrounds>

      <ContainerItems>
    
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <H1>Cadastre-se</H1>
       
        <Label>Nome</Label>
          <Input type="text"  {...register("name")} error={errors.name?.message}></Input>
          <ErrorMessage>{errors.name?.message}</ErrorMessage>


          <Label>E-mail</Label>
          <Input type="email"  {...register("email")} error={errors.email?.message}></Input>
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

         
          <Label>Número</Label>
          <ReactPhone  id="phone"  type="tel" {...register("number")} error={errors.number?.message}></ReactPhone>
          
          <ErrorMessage>{errors.number?.message}</ErrorMessage>

          <Label>Senha</Label>
          <Input type="password" {...register("password")} error={errors.password?.message} ></Input>
     
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Label>Repetir Senha</Label>
          <Input type="password" {...register("confirmPassword")} error={errors.confirmPassword?.message} />
          {Input.password !== Input.confirmPassword && 
           <div>
           <p>Verifique se as senhas são iguais!</p>
         </div> 
         }
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <InputTerms type="radio" {...register("terms")} error={errors.terms?.message}></InputTerms>
          <PolicyPrivacy>Eu li e aceito a politica de privacidade da Disparo Pro</PolicyPrivacy>
          

          <TextOffer>Quero receber ofertas,novidades, conteúdos informativos e publicitários da Disparo Pro</TextOffer>
          <InputOffer1 type="radio"></InputOffer1><LabelRadio>Sim</LabelRadio>
          
          <InputOffer2 type="radio"></InputOffer2><LabelRadio>Não</LabelRadio>
          
          

          <Button type="submit">Cadastrar</Button>
          
          <SignIn><Link to="/login">Já é cliente Disparo Pro?</Link></SignIn>
          <SignInText > <Link to="/login">Fazer Login</Link></SignInText>
          </form>

      </ContainerItems>
    </Container>
  );
}

export default Register;
