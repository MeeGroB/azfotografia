import React, { useState } from "react"


const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        service: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const formBody = new URLSearchParams();
            Object.entries(formData).forEach(([key, value])=> {
                formBody.append(key, value);
            });

            const response = await fetch('https://readdy.ai/api/form/d4hp1vijg2jl50j1s740' , {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: formBody.toString()
            });

            if(response.ok) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    date: '',
                    service: '',
                    message: ''
                });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    return (
        <section
            id="contact"
            className="py-24 bg-gray-50"
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif mb-4 text-gray-900">
                        Hablemos de Tu Boda
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Cuéntame sobre tu día especial y creemos algo mágico juntos
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <form
                            id="wedding-contact-form"
                            className="space-y-6"
                            onSubmit={handleSubmit}
                        >
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Correo Electrónico
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                        Teléfono
                                    </label>

                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                                        Fecha del evento {""}
                                        <span className="text-primary text-lg">(*)</span>
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        id="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                                        Servicio de Interés
                                    </label>
                                    <select
                                        name="service"
                                        id="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm pr-8"
                                    >
                                        <option value="">Seleccionar...</option>
                                        <option value="wedding">Fotografía de Bodas</option>
                                        <option value="video">Video de Bodas</option>
                                        <option value="prewedding">Sesión Pre Boda</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Cuéntame sobre tu evento
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    maxLength={500}
                                    rows={5}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none text-sm"
                                >

                                </textarea>
                                <p className="text-xs text-gray-500 mt-1">{formData.message.length}/500 caracteres</p>
                            </div>

                            <p className="text-gray-700 text-sm font-medium">
                                *: <span className="text-gray-600">
                                    Si aún no tienes fecha fija para tu boda puedes colocar la fecha tentativa.
                                </span></p>


                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-300 font-medium shadow-lg hover:shadow-xl disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
                            >
                                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                            </button>

                            {submitStatus === 'success' && (
                                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
                                    ¡Mensaje enviado con éxito! Te contactaré pronto.
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
                                    Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
                                </div>
                            )}

                        </form>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact