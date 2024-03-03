import Day from './mood_day'
export default function Week () {
    return (
        <div className="week">
            { [...Array(7)].map(() => (
                <Day />
            ))}
        </div>
    ) 
}