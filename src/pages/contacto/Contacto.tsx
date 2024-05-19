import { h } from "preact";
import { useState } from "preact/hooks";
import { BackButton } from "../../components/exports";

import "./contacto.css";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    cv: File | null;
}

export function ContactoPage() {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        cv: null,
    });

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e: any) => {
        const selectedFile = e.target.files[0];
        setFormData({
            ...formData,
            cv: selectedFile,
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Si necesitas guardar el CV en el sessionStorage, puedes hacerlo aquí
        if (formData.cv) {
            const reader = new FileReader();

            reader.onload = () => {
                const base64File = reader.result?.toString().split(",")[1];
                if (base64File) {
                    const formDataWithCV = {
                        ...formData,
                        cv: base64File,
                    };
                    sessionStorage.setItem(
                        "formData",
                        JSON.stringify(formDataWithCV)
                    );
                }
            };

            reader.readAsDataURL(formData.cv);
        }
        alert("Gracias por contactarnos!");
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            cv: null,
        });
    };

    return (
        <div className="page contact-page">
            <h1 className="title align-center">Contacto</h1>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">Nombres</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        placeholder="Nombres"
                        autoComplete="off"
                        autoFocus
                        tabindex={1}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Apellidos</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        placeholder="Apellidos"
                        autoComplete="off"
                        tabindex={1}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="correo@dominio.com"
                        autoComplete="off"
                        tabindex={1}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Teléfono</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+51 999 999 999"
                        tabindex={1}
                        autoComplete="off"
                    />
                </div>
                <div className="form-group file-input-container">
                    <label htmlFor="cv" className="file-input-label">
                        Adjuntar CV
                    </label>
                    <input
                        type="file"
                        id="cv"
                        name="cv"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="file-input"
                        required
                        tabindex={1}
                    />
                </div>

                <div className="form-group">
                    <BackButton />
                    <button
                        type="submit"
                        className="button rounded"
                        tabindex={6}
                    >
                        Enviar Postulación
                    </button>
                </div>
            </form>
        </div>
    );
}
