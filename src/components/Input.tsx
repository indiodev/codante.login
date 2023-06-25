/* eslint-disable react/display-name */
import { forwardRef, useId, type InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ label, type = 'text', name = '', helperText, ...rest }, ref) => {
		const inputId = useId();

		const hasError = !!helperText;

		const focus = hasError ? 'bg-red-500' : 'bg-gradient-to-bl';
		const background = hasError ? 'bg-red-500' : 'bg-transparent';
		const showError = hasError ? 'visible' : 'invisible';

		return (
			<div className="flex flex-col gap-1">
				<label
					className="text-sm text-gray-400"
					htmlFor={inputId}
				>
					{label}
				</label>
				<div
					className={`w-full ${background} focus-within:${focus} from-[#4158D0] via-[#C850C0] to-[#FFCC70] p-[1px] rounded-[.9375rem]  h-[3.4337rem]`}
				>
					<input
						id={inputId}
						type={type}
						name={name}
						ref={ref}
						{...rest}
						autoComplete="off"
						className="w-full h-full rounded-[.9375rem] border border-transparent outline-none bg-[#111112] px-2"
					/>
				</div>
				<span
					className={`text-right pr-1 text-[0.8rem] text-red-500 ${showError}`}
				>
					* {helperText}
				</span>
			</div>
		);
	},
);
