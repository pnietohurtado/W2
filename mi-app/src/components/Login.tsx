import React from 'react';
import { Mail, Lock, LogIn, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0d0d12] bg-gradient-to-br from-[#1a0b2e] via-[#0d0d12] to-[#0a0a0f] p-4 font-sans text-white">
            {/* Background decoration */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                {/* Glow effect on border */}
                <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-xl mb-4 shadow-lg shadow-purple-900/40">
                        <LogIn className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Bienvenido</h1>
                    <p className="text-gray-400">Inicia sesión en tu cuenta</p>
                </div>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300 ml-1">Email</label>
                        <div className="relative group">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-purple-400 transition-colors" />
                            <input
                                type="email"
                                placeholder="tu@email.com"
                                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all text-white placeholder:text-gray-600"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between items-center ml-1">
                            <label className="text-sm font-medium text-gray-300">Contraseña</label>
                            <a href="#" className="text-xs text-purple-400 hover:text-purple-300 transition-colors">¿Olvidaste tu contraseña?</a>
                        </div>
                        <div className="relative group">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-purple-400 transition-colors" />
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all text-white placeholder:text-gray-600"
                            />
                        </div>
                    </div>

                    <div className="flex items-center space-x-2 ml-1">
                        <input type="checkbox" id="remember" className="w-4 h-4 rounded border-white/10 bg-white/5 text-purple-600 focus:ring-purple-500/20" />
                        <label htmlFor="remember" className="text-sm text-gray-400">Recordarme</label>
                    </div>

                    <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold py-3 rounded-lg shadow-lg shadow-purple-900/30 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 mt-2">
                        Entrar
                    </button>
                </form>

                <div className="mt-8 relative text-center">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/10"></div>
                    </div>
                    <span className="relative bg-[#1a1129] px-4 text-sm text-gray-500">O continúa con</span>
                </div>

                <div className="mt-6">
                    <button className="w-full bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium py-2.5 rounded-lg transition-all flex items-center justify-center gap-3 active:scale-[0.98]">
                        <Github className="w-5 h-5" />
                        GitHub
                    </button>
                </div>

                <p className="mt-8 text-center text-gray-400 text-sm">
                    ¿No tienes una cuenta?{' '}
                    <Link to="/register" className="text-purple-400 font-semibold hover:text-purple-300 transition-colors">Regístrate gratis</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
