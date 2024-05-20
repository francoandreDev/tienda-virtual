import { useState } from "preact/hooks";
import { ISearchCriteria } from "../../data/typeProducts";

import "./filters.css";

export function Filters({
    onFilterChange,
}: {
    onFilterChange: (criteria: ISearchCriteria) => void;
}) {
    const [criteria, setCriteria] = useState<ISearchCriteria>({});
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const handleChange = (e: Event) => {
        const { name, value, type, checked } = e.target as HTMLInputElement;
        const newCriteria = {
            ...criteria,
            [name]: type === "checkbox" ? checked : value,
        };
        setCriteria(newCriteria);
        onFilterChange(newCriteria);
    };

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="filter-container">
            <i
                class="fa-solid fa-filter filter-icon"
                onClick={toggleVisibility}
            >
                <label className="padding-left">Filtros</label>
            </i>
            <div className={`filters ${isVisible ? "show" : ""}`}>
                <input
                    type="number"
                    name="minPrice"
                    value={criteria.minPrice || ""}
                    onInput={handleChange}
                    placeholder="Min Price"
                    min={0}
                    max={20000}
                />
                <input
                    type="number"
                    name="maxPrice"
                    value={criteria.maxPrice || ""}
                    onInput={handleChange}
                    placeholder="Max Price"
                    min={0}
                    max={20000}
                />
                <input
                    type="number"
                    name="minStock"
                    value={criteria.minStock || ""}
                    onInput={handleChange}
                    placeholder="Min Stock"
                    min={0}
                    max={20000}
                />
                <input
                    type="number"
                    name="maxStock"
                    value={criteria.maxStock || ""}
                    onInput={handleChange}
                    placeholder="Max Stock"
                    min={0}
                    max={20000}
                />
            </div>
        </div>
    );
}
