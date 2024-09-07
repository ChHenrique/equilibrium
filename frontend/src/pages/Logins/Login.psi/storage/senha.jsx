import { Link } from 'react-router-dom';

export function Password({ passwordError }) {
    return (
        <div className="flex flex-col ml-1.9 p-4 mb-2">
            <label htmlFor="senha" className={`text-gray-600 mb-2 ${passwordError ? 'text-red-500' : ''}`}>
                {passwordError ? passwordError : 'Senha:'}
            </label>
            <div className="grid grid-place-items">
                <input
                    type="password"
                    id="senha"
                    minLength={8}
                    className={`border-b border-black w-full focus:outline-none ${passwordError ? 'border-red-500' : ''}`}
                />
                <div className="w-full flex items-center justify-between mt-2">
                    <Link to="/registro_psi" className="text-[#465A7F] font-satoshi-bold text-[15px] hover:text-[#8cb3ff]">
                        Não tenho conta
                    </Link>
                    <a href="" className="text-[#465A7F] font-satoshi-bold text-[15px] hover:text-[#8cb3ff]">Esqueci minha senha</a>
                </div>
            </div>
        </div>
    );
}
