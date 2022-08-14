


export const Flavor = ({ flavorObject }) => {
    return <section className="flavors">
        <div className="flavors">🍧 {flavorObject?.flavor?.flavorName}</div>
    </section>
}

//flavorObject is deconstructing the prop from flavorList