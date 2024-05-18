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

    function handleChange(e: h.JSX.TargetedEvent<HTMLInputElement, Event>) {
        const { name, value, files } = e.currentTarget;
        if (name === "cv" && files) {
            setFormData((prev) => ({ ...prev, [name]: files[0] }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    }

    function handleSubmit(e: h.JSX.TargetedEvent<HTMLFormElement, Event>) {
        e.preventDefault();

        // Guardar los datos en el Session Storage
        const savedData = sessionStorage.getItem("formData");
        let formDataArray: FormData[] = [];
        if (savedData) {
            formDataArray = JSON.parse(savedData);
        }
        formDataArray.push(formData);
        sessionStorage.setItem("formData", JSON.stringify(formDataArray));

        // Limpiar el formulario después de enviar
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            cv: null,
        });

        alert("Formulario enviado");
    }

    return (
        <div className="page contact-page">
            <h1 className="title align-center">Contacto</h1>
            <form className="contact-form" onSubmit={handleSubmit}>
                <span className="form-group">
                    <label htmlFor="firstName">Nombres</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        placeholder="Nombres"
                        autoComplete="off"
                        autoFocus
                        tabindex={1}
                    />
                </span>
                <span className="form-group">
                    <label htmlFor="lastName">Apellidos</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        placeholder="Apellidos"
                        autoComplete="off"
                        tabindex={1}
                    />
                </span>
                <span className="form-group">
                    <label htmlFor="email">Correo</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="correo@dominio.com"
                        autoComplete="off"
                        tabindex={1}
                    />
                </span>
                <span className="form-group">
                    <label htmlFor="phone">Teléfono</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+51 999 999 999"
                        tabindex={1}
                        autoComplete="off"
                    />
                </span>
                <span className="form-group">
                    <BackButton />
                    <label htmlFor="cv" className="button rounded">
                        Adjuntar CV
                    </label>
                    <input
                        type="file"
                        id="cv"
                        name="cv"
                        accept=".pdf,.doc,.docx"
                        onChange={handleChange}
                    />
                    <button
                        type="submit"
                        className="button rounded"
                        tabindex={1}
                    >
                        Enviar Postulación
                    </button>
                </span>
            </form>
        </div>
    );
}
