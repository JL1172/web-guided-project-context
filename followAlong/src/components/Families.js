import { FamilyContext } from "../App";
import "../styles.scss";
import React, { useContext } from "react";

const Families = () => {
    const {families,activeFamily,setActiveFamily} = useContext(FamilyContext);
    return (
        <section className="header">
            <h1>Family Trees</h1>
            {families.map(family => {
                return <button
                    className={`family-button ${family.familyName ===
                        activeFamily.familyName && "active"}`}
                    key={family.familyName}
                    onClick={() => setActiveFamily(family)}
                >
                    {family.familyName}
                </button>
            })}
        </section>
    )
}

export default Families;