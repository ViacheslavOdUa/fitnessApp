import s from './steps.scss'
export const Steps = ({steps}) => {
    return (
        <div className={'steps'} style={s}>
           <h2>Steps</h2>

            <ol className={'list'}>
                {
                    steps.map(step => (
                        <li key={step.number}>{step.step}</li>
                    ))
                }
            </ol>

        </div>
    )
}
