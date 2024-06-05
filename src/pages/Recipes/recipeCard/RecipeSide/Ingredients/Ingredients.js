import styles from './ingredients.scss'

const imageUrl = 'https://img.spoonacular.com/ingredients_100x100/'

export const Ingredients = ({ingredients}) => {

    return (
        <div className={'ingredients'} style={styles}>
            <h1>Ingredients</h1>

            <div className={'list'} style={styles}>
                {
                    ingredients.map((ingredient, index) => (

                        <div key={ingredient.id + index} className={'item'} style={styles}>
                            <img src={`${imageUrl}${ingredient.image}`} alt={ingredient.name} />
                            <h3>{(ingredient.amount).toFixed(2)} {ingredient.unit} of {ingredient.name}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}