


export const Flavor = ({ flavorObject }) => {

    // let assignedFlavor = null

    // if (flavorObject.locationsFlavors.length > 0) {
    //     const flavorLocationRelationship = flavorObject.locationsFlavors[0]
    //     assignedFlavor = location.find(element => element.id === flavorLocationRelationship.locationId) 
    // }
  return  <section className="flavors">
        <div>{flavorObject?.flavor?.flavorName}</div>
    </section>
}