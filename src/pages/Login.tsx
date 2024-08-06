import { type FormEvent } from 'react';
import loginImg from '../assets/img/login-image.jpg';
import { Input } from '../components/UI/Input.tsx';
import { Button } from '../components/UI/Button';

export default function Login() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section className="flex">
      <div className="min-h-screen hidden sm:block sm:w-1/3 lg:w-[60%] 2xl:w-[73%]">
        <img
          src={loginImg}
          alt="sala com uma mesa redonda e três cadeiras"
          className="object-cover w-full h-full"
          width={1395}
          height={945}
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-primary-light min-h-screen flex flex-col justify-center p-6 sm:p-10 w-full sm:w-2/3 lg:w-[40%] 2xl:w-[27%]"
      >
        <h2 className="text-4xl py-4">Conta</h2>
        <Input id="email" label="E-mail" type="email" />
        <Input id="password" label="Password" type="password" />
        <Button className="uppercase my-6">Login</Button>
      </form>
    </section>
  );
}
