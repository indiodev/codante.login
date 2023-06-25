import { type ReactElement } from 'react';

import { Form } from './components/Form';

export function App(): ReactElement {
	return (
		<section className="flex h-screen w-screen justify-center items-center sm:px-12 bg-gradient-to-br from-[#0E0D10]  via-[#0E0D10] to-[#121216]">
			<div className="w-full h-full sm:max-h-[40.875rem] max-w-[69.125rem] flex rounded-[2rem] bg-[#070709]">
				<Form />
				<div
					className={`w-0 lg:w-full  bg-[url(./assets/bg-login.jpg)] bg-cover shadow-[inset_139px_4px_118px_76px_#070708] opacity-70 rounded-br-[2rem] rounded-tr-[2rem]`}
				></div>
			</div>
		</section>
	);
}
