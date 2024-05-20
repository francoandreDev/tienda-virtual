import { useState } from "preact/hooks";
import { IProduct } from "../../data/typeProducts";

import "./searchBar.css";

export function SearchBar({
    onSearch,
    products,
}: {
    onSearch: (query: string) => void;
    products: IProduct[];
}) {
    const [query, setQuery] = useState<string>("");
    const [suggestions, setSuggestions] = useState<IProduct[]>([]);

    const handleSearch = (e: Event) => {
        const target = e.target as HTMLInputElement;
        const value = target.value;
        setQuery(value);
        if (value === "") {
            setSuggestions([]);
            onSearch("");
        } else {
            const newSuggestions = generateSuggestions(value);
            setSuggestions(newSuggestions);
        }
    };

    const handleSubmit = () => {
        onSearch(query);
        setSuggestions([]);
    };

    const handleSuggestionClick = (suggestion: string) => {
        setQuery(suggestion);
        onSearch(suggestion);
        setSuggestions([]);
    };

    const generateSuggestions = (value: string): IProduct[] => {
        return products.filter((product) =>
            product.name.toLowerCase().includes(value.toLowerCase())
        );
    };

    return (
        <div className="search-container">
            <input
                type="text"
                value={query}
                onInput={handleSearch}
                placeholder="Buscar labial"
                className="search-input"
            />
            <button onClick={handleSubmit} className="search-button">
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            {suggestions.length > 0 && (
                <ul className="suggestions">
                    {suggestions.map((suggestion, index) => (
                        <li
                            key={index}
                            onClick={() =>
                                handleSuggestionClick(suggestion.name)
                            }
                        >
                            {suggestion.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
