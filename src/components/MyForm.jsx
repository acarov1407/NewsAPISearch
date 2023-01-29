import useNews from "../hooks/useNews"

const CATEGORIES = [
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Business' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'health', label: 'Health' },
    { value: 'science', label: 'Science' },
    { value: 'sports', label: 'Sports' },
    { value: 'technology', label: 'Technology' }
];


const COUNTRIES = [
    { value: 'ar', label: 'Argentina' },
    { value: 'co', label: 'Colombia' },
    { value: 'mx', label: 'Mexico' },
    { value: 'us', label: 'United States' }
];

function MyForm() {

    const { handleInputData, inputData} = useNews();

    const { category, country } = inputData;

    return (
        <form className="news__form">
            <div className="field">
                <label htmlFor="category" className="news__form-label">Choose a category</label>
                <select
                    className="news__form-select"
                    name="category"
                    id="category"
                    value={category}
                    onChange={handleInputData}>
                    {
                        CATEGORIES.map(_category => (
                            <option
                                value={_category.value}
                                key={_category.value}
                            >
                                {_category.label}
                            </option>
                        ))
                    }
                </select>
            </div>
            <div className="field">
                <label htmlFor="country" className="news__form-label">Choose a country</label>
                <select
                    className="news__form-select"
                    name="country"
                    id="country"
                    value={country}
                    onChange={handleInputData}
                >
                    {
                        COUNTRIES.map(_country => (
                            <option
                                value={_country.value}
                                key={_country.value}
                            >
                                {_country.label}
                            </option>
                        ))
                    }
                </select>
            </div>
        </form>
    )
}

export default MyForm