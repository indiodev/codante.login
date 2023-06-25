import { zodResolver } from '@hookform/resolvers/zod';
import type { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Input } from './Input';

const FormSchema = z.object({
	email: z
		.string()
		.nonempty({
			message: 'E-mail é obrigatório',
		})
		.email({
			message: 'Informe um e-mail válido',
		}),
	password: z
		.string()
		.nonempty({
			message: 'Senha é obrigatória',
		})
		.min(8, {
			message: 'A senha deve ter no mínimo 8 caracteres',
		}),
});

type FormType = z.infer<typeof FormSchema>;

export function Form(): ReactElement {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<FormType>({
		mode: 'all',
		resolver: zodResolver(FormSchema),
	});

	function login(data: FormType): void {
		console.log(data);
	}

	return (
		<div className="rounded-br-[2rem] rounded-tr-[2rem] w-full lg:max-w-[31.25rem] text-gray-200  h-full flex justify-center py-[5rem] px-[3.75rem] rounded-tl-[2rem] rounded-bl-[2rem]">
			<form
				onSubmit={handleSubmit(login)}
				className="flex flex-col h-full max-w-[21.9762rem] w-full justify-center"
			>
				<h1 className="text-5xl font-bold pb-[3.75rem]">
					Faça seu login
					<span className="ml-1 inline-block bg-gradient-to-tr from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] w-3 h-3 rounded-full"></span>
				</h1>

				<div className="flex flex-col">
					<Input
						type="email"
						label="E-mail"
						helperText={errors.email?.message}
						{...register('email')}
					/>

					<Input
						type="password"
						label="Senha"
						autoComplete="password"
						helperText={errors.password?.message}
						{...register('password')}
					/>
				</div>

				<a
					href="#"
					className="text-sm text-right text-gray-400 hover:underline pt-5 pb-[2.1875rem]"
				>
					Esqueci minha senha
				</a>

				<button className="font-bold text-2xl h-[3.3125rem] rounded-[14px] bg-gradient-to-bl from-[#4158D0] via-[#C850C0] to-[#FFCC70] hover:opacity-80">
					Entrar
				</button>

				<a
					href="#"
					className="pt-[2.2344rem] text-sm text-center text-gray-400 hover:underline"
				>
					Ainda não tenho uma conta
				</a>
			</form>
		</div>
	);
}
